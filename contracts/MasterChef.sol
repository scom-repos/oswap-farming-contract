// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./Auth.sol";

interface IRewardToken is IERC20 {
    function cap() external view returns (uint256);
    function mint(address to, uint256 value) external;
    function lock(address to, uint256 value) external;
}


contract MasterChef is Auth, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    modifier onlyEndUser() {
        require(tx.origin == msg.sender || whitelisted[msg.sender]);
        _;
    }

    mapping (address => bool) public whitelisted;
    function setWhiteList(address _who, bool _allowed) public auth {
        whitelisted[_who] = _allowed;
    }

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        //
        // We do some fancy math here. Basically, any point in time, the amount of reward tokens
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accRewardsPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accRewardsPerShare` (and `lastRewardBlock`) gets updated.
        //   2. User receives the pending reward sent to his/her address.
        //   3. User's `amount` gets updated.
        //   4. User's `rewardDebt` gets updated.
    }
    // Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. The reward tokens to distribute per block.
        uint256 lastRewardBlock; // Last block number that reward tokens distribution occurs.
        uint256 accRewardsPerShare; // Accumulated reward tokens per share, times 1e12. See below.
    }
    // The reward token!
    IRewardToken[] public rewardToken;
    // Block number when bonus campaign period ends.
    uint256 public bonusEndBlock;
    // Reward tokens created per block.
    uint256 public rewardsPerBlock;
    // Bonus muliplier for early campaign partitioners.
    uint256 public constant BONUS_MULTIPLIER = 1;
    // Info of each pool.
    PoolInfo[] public poolInfo;
    // Info of each user that stakes LP tokens.
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    // Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint;
    // The block number when campaign mining starts.
    uint256 public startBlock;
    // The block number when campaign mining ends.
    uint256 public endBlock;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(
        address indexed user,
        uint256 indexed pid,
        uint256 amount
    );
    event Harvest(address indexed user, uint256 indexed pid, uint256 amount);
    event LogPoolAddition(uint256 indexed pid, uint256 allocPoint, IERC20 indexed lpToken);
    event LogSetPool(uint256 indexed pid, uint256 allocPoint);
    event LogUpdatePool(uint256 indexed pid, uint256 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare);
    event LogInit();

    constructor(
        IRewardToken[] memory _rewardToken,
        uint256 _rewardsPerBlock,
        uint256 _startBlock,
        uint256 _endBlock,
        uint256 _bonusEndBlock
    ) public {
        require(_startBlock < _endBlock, "Invalid end block");
        require(_startBlock <= _bonusEndBlock && _bonusEndBlock <= _endBlock, "Invalid bonus end block");
        uint256 totalRewards = _bonusEndBlock.sub(_startBlock).mul(BONUS_MULTIPLIER).add(_endBlock.sub(_bonusEndBlock)).mul(_rewardsPerBlock);
        uint256 length = _rewardToken.length;
        for (uint256 i = 0 ; i < length ; i++) {
            require(totalRewards + _rewardToken[i].totalSupply() <= _rewardToken[i].cap(), "Reward token cap too low");
        }
        rewardToken = _rewardToken;
        rewardsPerBlock = _rewardsPerBlock;
        bonusEndBlock = _bonusEndBlock;
        startBlock = _startBlock;
        endBlock = _endBlock;
    }

    function rewardTokenLength() external view returns (uint256) {
        return rewardToken.length;
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

    function pause() external auth {
        endBlock = block.number;
    }

    // Add a new lp to the pool. Can only be called by the owner.
    // XXX DO NOT add the same LP token more than once. Rewards will be messed up if you do.
    function add(
        uint256 _allocPoint,
        IERC20 _lpToken,
        bool _withUpdate
    ) external auth {
        if (_withUpdate) {
            massUpdatePools();
        }
        uint256 lastRewardBlock =
            block.number > startBlock ? block.number : startBlock;
        totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolInfo.push(
            PoolInfo({
                lpToken: _lpToken,
                allocPoint: _allocPoint,
                lastRewardBlock: lastRewardBlock,
                accRewardsPerShare: 0
            })
        );
        emit LogPoolAddition(poolInfo.length - 1, _allocPoint, _lpToken);
    }

    // Update the given pool's rewards allocation point. Can only be called by the owner.
    function set(
        uint256 _pid,
        uint256 _allocPoint,
        bool _withUpdate
    ) external auth {
        if (_withUpdate) {
            massUpdatePools();
        }
        totalAllocPoint = totalAllocPoint.sub(poolInfo[_pid].allocPoint).add(
            _allocPoint
        );
        poolInfo[_pid].allocPoint = _allocPoint;
        emit LogSetPool(_pid, _allocPoint);
    }

    // Return reward multiplier over the given _from to _to block.
    function getMultiplier(uint256 _from, uint256 _to)
        public
        view
        returns (uint256)
    {
        if (endBlock < _from) {
            return 0;
        } else {
            if (endBlock < _to)
                _to = endBlock;

            if (_to <= bonusEndBlock) {
                return _to.sub(_from).mul(BONUS_MULTIPLIER);
            } else if (_from >= bonusEndBlock) {
                return _to.sub(_from);
            } else {
                return
                    bonusEndBlock.sub(_from).mul(BONUS_MULTIPLIER).add(
                        _to.sub(bonusEndBlock)
                    );
            }
        }
    }

    // function used to calculate unclaim rewards after campaign ended.
    function totalPendingRewards()
        external
        view
        returns (uint256 pendingRewards)
    {
        uint256 length = poolInfo.length;
        for (uint256 _pid = 0 ; _pid < length ; _pid++) {
            PoolInfo storage pool = poolInfo[_pid];
            uint256 lpSupply = pool.lpToken.balanceOf(address(this));
            if (block.number > pool.lastRewardBlock && lpSupply != 0) {
                uint256 multiplier =
                    getMultiplier(pool.lastRewardBlock, block.number);
                uint256 rewards2 =
                    multiplier.mul(rewardsPerBlock).mul(pool.allocPoint).div(
                        totalAllocPoint
                    );
                pendingRewards = pendingRewards.add(rewards2);
            }
        }
    }

    // View function to see pending rewards on frontend.
    function pendingRewards(uint256 _pid, address _user)
        external
        view
        returns (uint256)
    {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accRewardsPerShare = pool.accRewardsPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 multiplier =
                getMultiplier(pool.lastRewardBlock, block.number);
            uint256 rewards =
                multiplier.mul(rewardsPerBlock).mul(pool.allocPoint).div(
                    totalAllocPoint
                );
            accRewardsPerShare = accRewardsPerShare.add(
                rewards.mul(1e12).div(lpSupply)
            );
        }
        return user.amount.mul(accRewardsPerShare).div(1e12).sub(user.rewardDebt);
    }

    // Update reward vairables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    /// @notice Update reward variables for all pools. Be careful of gas spending!
    /// @param pids Pool IDs of all to be updated. Make sure to update all active pools.
    function updateSelectedPools(uint256[] calldata pids) external {
        uint256 len = pids.length;
        for (uint256 i = 0; i < len; ++i) {
            updatePool(pids[i]);
        }
    }

    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        if (block.number <= pool.lastRewardBlock) {
            return;
        }
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply == 0) {
            pool.lastRewardBlock = block.number;
            return;
        }
        uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
        uint256 rewards =
            multiplier.mul(rewardsPerBlock).mul(pool.allocPoint).div(
                totalAllocPoint
            );
        if (rewards > 0) {
            uint256 length = rewardToken.length;
            for (uint256 i = 0 ; i < length ; i++) {
                rewardToken[i].mint(address(this), rewards);
            }
            pool.accRewardsPerShare = pool.accRewardsPerShare.add(
                rewards.mul(1e12).div(lpSupply)
            );
        }
        pool.lastRewardBlock = block.number;
        emit LogUpdatePool(_pid, pool.lastRewardBlock, lpSupply, pool.accRewardsPerShare);
    }

    function harvest(uint256 _pid, address _user) external nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        updatePool(_pid);
        uint256 pending =
            user.amount.mul(pool.accRewardsPerShare).div(1e12).sub(
                user.rewardDebt
            );
        safeRewardTransfer(_user, _pid, pending);
        user.rewardDebt = user.amount.mul(pool.accRewardsPerShare).div(1e12);
    }

    // Deposit LP tokens to MasterChef for rewards allocation.
    function deposit(uint256 _pid, uint256 _amount) external nonReentrant onlyEndUser {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        updatePool(_pid);
        if (user.amount > 0) {
            uint256 pending =
                user.amount.mul(pool.accRewardsPerShare).div(1e12).sub(
                    user.rewardDebt
                );
            safeRewardTransfer(msg.sender, _pid, pending);
        }
        pool.lpToken.safeTransferFrom(
            address(msg.sender),
            address(this),
            _amount
        );
        user.amount = user.amount.add(_amount);
        user.rewardDebt = user.amount.mul(pool.accRewardsPerShare).div(1e12);
        emit Deposit(msg.sender, _pid, _amount);
    }

    // Withdraw LP tokens from MasterChef.
    function withdraw(uint256 _pid, uint256 _amount) external nonReentrant onlyEndUser {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");
        updatePool(_pid);
        uint256 pending =
            user.amount.mul(pool.accRewardsPerShare).div(1e12).sub(
                user.rewardDebt
            );
        safeRewardTransfer(msg.sender, _pid,  pending);
        user.amount = user.amount.sub(_amount);
        user.rewardDebt = user.amount.mul(pool.accRewardsPerShare).div(1e12);
        pool.lpToken.safeTransfer(address(msg.sender), _amount);
        emit Withdraw(msg.sender, _pid, _amount);
    }

    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw(uint256 _pid) external nonReentrant onlyEndUser {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 amount = user.amount;
        user.amount = 0;
        user.rewardDebt = 0;
        pool.lpToken.safeTransfer(address(msg.sender), amount);
        emit EmergencyWithdraw(msg.sender, _pid, amount);
    }

    // Safe reward tokens transfer function, just in case if rounding error causes pool to not have enough reward tokens.
    function safeRewardTransfer(address _to, uint256 _pid, uint256 _amount) internal {
        if (_amount > 0) {
            uint256 length = rewardToken.length;
            for (uint256 i = 0 ; i < length ; i++) {
                uint256 balance = rewardToken[i].balanceOf(address(this));
                if (_amount > balance) {
                    rewardToken[i].lock(_to, balance);
                } else {
                    rewardToken[i].lock(_to, _amount);
                }
            }
            emit Harvest(_to, _pid, _amount);
        }
    }
}
