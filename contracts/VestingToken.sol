// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VestingToken is ERC20, Ownable {
  uint256 private _totalLock;

  uint256 public immutable startReleaseBlock;
  uint256 public immutable endReleaseBlock;
  uint256 public immutable cap;
  address public farming;
  address public redeeming;
  uint256 public immutable vestingRatio;

  mapping(address => uint256) private _locks;
  mapping(address => uint256) private _lastUnlockBlock;

  event Lock(address indexed account, uint256 direct, uint256 amount);
  event Redeem(address indexed account, uint256 amount);

  constructor(string memory name_, string memory symbol_, uint256 _startReleaseBlock, uint256 _endReleaseBlock, uint256 _cap, uint256 _vestingRatio) public ERC20(name_, symbol_) {
    require(_endReleaseBlock >= _startReleaseBlock, "endReleaseBlock < startReleaseBlock");
    require(_vestingRatio <= 1e18, "Invalid vesting ratio");
    _setupDecimals(18);
    startReleaseBlock = _startReleaseBlock;
    endReleaseBlock = _endReleaseBlock;
    cap = _cap;
    vestingRatio = _vestingRatio;
  }

  function setFarming(address _farming) external onlyOwner {
    require(farming == address(0), "farming already set");
    farming = _farming;
  }
  function setRedeeming(address _redeeming) external onlyOwner {
    require(redeeming == address(0), "redeeming already set");
    redeeming = _redeeming;
  }

  function unlockedSupply() external view returns (uint256) {
    return totalSupply().sub(totalLock());
  }

  function totalLock() public view returns (uint256) {
    return _totalLock;
  }

  function mint(address _to, uint256 _amount) public {
    require(msg.sender == farming, "not from farming");
    require(totalSupply().add(_amount) <= cap, "cap exceeded");
    _mint(_to, _amount);
  }

  function totalBalanceOf(address _account) external view returns (uint256) {
    return _locks[_account].add(balanceOf(_account));
  }

  function lockOf(address _account) external view returns (uint256) {
    return _locks[_account];
  }

  function lastUnlockBlock(address _account) external view returns (uint256) {
    return _lastUnlockBlock[_account];
  }

  function lock(address _account, uint256 _amount) external {
    require(_account != address(0), "no lock to address(0)");
    require(_amount <= balanceOf(msg.sender), "no lock over balance");

    uint256 toVesting = _amount.mul(vestingRatio).div(1e18);
    uint256 direct = _amount.sub(toVesting);

    if (direct > 0)
      _transfer(msg.sender, _account, direct);
    if (toVesting > 0)
      _transfer(msg.sender, address(this), toVesting);

    _locks[_account] = _locks[_account].add(toVesting);
    _totalLock = _totalLock.add(toVesting);

    if (_lastUnlockBlock[_account] < startReleaseBlock) {
      _lastUnlockBlock[_account] = startReleaseBlock;
    }

    emit Lock(_account, direct, toVesting);
  }
  function canUnlockAmount(address _account) public view returns (uint256) {
    // When block number less than startReleaseBlock, no tokens can be unlocked
    if (block.number < startReleaseBlock) {
      return 0;
    }
    // When block number more than endReleaseBlock, all locked tokens can be unlocked
    else if (block.number >= endReleaseBlock) {
      return _locks[_account];
    }
    // When block number is more than startReleaseBlock but less than endReleaseBlock,
    // some tokens can be released
    else
    {
      uint256 releasedBlock = block.number.sub(_lastUnlockBlock[_account]);
      uint256 blockLeft = endReleaseBlock.sub(_lastUnlockBlock[_account]);
      return _locks[_account].mul(releasedBlock).div(blockLeft);
    }
  }
  function totalAvailableAmount(address _account) public view returns (uint256) {
    return balanceOf(_account).add(canUnlockAmount(_account));
  }

  function unlock() external {
    require(_locks[msg.sender] > 0, "no locked tokens");

    uint256 amount = canUnlockAmount(msg.sender);
    _unlockAmount(msg.sender, amount);
  }
  function _unlockAmount(address _account, uint256 _amount) internal {
    if (_amount > 0) {
      _transfer(address(this), _account, _amount);
      _locks[_account] = _locks[_account].sub(_amount);
      _lastUnlockBlock[_account] = block.number;
      _totalLock = _totalLock.sub(_amount);
    }
  }

  // @dev move tokens with its locked funds to another account
  function transferAll(address _to) external {
    require(_to != msg.sender, "cannot transfer all to self");
    _locks[_to] = _locks[_to].add(_locks[msg.sender]);

    if (_lastUnlockBlock[_to] < startReleaseBlock) {
      _lastUnlockBlock[_to] = startReleaseBlock;
    }

    if (_lastUnlockBlock[_to] < _lastUnlockBlock[msg.sender]) {
      _lastUnlockBlock[_to] = _lastUnlockBlock[msg.sender];
    }

    _locks[msg.sender] = 0;
    _lastUnlockBlock[msg.sender] = 0;

    _transfer(msg.sender, _to, balanceOf(msg.sender));
  }

  function redeem(address _account, uint256 _amount) external {
    require(msg.sender == redeeming, "not from redeeming");
    require(_account != address(this), "invalid account");
    uint256 balance = balanceOf(_account);
    if (balance < _amount) {
      uint256 vested = canUnlockAmount(_account);
      require(_amount <= balance.add(vested), "insufficient balance");
      _unlockAmount(_account, _amount.sub(balance));
    }
    // _burn(redeeming, _amount);
    _transfer(_account, redeeming, _amount);
    emit Redeem(_account, _amount);
  }
}
