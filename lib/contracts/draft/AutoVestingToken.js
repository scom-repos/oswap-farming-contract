"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoVestingToken = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const AutoVestingToken_json_1 = __importDefault(require("./AutoVestingToken.json"));
class AutoVestingToken extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, AutoVestingToken_json_1.default.abi, AutoVestingToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.end), this.wallet.utils.toString(params.cap), params.farming, params.redeeming], options);
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
            amount: new eth_contract_1.BigNumber(result.amount),
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
        let duration_call = async (options) => {
            let result = await this.call('duration', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.duration = duration_call;
        let end_call = async (options) => {
            let result = await this.call('end', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.end = end_call;
        let farming_call = async (options) => {
            let result = await this.call('farming', [], options);
            return result;
        };
        this.farming = farming_call;
        let locked_call = async (account, options) => {
            let result = await this.call('locked', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.locked = locked_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let redeeming_call = async (options) => {
            let result = await this.call('redeeming', [], options);
            return result;
        };
        this.redeeming = redeeming_call;
        let start_call = async (options) => {
            let result = await this.call('start', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.start = start_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let totalLocked_call = async (options) => {
            let result = await this.call('totalLocked', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalLocked = totalLocked_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let totalVestable_call = async (options) => {
            let result = await this.call('totalVestable', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalVestable = totalVestable_call;
        let vestable_call = async (param1, options) => {
            let result = await this.call('vestable', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vestable = vestable_call;
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
        let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
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
    }
}
exports.AutoVestingToken = AutoVestingToken;
AutoVestingToken._abi = AutoVestingToken_json_1.default.abi;
