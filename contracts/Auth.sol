// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/utils/Context.sol";

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
