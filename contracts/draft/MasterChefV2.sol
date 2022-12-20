// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/SignedSafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IRewardToken is IERC20 {
    function mint(address to, uint256 value) external returns (bool);
}

library Int256_UInt256_Coversion {
    function toUInt256(int256 a) internal pure returns (uint256 b) {
        require(a >= 0, "Integer overflow");
        b = uint256(a);
    }    
}
library UInt256_Int256_Conversion {
    function toInt256(uint256 a) internal pure returns (int256 b) {
        b = int256(a);
        require(b >= 0, "Integer overflow");
    }
}
abstract contract Auth is Context {
    event AuthChanged(address indexed account, bool auth);
    mapping (address => bool) public owners;
    constructor () internal {
        address msgSender = _msgSender();
        owners[msgSender] = true;
        emit AuthChanged(msgSender, true);
    }
    function rely(address account) external auth { 
        owners[account] = true; 
        emit AuthChanged(account, true);
    }
    function deny(address account) external auth { 
        require(account != _msgSender(), "Auth: Cannot self deny");
        owners[account] = false; 
        emit AuthChanged(account, false); 
    }
    modifier auth {
        require(owners[_msgSender()], "Auth: Non authorized access"); 
        _; 
    }
}

/// @notice The (older) MasterChef contract gives out a constant number of reward tokens per block.
/// It is the only address with minting rights for reward tokens.
/// The idea for this MasterChef V2 (MCV2) contract is therefore to be the owner of a dummy token
/// that is deposited into the MasterChef V1 (MCV1) contract.
/// The allocation point for this pool on MCV1 is the total allocation point for all pools that receive double incentives.
contract MasterChefV2 is Auth, ReentrancyGuard {
    using SafeMath for uint256;
    using SignedSafeMath for int256;
    using SafeERC20 for IERC20;
    using UInt256_Int256_Conversion for uint256;
    using Int256_UInt256_Coversion for int256;

    modifier onlyEndUser() {
        require(tx.origin == msg.sender || whitelisted[msg.sender]);
        _;
    }
    mapping (address => bool) public whitelisted;
    function setWhiteList(address _who, bool _allowed) public auth {
        whitelisted[_who] = _allowed;
    }

    /// @notice Info of each user.
    /// `amount` LP token amount the user has provided.
    /// `rewardDebt` The amount of rewards entitled to the user.
    struct UserInfo {
        uint256 amount;
        int256 rewardDebt;
    }

    /// @notice Info of each pool.
    /// `allocPoint` The amount of allocation points assigned to the pool.
    /// Also known as the amount of rewards to distribute per block.
    struct PoolInfo {
        uint128 accRewardsPerShare;
        uint64 lastRewardBlock;
        uint64 allocPoint;
    }

    /// @notice Address of reward tokens contract.
    IRewardToken[] public rewardToken;

    /// @notice Info of each pool.
    PoolInfo[] public poolInfo;
    /// @notice Address of the LP token for each pool.
    IERC20[] public lpToken;

    /// @notice Info of each user that stakes LP tokens.
    mapping (uint256 => mapping (address => UserInfo)) public userInfo;
    /// @dev Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint;

    uint256 public rewardsPerBlock;

    uint256 private constant ACC_REWARDS_PRECISION = 1e12;

    // The block number when campaign mining starts.
    uint256 public startBlock;
    // The block number when campaign mining ends.
    uint256 public endBlock;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount, address indexed to);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount, address indexed to);
    event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount, address indexed to);
    event Harvest(address indexed user, uint256 indexed pid, uint256 amount);
    event LogPoolAddition(uint256 indexed pid, uint256 allocPoint, IERC20 indexed lpToken);
    event LogSetPool(uint256 indexed pid, uint256 allocPoint);
    event LogUpdatePool(uint256 indexed pid, uint64 lastRewardBlock, uint256 lpSupply, uint256 accRewardsPerShare);
    event LogInit();

    constructor(
        uint256 _rewardsPerBlock,
        uint256 _startBlock,
        uint256 _endBlock
    ) public {
        rewardsPerBlock = _rewardsPerBlock;
        startBlock = _startBlock;
        endBlock = _endBlock;
    }

    /// @notice Returns the number of pools.
    function poolLength() public view returns (uint256 pools) {
        pools = poolInfo.length;
    }

    /// @notice Add a new LP to the pool. Can only be called by the owner.
    /// DO NOT add the same LP token more than once. Rewards will be messed up if you do.
    /// @param allocPoint AP of the new pool.
    /// @param _lpToken Address of the LP ERC-20 token.
    function add(uint256 allocPoint, IERC20 _lpToken) public auth {
        uint256 lastRewardBlock = block.number;
        totalAllocPoint = totalAllocPoint.add(allocPoint);
        lpToken.push(_lpToken);

        poolInfo.push(PoolInfo({
            allocPoint: uint64(allocPoint),
            lastRewardBlock: uint64(lastRewardBlock),
            accRewardsPerShare: 0
        }));
        emit LogPoolAddition(lpToken.length.sub(1), allocPoint, _lpToken);
    }

    /// @notice Update the given pool's rewards allocation point and `IRewarder` contract. Can only be called by the owner.
    /// @param _pid The index of the pool. See `poolInfo`.
    /// @param _allocPoint New AP of the pool.
    function set(uint256 _pid, uint256 _allocPoint) public auth {
        totalAllocPoint = totalAllocPoint.sub(poolInfo[_pid].allocPoint).add(_allocPoint);
        poolInfo[_pid].allocPoint = uint64(_allocPoint);
        emit LogSetPool(_pid, _allocPoint);
    }

    function addRewards(IRewardToken[] memory _rewards) external auth {
        uint256 length = _rewards.length;
        for (uint256 i = 0 ; i < length ; i++) {
            rewardToken.push(_rewards[i]);
        }
    }

    /// @notice View function to see pending rewards on frontend.
    /// @param _pid The index of the pool. See `poolInfo`.
    /// @param _user Address of user.
    /// @return pending rewards for a given user.
    function pendingRewards(uint256 _pid, address _user) external view returns (uint256 pending) {
        PoolInfo memory pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accRewardsPerShare = pool.accRewardsPerShare;
        uint256 lpSupply = lpToken[_pid].balanceOf(address(this));
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 blocks = block.number.sub(pool.lastRewardBlock);
            uint256 rewards = blocks.mul(rewardsPerBlock).mul(pool.allocPoint) / totalAllocPoint;
            accRewardsPerShare = accRewardsPerShare.add(rewards.mul(ACC_REWARDS_PRECISION) / lpSupply);
        }
        pending = ((user.amount.mul(accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256().sub(user.rewardDebt)).toUInt256();
    }

    /// @notice Update reward variables for all pools. Be careful of gas spending!
    /// @param pids Pool IDs of all to be updated. Make sure to update all active pools.
    function massUpdatePools(uint256[] calldata pids) external {
        uint256 len = pids.length;
        for (uint256 i = 0; i < len; ++i) {
            updatePool(pids[i]);
        }
    }

    /// @notice Update reward variables of the given pool.
    /// @param pid The index of the pool. See `poolInfo`.
    function updatePool(uint256 pid) public {
        PoolInfo storage pool = poolInfo[pid];
        if (block.number > pool.lastRewardBlock) {
            uint256 lpSupply = lpToken[pid].balanceOf(address(this));
            if (lpSupply > 0) {
                uint256 blocks = block.number.sub(pool.lastRewardBlock);
                uint256 rewards = blocks.mul(rewardsPerBlock).mul(pool.allocPoint) / totalAllocPoint;
                pool.accRewardsPerShare = uint128(uint256(pool.accRewardsPerShare).add(rewards.mul(ACC_REWARDS_PRECISION) / lpSupply));
            }
            pool.lastRewardBlock = uint64(block.number);
            poolInfo[pid] = pool;
            emit LogUpdatePool(pid, pool.lastRewardBlock, lpSupply, pool.accRewardsPerShare);
        }
    }

    /// @notice Deposit LP tokens for rewards allocation.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param amount LP token amount to deposit.
    /// @param to The receiver of `amount` deposit benefit.
    function deposit(uint256 pid, uint256 amount, address to) external nonReentrant onlyEndUser {
        updatePool(pid);
        PoolInfo memory pool = poolInfo[pid];
        UserInfo storage user = userInfo[pid][to];

        // Effects
        user.amount = user.amount.add(amount);
        user.rewardDebt = user.rewardDebt.add((amount.mul(pool.accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256());

        lpToken[pid].safeTransferFrom(msg.sender, address(this), amount);

        emit Deposit(msg.sender, pid, amount, to);
    }

    /// @notice Withdraw LP tokens.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param amount LP token amount to withdraw.
    /// @param to Receiver of the LP tokens.
    function withdraw(uint256 pid, uint256 amount, address to) external nonReentrant onlyEndUser {
        updatePool(pid);
        PoolInfo memory pool = poolInfo[pid];
        UserInfo storage user = userInfo[pid][msg.sender];

        // Effects
        user.rewardDebt = user.rewardDebt.sub((amount.mul(pool.accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256());
        user.amount = user.amount.sub(amount);

        lpToken[pid].safeTransfer(to, amount);

        emit Withdraw(msg.sender, pid, amount, to);
    }

    /// @notice Harvest proceeds for transaction sender to `to`.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param to Receiver of rewards.
    function harvest(uint256 pid, address to) external nonReentrant onlyEndUser {
        updatePool(pid);
        PoolInfo memory pool = poolInfo[pid];
        UserInfo storage user = userInfo[pid][msg.sender];
        int256 accumulatedRewards = (user.amount.mul(pool.accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256();
        uint256 _pendingRewards = accumulatedRewards.sub(user.rewardDebt).toUInt256();

        // Effects
        user.rewardDebt = accumulatedRewards;

        // Interactions
        if (_pendingRewards != 0) {
            uint256 length = rewardToken.length;
            for (uint256 i = 0 ; i < length ; i++) {
                rewardToken[i].mint(to, _pendingRewards);
            }
        }
        
        emit Harvest(msg.sender, pid, _pendingRewards);
    }
    
    /// @notice Withdraw LP tokens and harvest proceeds for transaction sender to `to`.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param amount LP token amount to withdraw.
    /// @param to Receiver of the LP tokens and rewards.
    function withdrawAndHarvest(uint256 pid, uint256 amount, address to) external nonReentrant onlyEndUser {
        updatePool(pid);
        PoolInfo memory pool = poolInfo[pid];
        UserInfo storage user = userInfo[pid][msg.sender];
        int256 accumulatedRewards = (user.amount.mul(pool.accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256();
        uint256 _pendingRewards = accumulatedRewards.sub(user.rewardDebt).toUInt256();

        // Effects
        user.rewardDebt = accumulatedRewards.sub((amount.mul(pool.accRewardsPerShare) / ACC_REWARDS_PRECISION).toInt256());
        user.amount = user.amount.sub(amount);
        
        // Interactions
        if (_pendingRewards != 0) {
            uint256 length = rewardToken.length;
            for (uint256 i = 0 ; i < length ; i++) {
                rewardToken[i].mint(to, _pendingRewards);
            }
        }


        lpToken[pid].safeTransfer(to, amount);

        emit Withdraw(msg.sender, pid, amount, to);
        emit Harvest(msg.sender, pid, _pendingRewards);
    }

    /// @notice Withdraw without caring about rewards. EMERGENCY ONLY.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param to Receiver of the LP tokens.
    function emergencyWithdraw(uint256 pid, address to) external nonReentrant onlyEndUser {
        UserInfo storage user = userInfo[pid][msg.sender];
        uint256 amount = user.amount;
        user.amount = 0;
        user.rewardDebt = 0;

        // Note: transfer can fail or succeed if `amount` is zero.
        lpToken[pid].safeTransfer(to, amount);
        emit EmergencyWithdraw(msg.sender, pid, amount, to);
    }
}