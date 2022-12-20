"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterChef = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const MasterChef_json_1 = __importDefault(require("./MasterChef.json"));
class MasterChef extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, MasterChef_json_1.default.abi, MasterChef_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.rewardToken, this.wallet.utils.toString(params.rewardsPerBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusEndBlock)], options);
    }
    parseAuthChangedEvent(receipt) {
        return this.parseEvents(receipt, "AuthChanged").map(e => this.decodeAuthChangedEvent(e));
    }
    decodeAuthChangedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            auth: result.auth,
            _event: event
        };
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_contract_1.BigNumber(result.pid),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_contract_1.BigNumber(result.pid),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseHarvestEvent(receipt) {
        return this.parseEvents(receipt, "Harvest").map(e => this.decodeHarvestEvent(e));
    }
    decodeHarvestEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_contract_1.BigNumber(result.pid),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseLogInitEvent(receipt) {
        return this.parseEvents(receipt, "LogInit").map(e => this.decodeLogInitEvent(e));
    }
    decodeLogInitEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseLogPoolAdditionEvent(receipt) {
        return this.parseEvents(receipt, "LogPoolAddition").map(e => this.decodeLogPoolAdditionEvent(e));
    }
    decodeLogPoolAdditionEvent(event) {
        let result = event.data;
        return {
            pid: new eth_contract_1.BigNumber(result.pid),
            allocPoint: new eth_contract_1.BigNumber(result.allocPoint),
            lpToken: result.lpToken,
            _event: event
        };
    }
    parseLogSetPoolEvent(receipt) {
        return this.parseEvents(receipt, "LogSetPool").map(e => this.decodeLogSetPoolEvent(e));
    }
    decodeLogSetPoolEvent(event) {
        let result = event.data;
        return {
            pid: new eth_contract_1.BigNumber(result.pid),
            allocPoint: new eth_contract_1.BigNumber(result.allocPoint),
            _event: event
        };
    }
    parseLogUpdatePoolEvent(receipt) {
        return this.parseEvents(receipt, "LogUpdatePool").map(e => this.decodeLogUpdatePoolEvent(e));
    }
    decodeLogUpdatePoolEvent(event) {
        let result = event.data;
        return {
            pid: new eth_contract_1.BigNumber(result.pid),
            lastRewardBlock: new eth_contract_1.BigNumber(result.lastRewardBlock),
            lpSupply: new eth_contract_1.BigNumber(result.lpSupply),
            accSushiPerShare: new eth_contract_1.BigNumber(result.accSushiPerShare),
            _event: event
        };
    }
    parseWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_contract_1.BigNumber(result.pid),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let BONUS_MULTIPLIER_call = async (options) => {
            let result = await this.call('BONUS_MULTIPLIER', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.BONUS_MULTIPLIER = BONUS_MULTIPLIER_call;
        let bonusEndBlock_call = async (options) => {
            let result = await this.call('bonusEndBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.bonusEndBlock = bonusEndBlock_call;
        let endBlock_call = async (options) => {
            let result = await this.call('endBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endBlock = endBlock_call;
        let getMultiplierParams = (params) => [this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.to)];
        let getMultiplier_call = async (params, options) => {
            let result = await this.call('getMultiplier', getMultiplierParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getMultiplier = getMultiplier_call;
        let owners_call = async (param1, options) => {
            let result = await this.call('owners', [param1], options);
            return result;
        };
        this.owners = owners_call;
        let pendingRewardsParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
        let pendingRewards_call = async (params, options) => {
            let result = await this.call('pendingRewards', pendingRewardsParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.pendingRewards = pendingRewards_call;
        let poolInfo_call = async (param1, options) => {
            let result = await this.call('poolInfo', [this.wallet.utils.toString(param1)], options);
            return {
                lpToken: result.lpToken,
                allocPoint: new eth_contract_1.BigNumber(result.allocPoint),
                lastRewardBlock: new eth_contract_1.BigNumber(result.lastRewardBlock),
                accRewardsPerShare: new eth_contract_1.BigNumber(result.accRewardsPerShare)
            };
        };
        this.poolInfo = poolInfo_call;
        let poolLength_call = async (options) => {
            let result = await this.call('poolLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.poolLength = poolLength_call;
        let rewardToken_call = async (param1, options) => {
            let result = await this.call('rewardToken', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.rewardToken = rewardToken_call;
        let rewardTokenLength_call = async (options) => {
            let result = await this.call('rewardTokenLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardTokenLength = rewardTokenLength_call;
        let rewardsPerBlock_call = async (options) => {
            let result = await this.call('rewardsPerBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardsPerBlock = rewardsPerBlock_call;
        let startBlock_call = async (options) => {
            let result = await this.call('startBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startBlock = startBlock_call;
        let totalAllocPoint_call = async (options) => {
            let result = await this.call('totalAllocPoint', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalAllocPoint = totalAllocPoint_call;
        let totalPendingRewards_call = async (options) => {
            let result = await this.call('totalPendingRewards', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalPendingRewards = totalPendingRewards_call;
        let userInfoParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
        let userInfo_call = async (params, options) => {
            let result = await this.call('userInfo', userInfoParams(params), options);
            return {
                amount: new eth_contract_1.BigNumber(result.amount),
                rewardDebt: new eth_contract_1.BigNumber(result.rewardDebt)
            };
        };
        this.userInfo = userInfo_call;
        let whitelisted_call = async (param1, options) => {
            let result = await this.call('whitelisted', [param1], options);
            return result;
        };
        this.whitelisted = whitelisted_call;
        let addParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.lpToken, params.withUpdate];
        let add_send = async (params, options) => {
            let result = await this.send('add', addParams(params), options);
            return result;
        };
        let add_call = async (params, options) => {
            let result = await this.call('add', addParams(params), options);
            return;
        };
        this.add = Object.assign(add_send, {
            call: add_call
        });
        let deny_send = async (account, options) => {
            let result = await this.send('deny', [account], options);
            return result;
        };
        let deny_call = async (account, options) => {
            let result = await this.call('deny', [account], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let depositParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
        let deposit_send = async (params, options) => {
            let result = await this.send('deposit', depositParams(params), options);
            return result;
        };
        let deposit_call = async (params, options) => {
            let result = await this.call('deposit', depositParams(params), options);
            return;
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let emergencyWithdraw_send = async (pid, options) => {
            let result = await this.send('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
            return result;
        };
        let emergencyWithdraw_call = async (pid, options) => {
            let result = await this.call('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
            return;
        };
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call: emergencyWithdraw_call
        });
        let harvestParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
        let harvest_send = async (params, options) => {
            let result = await this.send('harvest', harvestParams(params), options);
            return result;
        };
        let harvest_call = async (params, options) => {
            let result = await this.call('harvest', harvestParams(params), options);
            return;
        };
        this.harvest = Object.assign(harvest_send, {
            call: harvest_call
        });
        let massUpdatePools_send = async (options) => {
            let result = await this.send('massUpdatePools', [], options);
            return result;
        };
        let massUpdatePools_call = async (options) => {
            let result = await this.call('massUpdatePools', [], options);
            return;
        };
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call: massUpdatePools_call
        });
        let pause_send = async (options) => {
            let result = await this.send('pause', [], options);
            return result;
        };
        let pause_call = async (options) => {
            let result = await this.call('pause', [], options);
            return;
        };
        this.pause = Object.assign(pause_send, {
            call: pause_call
        });
        let rely_send = async (account, options) => {
            let result = await this.send('rely', [account], options);
            return result;
        };
        let rely_call = async (account, options) => {
            let result = await this.call('rely', [account], options);
            return;
        };
        this.rely = Object.assign(rely_send, {
            call: rely_call
        });
        let setParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.allocPoint), params.withUpdate];
        let set_send = async (params, options) => {
            let result = await this.send('set', setParams(params), options);
            return result;
        };
        let set_call = async (params, options) => {
            let result = await this.call('set', setParams(params), options);
            return;
        };
        this.set = Object.assign(set_send, {
            call: set_call
        });
        let setWhiteListParams = (params) => [params.who, params.allowed];
        let setWhiteList_send = async (params, options) => {
            let result = await this.send('setWhiteList', setWhiteListParams(params), options);
            return result;
        };
        let setWhiteList_call = async (params, options) => {
            let result = await this.call('setWhiteList', setWhiteListParams(params), options);
            return;
        };
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call: setWhiteList_call
        });
        let updatePool_send = async (pid, options) => {
            let result = await this.send('updatePool', [this.wallet.utils.toString(pid)], options);
            return result;
        };
        let updatePool_call = async (pid, options) => {
            let result = await this.call('updatePool', [this.wallet.utils.toString(pid)], options);
            return;
        };
        this.updatePool = Object.assign(updatePool_send, {
            call: updatePool_call
        });
        let updateSelectedPools_send = async (pids, options) => {
            let result = await this.send('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
            return result;
        };
        let updateSelectedPools_call = async (pids, options) => {
            let result = await this.call('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
            return;
        };
        this.updateSelectedPools = Object.assign(updateSelectedPools_send, {
            call: updateSelectedPools_call
        });
        let withdrawParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
        let withdraw_send = async (params, options) => {
            let result = await this.send('withdraw', withdrawParams(params), options);
            return result;
        };
        let withdraw_call = async (params, options) => {
            let result = await this.call('withdraw', withdrawParams(params), options);
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.MasterChef = MasterChef;
MasterChef._abi = MasterChef_json_1.default.abi;
