"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farming = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Farming_json_1 = __importDefault(require("./Farming.json"));
class Farming extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Farming_json_1.default.abi, Farming_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([this.wallet.utils.toString(params.rewardPerBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.endBlock), params.admin], options);
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
            rewardId: new eth_contract_1.BigNumber(result.rewardId),
            amount: new eth_contract_1.BigNumber(result.amount),
            locked: new eth_contract_1.BigNumber(result.locked),
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
            endBlock: new eth_contract_1.BigNumber(result.endBlock),
            bonusMultiplier: new eth_contract_1.BigNumber(result.bonusMultiplier),
            bonusEndBlock: new eth_contract_1.BigNumber(result.bonusEndBlock),
            _event: event
        };
    }
    parseLogRewardAdditionEvent(receipt) {
        return this.parseEvents(receipt, "LogRewardAddition").map(e => this.decodeLogRewardAdditionEvent(e));
    }
    decodeLogRewardAdditionEvent(event) {
        let result = event.data;
        return {
            rewardId: new eth_contract_1.BigNumber(result.rewardId),
            rewardToken: result.rewardToken,
            multiplier: new eth_contract_1.BigNumber(result.multiplier),
            vestingRatio: new eth_contract_1.BigNumber(result.vestingRatio),
            vestingStartOnHarvest: result.vestingStartOnHarvest,
            vestingDuration: new eth_contract_1.BigNumber(result.vestingDuration),
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
            endBlock: new eth_contract_1.BigNumber(result.endBlock),
            bonusMultiplier: new eth_contract_1.BigNumber(result.bonusMultiplier),
            bonusEndBlock: new eth_contract_1.BigNumber(result.bonusEndBlock),
            _event: event
        };
    }
    parseLogSetRewardEvent(receipt) {
        return this.parseEvents(receipt, "LogSetReward").map(e => this.decodeLogSetRewardEvent(e));
    }
    decodeLogSetRewardEvent(event) {
        let result = event.data;
        return {
            rewardId: new eth_contract_1.BigNumber(result.rewardId),
            multiplier: new eth_contract_1.BigNumber(result.multiplier),
            vestingRatio: new eth_contract_1.BigNumber(result.vestingRatio),
            vestingDuration: new eth_contract_1.BigNumber(result.vestingDuration),
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
    parseVestedEvent(receipt) {
        return this.parseEvents(receipt, "Vested").map(e => this.decodeVestedEvent(e));
    }
    decodeVestedEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_contract_1.BigNumber(result.pid),
            rewardId: new eth_contract_1.BigNumber(result.rewardId),
            amount: new eth_contract_1.BigNumber(result.amount),
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
        let admin_call = async (options) => {
            let result = await this.call('admin', [], options);
            return result;
        };
        this.admin = admin_call;
        let claimableVestingParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.rewardId), params.user];
        let claimableVesting_call = async (params, options) => {
            let result = await this.call('claimableVesting', claimableVestingParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.claimableVesting = claimableVesting_call;
        let endBlock_call = async (options) => {
            let result = await this.call('endBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endBlock = endBlock_call;
        let getReserveReward_call = async (rewardId, options) => {
            let result = await this.call('getReserveReward', [this.wallet.utils.toString(rewardId)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getReserveReward = getReserveReward_call;
        let owners_call = async (param1, options) => {
            let result = await this.call('owners', [param1], options);
            return result;
        };
        this.owners = owners_call;
        let pendingRewardParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
        let pendingReward_call = async (params, options) => {
            let result = await this.call('pendingReward', pendingRewardParams(params), options);
            return {
                rewardToken: result.rewardToken,
                availableNow: result.availableNow.map(e => new eth_contract_1.BigNumber(e)),
                toBeVested: result.toBeVested.map(e => new eth_contract_1.BigNumber(e)),
                vestingStart: result.vestingStart.map(e => new eth_contract_1.BigNumber(e)),
                vestingDuration: result.vestingDuration.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.pendingReward = pendingReward_call;
        let poolIdx_call = async (param1, options) => {
            let result = await this.call('poolIdx', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.poolIdx = poolIdx_call;
        let poolInfo_call = async (param1, options) => {
            let result = await this.call('poolInfo', [this.wallet.utils.toString(param1)], options);
            return {
                lpToken: result.lpToken,
                allocPoint: new eth_contract_1.BigNumber(result.allocPoint),
                endBlock: new eth_contract_1.BigNumber(result.endBlock),
                bonusMultiplier: new eth_contract_1.BigNumber(result.bonusMultiplier),
                bonusEndBlock: new eth_contract_1.BigNumber(result.bonusEndBlock),
                rewardDebt: new eth_contract_1.BigNumber(result.rewardDebt),
                lastRewardBlock: new eth_contract_1.BigNumber(result.lastRewardBlock),
                accRewardPerShare: new eth_contract_1.BigNumber(result.accRewardPerShare)
            };
        };
        this.poolInfo = poolInfo_call;
        let poolLength_call = async (options) => {
            let result = await this.call('poolLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.poolLength = poolLength_call;
        let rewardIdx_call = async (param1, options) => {
            let result = await this.call('rewardIdx', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardIdx = rewardIdx_call;
        let rewardInfo_call = async (param1, options) => {
            let result = await this.call('rewardInfo', [this.wallet.utils.toString(param1)], options);
            return {
                rewardToken: result.rewardToken,
                multiplier: new eth_contract_1.BigNumber(result.multiplier),
                vestingRatio: new eth_contract_1.BigNumber(result.vestingRatio),
                vestingStartOnHarvest: result.vestingStartOnHarvest,
                vestingDuration: new eth_contract_1.BigNumber(result.vestingDuration),
                rewarded: new eth_contract_1.BigNumber(result.rewarded),
                reserve: new eth_contract_1.BigNumber(result.reserve)
            };
        };
        this.rewardInfo = rewardInfo_call;
        let rewardLength_call = async (options) => {
            let result = await this.call('rewardLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardLength = rewardLength_call;
        let rewardPerBlock_call = async (options) => {
            let result = await this.call('rewardPerBlock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardPerBlock = rewardPerBlock_call;
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
        let userInfoParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
        let userInfo_call = async (params, options) => {
            let result = await this.call('userInfo', userInfoParams(params), options);
            return {
                amount: new eth_contract_1.BigNumber(result.amount),
                rewardDebt: new eth_contract_1.BigNumber(result.rewardDebt)
            };
        };
        this.userInfo = userInfo_call;
        let userRewardsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2), params.param3];
        let userRewards_call = async (params, options) => {
            let result = await this.call('userRewards', userRewardsParams(params), options);
            return {
                harvested: new eth_contract_1.BigNumber(result.harvested),
                locked: new eth_contract_1.BigNumber(result.locked),
                lockedTill: new eth_contract_1.BigNumber(result.lockedTill),
                lastUpdate: new eth_contract_1.BigNumber(result.lastUpdate)
            };
        };
        this.userRewards = userRewards_call;
        let whitelisted_call = async (param1, options) => {
            let result = await this.call('whitelisted', [param1], options);
            return result;
        };
        this.whitelisted = whitelisted_call;
        let addPoolParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.lpToken, this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusMultiplier), this.wallet.utils.toString(params.bonusEndBlock), params.withUpdate];
        let addPool_send = async (params, options) => {
            let result = await this.send('addPool', addPoolParams(params), options);
            return result;
        };
        let addPool_call = async (params, options) => {
            let result = await this.call('addPool', addPoolParams(params), options);
            return;
        };
        this.addPool = Object.assign(addPool_send, {
            call: addPool_call
        });
        let addRewardsParams = (params) => [params.rewardToken, this.wallet.utils.toString(params.multiplier), this.wallet.utils.toString(params.vestingRatio), params.vestingStartOnHarvest, this.wallet.utils.toString(params.vestingDuration)];
        let addRewards_send = async (params, options) => {
            let result = await this.send('addRewards', addRewardsParams(params), options);
            return result;
        };
        let addRewards_call = async (params, options) => {
            let result = await this.call('addRewards', addRewardsParams(params), options);
            return;
        };
        this.addRewards = Object.assign(addRewards_send, {
            call: addRewards_call
        });
        let adminWithdrawReward_send = async (rewardId, options) => {
            let result = await this.send('adminWithdrawReward', [this.wallet.utils.toString(rewardId)], options);
            return result;
        };
        let adminWithdrawReward_call = async (rewardId, options) => {
            let result = await this.call('adminWithdrawReward', [this.wallet.utils.toString(rewardId)], options);
            return;
        };
        this.adminWithdrawReward = Object.assign(adminWithdrawReward_send, {
            call: adminWithdrawReward_call
        });
        let claimVestingParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.rewardId), params.user];
        let claimVesting_send = async (params, options) => {
            let result = await this.send('claimVesting', claimVestingParams(params), options);
            return result;
        };
        let claimVesting_call = async (params, options) => {
            let result = await this.call('claimVesting', claimVestingParams(params), options);
            return;
        };
        this.claimVesting = Object.assign(claimVesting_send, {
            call: claimVesting_call
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
        let resetPool_send = async (pid, options) => {
            let result = await this.send('resetPool', [this.wallet.utils.toString(pid)], options);
            return result;
        };
        let resetPool_call = async (pid, options) => {
            let result = await this.call('resetPool', [this.wallet.utils.toString(pid)], options);
            return;
        };
        this.resetPool = Object.assign(resetPool_send, {
            call: resetPool_call
        });
        let setAdmin_send = async (admin, options) => {
            let result = await this.send('setAdmin', [admin], options);
            return result;
        };
        let setAdmin_call = async (admin, options) => {
            let result = await this.call('setAdmin', [admin], options);
            return;
        };
        this.setAdmin = Object.assign(setAdmin_send, {
            call: setAdmin_call
        });
        let setPoolParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.allocPoint), this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusMultiplier), this.wallet.utils.toString(params.bonusEndBlock), params.withUpdate];
        let setPool_send = async (params, options) => {
            let result = await this.send('setPool', setPoolParams(params), options);
            return result;
        };
        let setPool_call = async (params, options) => {
            let result = await this.call('setPool', setPoolParams(params), options);
            return;
        };
        this.setPool = Object.assign(setPool_send, {
            call: setPool_call
        });
        let setRewardsParams = (params) => [this.wallet.utils.toString(params.rewardId), this.wallet.utils.toString(params.multiplier), this.wallet.utils.toString(params.vestingRatio), this.wallet.utils.toString(params.vestingDuration)];
        let setRewards_send = async (params, options) => {
            let result = await this.send('setRewards', setRewardsParams(params), options);
            return result;
        };
        let setRewards_call = async (params, options) => {
            let result = await this.call('setRewards', setRewardsParams(params), options);
            return;
        };
        this.setRewards = Object.assign(setRewards_send, {
            call: setRewards_call
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
exports.Farming = Farming;
Farming._abi = Farming_json_1.default.abi;
