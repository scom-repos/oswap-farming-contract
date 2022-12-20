// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";

contract AutoVestingToken is ERC20Capped {
    using SafeMath for uint256;

    uint256 public immutable start;
    uint256 public immutable end;
    uint256 public immutable duration;
    address public immutable farming;
    address public immutable redeeming;
    uint256 public totalVestable;
    mapping (address => uint256) public vestable;

    event Lock(address indexed account, uint256 amount);
    event Redeem(address indexed account, uint256 amount);

    constructor(string memory _name, string memory _symbol, uint256 _start, uint256 _end, uint256 _cap, address _farming, address _redeeming)
        public 
        ERC20(_name, _symbol)
        ERC20Capped(_cap)
    {
        start = _start;
        end = _end;
        duration = _end.sub(_start);
        farming = _farming;
        redeeming = _redeeming;
    }

    function _locked(uint256 vested) internal view returns (uint256) {
        if (end <= block.number) {
            return 0;
        } else if (block.number < start) {
            return vested;
        } else {
            return end.sub(block.number).mul(vested).div(duration);
        }
    }
    function totalLocked() external view returns (uint256) {
        return _locked(totalVestable);
    }
    function totalSupply() public view override returns (uint256) {
        return super.totalSupply().sub(_locked(totalVestable));
    }
    function locked(address account) external view returns (uint256) {
        return _locked(vestable[account]);
    }
    function balanceOf(address account) public view override returns (uint256) {
        return super.balanceOf(account).sub(_locked(vestable[account]));
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override (ERC20Capped) {
        super._beforeTokenTransfer(from, to, amount);
        if (from != address(0)) {
            require(amount <= balanceOf(from), "ERC20: transfer amount exceeds balance");
        }
    }

    function mint(address account, uint256 amount) external {
        require(msg.sender == farming, "Vesting: Not from farming");
        _mint(account, amount);
        totalVestable = totalVestable.add(amount);
        vestable[account] = vestable[account].add(amount);
    }
    function redeem(address account, uint256 amount) external {
        require(msg.sender == redeeming, "Vesting: Not from redeeming");
        uint256 balance = balanceOf(account);
        require(amount <= balance, "Vesting: Insufficient balance");
        _transfer(account, redeeming, amount);
        emit Redeem(account, amount);
    }
}