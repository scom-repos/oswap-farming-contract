// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/SignedSafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IFarming.sol";
import "./Auth.sol";

contract Farming is Auth, IFarming, ReentrancyGuard {
    using SafeMath for uint256;
    using SignedSafeMath for int256;
    using SafeERC20 for IERC20;

    function toInt256(uint256 a) internal pure returns (int256 b) {
        b = int256(a);
        require(b >= 0, "Integer overflow");
    }
    function toUint256(int256 a) internal pure returns (uint256 b) {
        require(a >= 0, "Integer overflow");
        b = uint256(a);
    }

    // reward created per block.
    uint256 public override rewardPerBlock;

    // Info of each pool.
    PoolInfo[] public override poolInfo; // poolInfo[pid]
    mapping (IERC20 => uint256) public override poolIdx; // poolIdx[lpToken]
    RewardInfo[] public override rewardInfo; // rewardInfo[idx]
    mapping (IERC20 => uint256) public override rewardIdx; // rewardIdx[rewardToken]

    // Info of each user that stakes LP tokens.
    mapping (uint256 => mapping (address => UserInfo)) public override userInfo; // userInfo[pid][user]
    mapping (uint256 => mapping (uint256 => mapping (address => UserRewardInfo))) public override userRewards; // userRewards[pid][rewardToken][user]

    mapping (address => bool) public whitelisted;

    // Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public override totalAllocPoint;
    uint256 public override startBlock;
    uint256 public override endBlock;
    address public override admin;

    constructor(
        uint256 _rewardPerBlock,
        uint256 _startBlock,
        uint256 _endBlock,
        address _admin
    ) public {
        if (_startBlock < block.number) {
            _startBlock = block.number;
        }
        require(_startBlock < _endBlock, "Invalid end block");
        rewardPerBlock = _rewardPerBlock;
        startBlock = _startBlock;
        endBlock = _endBlock;
        admin = _admin;
    }

    function setAdmin(address _admin) public auth {
        require(_admin != address(0), "Farming: zero address");
        admin = _admin;
    }

    function setWhiteList(address _who, bool _allowed) public auth {
        whitelisted[_who] = _allowed;
    }

    function poolLength() external override view returns (uint256) {
        return poolInfo.length;
    }
    function rewardLength() external override view returns (uint256) {
        return rewardInfo.length;
    }

    // Add a new lp to the pool. Can only be called by the owner.
    function addPool(
        uint256 _allocPoint,
        IERC20 _lpToken,
        uint256 _endBlock,
        uint256 _bonusMultiplier, 
        uint256 _bonusEndBlock,
        bool _withUpdate
    ) external override auth {
        if (_withUpdate) {
            massUpdatePools();
        }
        require(address(_lpToken) != address(0), "Invalid LP Token");
        require(poolInfo.length == 0 || address(poolInfo[poolIdx[_lpToken]].lpToken) != address(_lpToken), "LP Token already exists");
        uint256 lastRewardBlock = block.number > startBlock ? block.number : startBlock;
        require(lastRewardBlock < _endBlock, "Pool end block before campaign start");
        require(_endBlock <= endBlock, "Pool end block after campaign end");
        if (_allocPoint > 0)
            totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolIdx[_lpToken] = poolInfo.length;
        poolInfo.push(
            PoolInfo({
                lpToken: _lpToken,
                allocPoint: _allocPoint,
                endBlock: _endBlock,
                bonusMultiplier: _bonusMultiplier,
                bonusEndBlock: _bonusEndBlock,
                rewardDebt: 0,
                lastRewardBlock: lastRewardBlock,
                accRewardPerShare: 0
            })
        );
        emit LogPoolAddition(poolInfo.length - 1, _allocPoint, _lpToken, _endBlock, _bonusMultiplier, _bonusEndBlock);
    }
    // Set lp token parameters
    function setPool(
        uint256 _pid,
        uint256 _allocPoint, 
        uint256 _endBlock, 
        uint256 _bonusMultiplier, 
        uint256 _bonusEndBlock,
        bool _withUpdate
    ) external override auth {
        require(_pid < poolInfo.length, "Invalid pool Id");
        PoolInfo storage pool = poolInfo[_pid];
        uint256 lastRewardBlock = block.number > startBlock ? block.number : startBlock;
        require(lastRewardBlock < _endBlock, "Pool end block before campaign start");
        require(_endBlock <= endBlock, "Pool end block after campaign end");
        if (_withUpdate) {
            massUpdatePools();
        }
        if (pool.allocPoint != _allocPoint) {
            totalAllocPoint = totalAllocPoint.sub(pool.allocPoint).add(_allocPoint);
            pool.allocPoint = _allocPoint;
        }
        pool.endBlock = _endBlock;
        pool.bonusMultiplier = _bonusMultiplier;
        pool.bonusEndBlock = _bonusEndBlock;

        emit LogSetPool(_pid, _allocPoint, _endBlock, _bonusMultiplier, _bonusEndBlock);
    }
    // Add reward tokens
    function addRewards(
        IERC20 _rewardToken,
        uint256 _multiplier, 
        uint256 _vestingRatio,
        bool _vestingStartOnHarvest,
        uint256 _vestingDuration
    ) external override auth {
        require(rewardInfo.length == 0 || address(rewardInfo[rewardIdx[_rewardToken]].rewardToken) != address(_rewardToken), "Reward token already exists");
        require(_vestingRatio <= 10**18, "Invalid vasting ratio");
        rewardIdx[_rewardToken] = rewardInfo.length;
        rewardInfo.push(
            RewardInfo({
                rewardToken: _rewardToken,
                multiplier: _multiplier,
                vestingRatio: _vestingRatio,
                vestingStartOnHarvest: _vestingStartOnHarvest,
                vestingDuration: _vestingDuration,
                rewarded: 0,
                reserve: 0
            })
        );
        emit LogRewardAddition(rewardInfo.length.sub(1), _rewardToken, _multiplier, _vestingRatio, _vestingStartOnHarvest, _vestingDuration);
    }
    // Set reward tokens parameters
    function setRewards(
        uint256 _rewardId,
        uint256 _multiplier,
        uint256 _vestingRatio,
        uint256 _vestingDuration
    ) external override auth {
        require(_rewardId <= rewardInfo.length, "Reward token not exists");
        RewardInfo storage reward = rewardInfo[_rewardId];
        require(_vestingRatio <= 10**18, "Invalid vasting ratio");
        reward.multiplier = _multiplier;
        reward.vestingRatio = _vestingRatio;
        reward.vestingDuration = _vestingDuration;
        emit LogSetReward(_rewardId, _multiplier, _vestingRatio, _vestingDuration);
    }

    // Returns reward multiplier given the pid
    function getLpReward(uint256 _pid) internal view returns (uint256) {
        PoolInfo storage pool = poolInfo[_pid];
        uint256 from = pool.lastRewardBlock;
        uint256 to = pool.endBlock < block.number ? pool.endBlock : block.number;
        uint256 bonusEndBlock = pool.bonusEndBlock;
        uint256 _multiplier;

        if (from <= bonusEndBlock) {
            if (to <= bonusEndBlock) {
                _multiplier = to.sub(from).mul(pool.bonusMultiplier);
            } else {
                _multiplier = bonusEndBlock.sub(from).mul(pool.bonusMultiplier).add(to.sub(bonusEndBlock));
            }
        } else if (from < to) {
            _multiplier = to.sub(from);
        }

        return _multiplier.mul(rewardPerBlock).mul(pool.allocPoint).div(totalAllocPoint);
    }

    // Returns available rewards for the specified user
    function pendingReward(uint256 _pid, address _user) external override view returns (
        IERC20[] memory rewardToken, 
        uint256[] memory availableNow, 
        uint256[] memory toBeVested, 
        uint256[] memory vestingStart, 
        uint256[] memory vestingDuration
    ) {
        UserInfo storage user = userInfo[_pid][_user];
        uint256 pending;
        { // "Stack too deep" fix
        PoolInfo storage pool = poolInfo[_pid];
        require(address(pool.lpToken) != address(0), "Invalid pool Id");
        uint256 accRewardPerShare = pool.accRewardPerShare;
        if (block.number > pool.lastRewardBlock) {
            uint256 lpSupply = pool.lpToken.balanceOf(address(this));
            if (lpSupply != 0) {
                uint256 lpReward = getLpReward(_pid);
                accRewardPerShare = accRewardPerShare.add(lpReward.mul(1e12).div(lpSupply));
            }
        }
        pending = toUint256(toInt256(user.amount.mul(accRewardPerShare).div(1e12)).sub(user.rewardDebt));
        }

        rewardToken = new IERC20[](rewardInfo.length);
        availableNow = new uint256[](rewardInfo.length);
        toBeVested = new uint256[](rewardInfo.length);
        vestingStart = new uint256[](rewardInfo.length);
        vestingDuration = new uint256[](rewardInfo.length);

        // release1: matured vesting available to user
        // vesting1: amount still in vesting
        // release2: newly harvested amount
        // vesting2: the new amount that will be put in vesting
        // release3: if campaigned has ended, part of vesting2 has matured and can be released to user
        // 
        // amounts available to user: release1 + release2 + release3
        for (uint256 rewardId = 0 ; rewardId < rewardInfo.length ; rewardId++) {
            RewardInfo storage reward = rewardInfo[rewardId];
            rewardToken[rewardId] = reward.rewardToken;
            if (pending > 0) {
                uint256 rewardAmount = pending.mul(reward.multiplier).div(1e18);

                if (reward.vestingRatio > 0) {
                    uint256 vesting1 = userRewards[_pid][rewardId][_user].locked;
                    if (endBlock.add(reward.vestingDuration) <= block.number) {
                        // vesting period has been passed; all harvested amount plus vestings can be release to user
                        rewardAmount = rewardAmount.add(vesting1);
                    } else {
                        uint256 release1;
                        if (reward.vestingStartOnHarvest) {
                            release1 = _claimableVesting(_pid, rewardId, _user, endBlock < block.number ? endBlock : block.number);
                            vesting1 = vesting1.sub(release1);
                        }

                        // newly harvested amount that need to put in vesting
                        // plus the amount still in vesting (vesting1) to be put in new vesting (   )
                        uint256 release2 = rewardAmount.mul(uint256(1e18).sub(reward.vestingRatio)).div(1e18);
                        uint256 vesting2 = rewardAmount.sub(release2).add(vesting1);
                        uint256 release3;
                        if (endBlock < block.number) {
                            // find the matured amount between campaign end and current block
                            release3 = vesting2.mul(block.number.sub(endBlock)).div(reward.vestingDuration);
                        }
                        toBeVested[rewardId] = vesting2.sub(release3);
                        vestingStart[rewardId] = (reward.vestingStartOnHarvest && block.number < endBlock) ? block.number : endBlock;
                        vestingDuration[rewardId] = reward.vestingDuration;
                        rewardAmount = release1.add(release2).add(release3);
                    }
                }
                uint256 amount = reward.rewardToken.balanceOf(address(this));
                amount = rewardAmount < amount ? rewardAmount : amount;
                availableNow[rewardId] = amount;
            }
        }
    }

    // Update reward vairables for all pools. Be careful of gas spending!
    function massUpdatePools() public override {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }
    // Update selected pool only, useful if gas cost of massUpdatePools is too high
    function updateSelectedPools(uint256[] calldata pids) external override {
        uint256 len = pids.length;
        for (uint256 i = 0; i < len; ++i) {
            updatePool(pids[i]);
        }
    }

    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public override {
        PoolInfo storage pool = poolInfo[_pid];
        require(address(pool.lpToken) != address(0), "Invalid pool Id");
        if (block.number > pool.lastRewardBlock) {
            uint256 lpSupply = pool.lpToken.balanceOf(address(this));
            if (lpSupply != 0) {
                uint256 lpReward = getLpReward(_pid);
                pool.accRewardPerShare = pool.accRewardPerShare.add(lpReward.mul(1e12).div(lpSupply));
            }
            pool.lastRewardBlock = block.number;
            emit LogUpdatePool(_pid, pool.lastRewardBlock, lpSupply, pool.accRewardPerShare);
        }
    }
    // Set allocPoint to zero after pool expired.
    function resetPool(uint256 _pid) external override {
        PoolInfo storage pool = poolInfo[_pid];
        require(address(pool.lpToken) != address(0), "No such lpToken");
        if (pool.endBlock < block.number) {
            totalAllocPoint = totalAllocPoint.sub(pool.allocPoint);
            pool.allocPoint = 0;
            emit LogSetPool(_pid, 0, pool.endBlock, pool.bonusMultiplier, pool.bonusEndBlock);
        }
    }

    // To distribute rewards to users.
    // If vestingRatio is zero, rewards go to user immediately and vestingStartOnHarvest is ignored.
    // If vestingRatio is non-zero, the specifed amount will be put into vesting, the remaining transfers to user.
    // If vestingStartOnHarvest is false, vesting starts when canpaign ended.
    // If vestingStartOnHarvest is true, vesting starts immediately. To simplify the process and 
    // to lower the gas fee, the newly harvested vesting amount is combined with the amount already 
    // in vesting, i.e., the existing vesting schedule is extended. To reduce the impact, the matured 
    // vested amount will be transfered to user and only the amount that is under vesting will use the 
    // newly extended schedule.
    // 
    function harvest(uint256 _pid, address _user) external override nonReentrant {
        updatePool(_pid);
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        int256 pending;
        {
        int256 accReward = toInt256(user.amount.mul(pool.accRewardPerShare).div(1e12));
        pending = accReward.sub(user.rewardDebt);
        if (pending <= 0) {
            return;
        }
        user.rewardDebt = accReward;
        pool.rewardDebt = pool.rewardDebt.add(pending);
        }

        uint256 length = rewardInfo.length;
        for (uint256 rewardId = 0 ; rewardId < length ; rewardId++) {
            RewardInfo storage reward = rewardInfo[rewardId];
            UserRewardInfo storage userReward = userRewards[_pid][rewardId][_user];
            uint256 rewardAmount = toUint256(pending).mul(reward.multiplier).div(1e18);
            userReward.harvested = userReward.harvested.add(rewardAmount);

            uint256 locked;
            uint256 release;
            if (reward.vestingRatio > 0) {
                bool campaignEnded = endBlock < block.number;
                if (reward.vestingStartOnHarvest) {
                    // find the matured amount that can be transfer to user, up to campaign end
                    uint256 blocknum = campaignEnded ? endBlock : block.number;
                    release = _updateUserVesting(_pid, rewardId, _user, blocknum);
                }
                // newly rewards that put in vesting
                locked = rewardAmount.mul(reward.vestingRatio).div(1e18);
                reward.reserve = reward.reserve.add(locked);
                userReward.locked = userReward.locked.add(locked);
                userReward.lastUpdate = (reward.vestingStartOnHarvest && !campaignEnded) ? block.number : endBlock;
                userReward.lockedTill = userReward.lastUpdate.add(reward.vestingDuration);

                // newly harvested reward transfer to user
                rewardAmount = rewardAmount.sub(locked);
                if (campaignEnded) {
                    // if campaign already ended, find the matured amount up to current block 
                    release = release.add(_updateUserVesting(_pid, rewardId, _user, block.number));
                }
            }

            reward.rewarded = reward.rewarded.add(rewardAmount);

            // trnasfer rewards to user
            if (address(reward.rewardToken) != address(0)) {
                release = release.add(rewardAmount);
                uint256 bal = reward.rewardToken.balanceOf(address(this));
                require(release <= bal, "Insufficient reward balance");
                reward.rewardToken.safeTransfer(_user, release);
            }
            emit Harvest(_user, _pid, rewardId, rewardAmount, locked);
        }
    }

    // View function to returns the vested amount that the user can receive
    function claimableVesting(uint256 _pid, uint256 _rewardId, address _user) public override view returns (uint256 release) {
        release = _claimableVesting(_pid, _rewardId, _user, block.number);
    }
    function _claimableVesting(uint256 _pid, uint256 _rewardId, address _user, uint256 blocknum) internal view returns (uint256 release) {
        RewardInfo storage reward = rewardInfo[_rewardId];
        require(reward.vestingRatio > 0, "No vesting specified");
        UserRewardInfo storage userReward = userRewards[_pid][_rewardId][_user];
        if (reward.vestingRatio > 0 && userReward.lastUpdate < blocknum) {
            if (blocknum >= userReward.lockedTill) {
                release = userReward.locked;
            } else {
                release = userReward.locked.mul(blocknum.sub(userReward.lastUpdate)).div(userReward.lockedTill.sub(userReward.lastUpdate));
            }
        }
    }
    // Transfers vested amount to user
    function claimVesting(uint256 _pid, uint256 _rewardId, address _user) public override nonReentrant {
        uint256 release = _updateUserVesting(_pid, _rewardId, _user, block.number);
        if (release > 0 && address(rewardInfo[_rewardId].rewardToken) != address(0))
            rewardInfo[_rewardId].rewardToken.safeTransfer(_user, release);
    }
    function _updateUserVesting(uint256 _pid, uint256 _rewardId, address _user, uint256 blocknum) internal returns (uint256 release) {
        release = _claimableVesting(_pid, _rewardId, _user, blocknum);
        if (release > 0) {
            RewardInfo storage reward = rewardInfo[_rewardId];
            UserRewardInfo storage userReward = userRewards[_pid][_rewardId][_user];

            userReward.lastUpdate = blocknum;
            userReward.locked = userReward.locked.sub(release);
            if (address(reward.rewardToken) != address(0)) {
                uint256 bal = reward.rewardToken.balanceOf(address(this));
                require(release <= bal, "Insufficient reward balance");
            }
            reward.reserve = reward.reserve.sub(release);
            reward.rewarded = reward.rewarded.add(release);
            emit Vested(_user, _pid, _rewardId, release);
        }
    }

    // Add staking tokens to campaign
    function deposit(uint256 _pid, uint256 _amount) external override nonReentrant {
        require(_amount > 0, "Invalid amount");
        require(tx.origin == msg.sender || whitelisted[msg.sender]);
        updatePool(_pid);
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(block.number < pool.endBlock, "Campaign already ended;");
        pool.lpToken.safeTransferFrom(address(msg.sender), address(this), _amount);
        user.amount = user.amount.add(_amount);
        int256 debt = toInt256(_amount.mul(pool.accRewardPerShare).div(1e12));
        user.rewardDebt = user.rewardDebt.add(debt);
        pool.rewardDebt = pool.rewardDebt.add(debt);
        emit Deposit(msg.sender, _pid, _amount);
    }
    // Remove staking tokens from campaign
    function withdraw(uint256 _pid, uint256 _amount) external override nonReentrant {
        require(_amount > 0, "Invalid amount");
        updatePool(_pid);
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");
        user.amount = user.amount.sub(_amount);
        int256 debt = toInt256(_amount.mul(pool.accRewardPerShare).div(1e12));
        user.rewardDebt = user.rewardDebt.sub(debt);
        pool.rewardDebt = pool.rewardDebt.sub(debt);
        pool.lpToken.safeTransfer(address(msg.sender), _amount);
        emit Withdraw(msg.sender, _pid, _amount);
    }
    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw(uint256 _pid) external override nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        require(address(pool.lpToken) != address(0), "Invalid pool Id");
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 amount = user.amount;
        pool.rewardDebt = pool.rewardDebt.sub(user.rewardDebt);
        user.amount = 0;
        user.rewardDebt = 0;
        pool.lpToken.safeTransfer(address(msg.sender), amount);
        emit EmergencyWithdraw(msg.sender, _pid, amount);
    }
    // Moves remaining rewaards tokens from campaign back to owner
    function getReserveReward(uint256 _rewardId) public override view returns (uint256 reserve) {
        require(_rewardId <= rewardInfo.length, "Reward token not exists");
        require(endBlock < block.number, "Campaign not ended");
        uint256 length = poolInfo.length;
        RewardInfo storage reward = rewardInfo[_rewardId];
        for (uint256 pid = 0; pid < length; ++pid) {
            PoolInfo storage pool = poolInfo[pid];

            uint256 accReward;
            uint256 lpSupply = pool.lpToken.balanceOf(address(this));
            if (lpSupply != 0) {
                accReward = pool.accRewardPerShare.mul(lpSupply);
                if (block.number > pool.lastRewardBlock) {
                    uint256 lpReward = getLpReward(pid);
                    accReward = accReward.add(lpReward.mul(1e12));
                }
            }

            reserve = reserve.add(toUint256(toInt256(accReward).sub(pool.rewardDebt.mul(1e12))).mul(reward.multiplier));
        }
        return reserve.div(1e30).add(reward.reserve); // shift 12 + 18 digits
    }
    function adminWithdrawReward(uint256 _rewardId) external override nonReentrant {
        uint256 reserve = getReserveReward(_rewardId);
        RewardInfo storage reward = rewardInfo[_rewardId];
        uint256 balance = reward.rewardToken.balanceOf(address(this));
        require(balance > reserve, "Not enough balance");
        if (address(reward.rewardToken) != address(0)) {
            reward.rewardToken.safeTransfer(admin, balance.sub(reserve));
        }
    }
}
