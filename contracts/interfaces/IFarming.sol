// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFarming {

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        int256 rewardDebt; // Reward debt. See explanation below.
    }

    struct UserRewardInfo {
        uint256 harvested; // vested + immediately rewarded
        uint256 locked;
        uint256 lockedTill;
        uint256 lastUpdate;
    }

    // Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. rewards distribute per block.
        uint256 endBlock;
        uint256 bonusMultiplier; // can change
        uint256 bonusEndBlock;
        // state variables updated by the contract
        int256 rewardDebt;
        uint256 lastRewardBlock; // Last block number that distribution occurs.
        uint256 accRewardPerShare; // Accumulated rewards per share, times 1e12.
    }
    // total vested balance by reward token
    struct RewardInfo {
        IERC20 rewardToken;
        uint256 multiplier; // can change
        uint256 vestingRatio; // 0 if vest 100% immediately
        bool vestingStartOnHarvest; // if false, use endBlock as vesting start
        uint256 vestingDuration; // in number of blocks
        // state variables updated by the contract
        uint256 rewarded;
        uint256 reserve; // amount in vesting
    }

    // globle variables
    function rewardPerBlock() external view returns (uint256);

    // PoolInfo[] public poolInfo;
    function poolInfo(uint256) external view returns (
        IERC20 lpToken,
        uint256 allocPoint,
        uint256 endBlock,
        uint256 bonusMultiplier,
        uint256 bonusEndBlock,
        int256 rewardDebt,
        uint256 lastRewardBlock,
        uint256 accRewardPerShare
    );

    // mapping (IERC20 => uint256) public poolIdx;
    function poolIdx(IERC20) external view returns (uint256);

    // RewardInfo[] public rewardInfo;
    function rewardInfo(uint256) external view returns (
        IERC20 rewardToken,
        uint256 multiplier,
        uint256 vestingRatio,
        bool vestingStartOnHarvest,
        uint256 vestingDuration,
        uint256 rewarded,
        uint256 reserve
    );

    // mapping (IERC20 => uint256) public rewardIdx;
    function rewardIdx(IERC20) external view returns (uint256);

    // Info of each user that stakes LP tokens.
    // mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    function userInfo(uint256, address) external view returns (
        uint256 amount,
        int256 rewardDebt
    );

    // mapping(uint256 => mapping (IERC20 => mapping (address => UserRewardInfo))) public userRewards;
    function userRewards(uint256, uint256, address) external view returns (
        uint256 harvested,
        uint256 locked,
        uint256 lockedTill,
        uint256 lastUpdate
    );

    // globle variables
    function totalAllocPoint() external view returns (uint256);
    function startBlock() external view returns (uint256);
    function endBlock() external view returns (uint256);
    function admin() external view returns (address);

    // events
    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(
        address indexed user,
        uint256 indexed pid,
        uint256 amount
    );
    event Harvest(address indexed user, uint256 indexed pid, uint256 indexed rewardId, uint256 amount, uint256 locked);
    event Vested(address indexed user, uint256 indexed pid, uint256 indexed rewardId, uint256 amount);
    event LogPoolAddition(uint256 indexed pid, uint256 allocPoint, IERC20 indexed lpToken, uint256 endBlock, uint256 bonusMultiplier, uint256 bonusEndBlock);
    event LogSetPool(uint256 indexed pid, uint256 allocPoint, uint256 endBlock, uint256 bonusMultiplier, uint256 bonusEndBlock);
    event LogUpdatePool(uint256 indexed pid, uint256 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare);
    event LogRewardAddition(uint256 indexed rewardId, IERC20 indexed rewardToken, uint256 multiplier, uint256 vestingRatio, bool vestingStartOnHarvest, uint256 vestingDuration);
    event LogSetReward(uint256 indexed rewardId, uint256 multiplier, uint256 vestingRatio, uint256 vestingDuration);

    // array length
    function poolLength() external view returns (uint256);
    function rewardLength() external view returns (uint256);

    // onlyOwner
    function addPool(uint256 _allocPoint, IERC20 _lpToken, uint256 _endBlock, uint256 _bonusMultiplier, uint256 _bonusEndBlock, bool _withUpdate) external;
    function setPool(uint256 _pid, uint256 _allocPoint, uint256 _endBlock, uint256 _bonusMultiplier, uint256 _bonusEndBlock, bool _withUpdate) external;
    function addRewards(IERC20 _rewardToken, uint256 _multiplier, uint256 _vestingRatio, bool _vestingStartOnHarvest, uint256 _vestingDuration) external;
    function setRewards(uint256 _rewardId, uint256 _multiplier, uint256 _vestingRatio, uint256 _vestingDuration) external;

    // public
    function massUpdatePools() external;
    function updateSelectedPools(uint256[] calldata pids) external;
    function updatePool(uint256 _pid) external;
    function resetPool(uint256 _pid) external;
    function adminWithdrawReward(uint256 _rewardId) external;
    function getReserveReward(uint256 _rewardId) external view returns (uint256 reserve);
    // function getMultiplier(uint256 _from, uint256 _to) external view returns (uint256);

    // user functions
    function pendingReward(uint256 _pid, address _user) external view returns (IERC20[] memory rewardToken, uint256[] memory availableNow, uint256[] memory toBeVested, uint256[] memory vestingStart, uint256[] memory vestingDuration);
    function harvest(uint256 _pid, address _user) external;
    function claimableVesting(uint256 _pid, uint256 _rewardId, address _user) external view returns (uint256 release);
    function claimVesting(uint256 _pid, uint256 _rewardId, address _user) external;
    function deposit(uint256 _pid, uint256 _amount) external;
    function withdraw(uint256 _pid, uint256 _amount) external;
    function emergencyWithdraw(uint256 _pid) external;
}
