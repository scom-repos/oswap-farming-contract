// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract MockERC20 is ERC20 {

	constructor(string memory _symbol, string memory _name, uint256 _initialSupply, uint8 _decimals) 
		ERC20(_name, _symbol)
	public {
		if (_decimals != 18)
			_setupDecimals(_decimals);
		if (_initialSupply != 0)
			_mint(msg.sender, _initialSupply);
	}
	function mint(address account, uint256 value) external {
		_mint(account, value);
	}
}