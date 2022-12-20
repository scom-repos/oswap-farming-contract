"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VestingToken = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const VestingToken_json_1 = __importDefault(require("./VestingToken.json"));
class VestingToken extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, VestingToken_json_1.default.abi, VestingToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.startReleaseBlock), this.wallet.utils.toString(params.endReleaseBlock), this.wallet.utils.toString(params.cap), this.wallet.utils.toString(params.vestingRatio)], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            direct: new eth_contract_1.BigNumber(result.direct),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseRedeemEvent(receipt) {
        return this.parseEvents(receipt, "Redeem").map(e => this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let allowanceParams = (params) => [params.owner, params.spender];
        let allowance_call = async (params, options) => {
            let result = await this.call('allowance', allowanceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (account, options) => {
            let result = await this.call('balanceOf', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let canUnlockAmount_call = async (account, options) => {
            let result = await this.call('canUnlockAmount', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.canUnlockAmount = canUnlockAmount_call;
        let cap_call = async (options) => {
            let result = await this.call('cap', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.cap = cap_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let endReleaseBlock_call = async (options) => {
            let result = await this.call('endReleaseBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endReleaseBlock = endReleaseBlock_call;
        let farming_call = async (options) => {
            let result = await this.call('farming', [], options);
            return result;
        };
        this.farming = farming_call;
        let lastUnlockBlock_call = async (account, options) => {
            let result = await this.call('lastUnlockBlock', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastUnlockBlock = lastUnlockBlock_call;
        let lockOf_call = async (account, options) => {
            let result = await this.call('lockOf', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lockOf = lockOf_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let redeeming_call = async (options) => {
            let result = await this.call('redeeming', [], options);
            return result;
        };
        this.redeeming = redeeming_call;
        let startReleaseBlock_call = async (options) => {
            let result = await this.call('startReleaseBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startReleaseBlock = startReleaseBlock_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let totalAvailableAmount_call = async (account, options) => {
            let result = await this.call('totalAvailableAmount', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalAvailableAmount = totalAvailableAmount_call;
        let totalBalanceOf_call = async (account, options) => {
            let result = await this.call('totalBalanceOf', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalBalanceOf = totalBalanceOf_call;
        let totalLock_call = async (options) => {
            let result = await this.call('totalLock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalLock = totalLock_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let unlockedSupply_call = async (options) => {
            let result = await this.call('unlockedSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.unlockedSupply = unlockedSupply_call;
        let vestingRatio_call = async (options) => {
            let result = await this.call('vestingRatio', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vestingRatio = vestingRatio_call;
        let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params, options) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
            return result;
        };
        let decreaseAllowance_call = async (params, options) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
            return result;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
        });
        let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params, options) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
            return result;
        };
        let increaseAllowance_call = async (params, options) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
            return result;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
        });
        let lockParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
        let lock_send = async (params, options) => {
            let result = await this.send('lock', lockParams(params), options);
            return result;
        };
        let lock_call = async (params, options) => {
            let result = await this.call('lock', lockParams(params), options);
            return;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let mintParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
        let mint_send = async (params, options) => {
            let result = await this.send('mint', mintParams(params), options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', mintParams(params), options);
            return;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let redeemParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
        let redeem_send = async (params, options) => {
            let result = await this.send('redeem', redeemParams(params), options);
            return result;
        };
        let redeem_call = async (params, options) => {
            let result = await this.call('redeem', redeemParams(params), options);
            return;
        };
        this.redeem = Object.assign(redeem_send, {
            call: redeem_call
        });
        let renounceOwnership_send = async (options) => {
            let result = await this.send('renounceOwnership', [], options);
            return result;
        };
        let renounceOwnership_call = async (options) => {
            let result = await this.call('renounceOwnership', [], options);
            return;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call
        });
        let setFarming_send = async (farming, options) => {
            let result = await this.send('setFarming', [farming], options);
            return result;
        };
        let setFarming_call = async (farming, options) => {
            let result = await this.call('setFarming', [farming], options);
            return;
        };
        this.setFarming = Object.assign(setFarming_send, {
            call: setFarming_call
        });
        let setRedeeming_send = async (redeeming, options) => {
            let result = await this.send('setRedeeming', [redeeming], options);
            return result;
        };
        let setRedeeming_call = async (redeeming, options) => {
            let result = await this.call('setRedeeming', [redeeming], options);
            return;
        };
        this.setRedeeming = Object.assign(setRedeeming_send, {
            call: setRedeeming_call
        });
        let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params, options) => {
            let result = await this.send('transfer', transferParams(params), options);
            return result;
        };
        let transfer_call = async (params, options) => {
            let result = await this.call('transfer', transferParams(params), options);
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferAll_send = async (to, options) => {
            let result = await this.send('transferAll', [to], options);
            return result;
        };
        let transferAll_call = async (to, options) => {
            let result = await this.call('transferAll', [to], options);
            return;
        };
        this.transferAll = Object.assign(transferAll_send, {
            call: transferAll_call
        });
        let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let unlock_send = async (options) => {
            let result = await this.send('unlock', [], options);
            return result;
        };
        let unlock_call = async (options) => {
            let result = await this.call('unlock', [], options);
            return;
        };
        this.unlock = Object.assign(unlock_send, {
            call: unlock_call
        });
    }
}
exports.VestingToken = VestingToken;
VestingToken._abi = VestingToken_json_1.default.abi;
