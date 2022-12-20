// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

interface Vesting is IERC20 {
    function totalAvailableAmount(address _account) external view returns (uint256);
    function redeem(address _account, uint256 _amount) external;
}
interface IFarming {
    function endBlock() external view returns (uint256);
    function totalPendingRewards() external view returns (uint256);
    function harvest(uint256 _pid, address _user) external;
}
contract Redeeming {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    IFarming public immutable farming; 
    Vesting[] public vesting;
    IERC20[][] public reward;
    uint256[][] public convertingRatio;
    address public immutable admin;
    uint256 allSize;

    event Redeem(address indexed account, address token, uint256 vesting, uint256 reward);
    event ReclaimRemainingReward();

    constructor(IFarming _farming, Vesting[] memory _vesting, uint256[] memory _rewardPerVesting, IERC20[] memory _reward, uint256[] memory _convertingRatio, address _admin) public {
        require(_vesting.length == _rewardPerVesting.length, "vesting size not matched");
        uint256 length = _vesting.length;
        uint256 length2 = 0;
        for (uint256 i = 0 ; i < length ; i++) {
            length2 = length2.add(_rewardPerVesting[i]);
        }
        require(length2 == _reward.length && _reward.length == _convertingRatio.length, "reward size not matched");
        farming = _farming;
        vesting = _vesting;

        reward = new IERC20[][](_vesting.length);
        convertingRatio = new uint256[][](_vesting.length);
        uint256 k = 0;
        for (uint256 i = 0; i < length ; i++) {
            uint256 size = _rewardPerVesting[i];
            reward[i] = new IERC20[](size);
            convertingRatio[i] = new uint256[](size);
            for (uint256 j = 0 ; j < size ; j++) {
                reward[i][j] = _reward[k];
                convertingRatio[i][j] = _convertingRatio[k];
                k++;
            }
        }
        allSize = k;
        admin = _admin;
    }
    function putFund(IERC20 token, address from, uint256 amount) external {
        require(admin == msg.sender, "Not from admin");
        token.safeTransferFrom(from, address(this), amount);
    }

    function vestingLength() external view returns (uint256) {
        return vesting.length;
    }
    function rewardLength(uint256 vestingIdx) external view returns (uint256) {
        return reward[vestingIdx].length;
    }
    function availableRewardAmount(address account) external view returns (IERC20[] memory tokens, uint256[] memory availableReward) {
        availableReward = new uint256[](allSize);
        tokens = new IERC20[](allSize);
        uint256 length = vesting.length;
        uint256 k;
        for (uint256 i = 0 ; i < length ; i++) {
            uint256 availableVesting = vesting[i].totalAvailableAmount(account);
            uint256 length2 = reward[i].length;
            for (uint256 j = 0 ; j < length2 ; j++) {
                tokens[k] = reward[i][j];
                availableReward[k] = availableVesting.mul(convertingRatio[i][j]).div(1e18);
                k++;
            }
        }
    }

    function redeemAllAvailable(address account) public {
        uint256 length = vesting.length;
        for (uint256 i = 0 ; i < length ; i++) {
            redeem(account, i);
        }
    }
    function redeem(address account, uint256 vestingIdx) public {
        require(account != address(this), "invalid account");
        require(vestingIdx < vesting.length, "invalid vestingIdx");
        uint256 availableVesting = vesting[vestingIdx].totalAvailableAmount(account);
        if (availableVesting > 0) {
            redeemAmount(account, vestingIdx, availableVesting);
        }
    }
    function redeemAmount(address account, uint256 vestingIdx, uint256 amount) internal {
        // require(account != address(this), "invalid account");
        // require(vestingIdx < vesting.length, "invalid vestingIdx");
        vesting[vestingIdx].redeem(account, amount);
        uint256 length2 = reward[vestingIdx].length;
        for (uint256 j = 0 ; j < length2 ; j++) {
            uint256 availableReward = amount.mul(convertingRatio[vestingIdx][j]).div(1e18);
            if (availableReward > 0) {
                reward[vestingIdx][j].safeTransfer(account, availableReward);
                emit Redeem(account, address(reward[vestingIdx][j]), amount, availableReward);
            }
        }
    }
    function harvestAndRedeem(address account, uint256 pid) external {
        farming.harvest(pid, account);
        redeemAllAvailable(account);
    }

    function reclaimRemainingReward() external {
        uint256 endBlock = farming.endBlock();
        require(endBlock < block.number, "campaign has not finished");

        uint256 pending = farming.totalPendingRewards();

        uint256 length = vesting.length;
        for (uint256 i = 0 ; i < length ; i++) {
            // harvested
            uint256 remainAmount = vesting[i].totalSupply();
            // to be harvested
            remainAmount = remainAmount.add(pending);
            // claimed
            remainAmount = remainAmount.sub(vesting[i].balanceOf(address(this)));

            uint256 length2 = reward[i].length;
            for (uint256 j = 0 ; j < length2 ; j++) {
                uint256 balance = reward[i][j].balanceOf(address(this));
                uint256 amount = remainAmount.mul(convertingRatio[i][j]).div(1e18);
                amount = balance.sub(amount);
                if (amount > 0) {
                    reward[i][j].safeTransfer(admin, amount);
                }
            }
        }
        emit ReclaimRemainingReward();
    }
}
