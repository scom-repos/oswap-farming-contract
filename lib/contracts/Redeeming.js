"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redeeming = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Redeeming_json_1 = __importDefault(require("./Redeeming.json"));
class Redeeming extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Redeeming_json_1.default.abi, Redeeming_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.farming, params.vesting, this.wallet.utils.toString(params.rewardPerVesting), params.reward, this.wallet.utils.toString(params.convertingRatio), params.admin], options);
    }
    parseReclaimRemainingRewardEvent(receipt) {
        return this.parseEvents(receipt, "ReclaimRemainingReward").map(e => this.decodeReclaimRemainingRewardEvent(e));
    }
    decodeReclaimRemainingRewardEvent(event) {
        let result = event.data;
        return {
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
            token: result.token,
            vesting: new eth_contract_1.BigNumber(result.vesting),
            reward: new eth_contract_1.BigNumber(result.reward),
            _event: event
        };
    }
    assign() {
        let admin_call = async (options) => {
            let result = await this.call('admin', [], options);
            return result;
        };
        this.admin = admin_call;
        let availableRewardAmount_call = async (account, options) => {
            let result = await this.call('availableRewardAmount', [account], options);
            return {
                tokens: result.tokens,
                availableReward: result.availableReward.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.availableRewardAmount = availableRewardAmount_call;
        let convertingRatioParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let convertingRatio_call = async (params, options) => {
            let result = await this.call('convertingRatio', convertingRatioParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.convertingRatio = convertingRatio_call;
        let farming_call = async (options) => {
            let result = await this.call('farming', [], options);
            return result;
        };
        this.farming = farming_call;
        let rewardParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let reward_call = async (params, options) => {
            let result = await this.call('reward', rewardParams(params), options);
            return result;
        };
        this.reward = reward_call;
        let rewardLength_call = async (vestingIdx, options) => {
            let result = await this.call('rewardLength', [this.wallet.utils.toString(vestingIdx)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardLength = rewardLength_call;
        let vesting_call = async (param1, options) => {
            let result = await this.call('vesting', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.vesting = vesting_call;
        let vestingLength_call = async (options) => {
            let result = await this.call('vestingLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vestingLength = vestingLength_call;
        let harvestAndRedeemParams = (params) => [params.account, this.wallet.utils.toString(params.pid)];
        let harvestAndRedeem_send = async (params, options) => {
            let result = await this.send('harvestAndRedeem', harvestAndRedeemParams(params), options);
            return result;
        };
        let harvestAndRedeem_call = async (params, options) => {
            let result = await this.call('harvestAndRedeem', harvestAndRedeemParams(params), options);
            return;
        };
        this.harvestAndRedeem = Object.assign(harvestAndRedeem_send, {
            call: harvestAndRedeem_call
        });
        let putFundParams = (params) => [params.token, params.from, this.wallet.utils.toString(params.amount)];
        let putFund_send = async (params, options) => {
            let result = await this.send('putFund', putFundParams(params), options);
            return result;
        };
        let putFund_call = async (params, options) => {
            let result = await this.call('putFund', putFundParams(params), options);
            return;
        };
        this.putFund = Object.assign(putFund_send, {
            call: putFund_call
        });
        let reclaimRemainingReward_send = async (options) => {
            let result = await this.send('reclaimRemainingReward', [], options);
            return result;
        };
        let reclaimRemainingReward_call = async (options) => {
            let result = await this.call('reclaimRemainingReward', [], options);
            return;
        };
        this.reclaimRemainingReward = Object.assign(reclaimRemainingReward_send, {
            call: reclaimRemainingReward_call
        });
        let redeemParams = (params) => [params.account, this.wallet.utils.toString(params.vestingIdx)];
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
        let redeemAllAvailable_send = async (account, options) => {
            let result = await this.send('redeemAllAvailable', [account], options);
            return result;
        };
        let redeemAllAvailable_call = async (account, options) => {
            let result = await this.call('redeemAllAvailable', [account], options);
            return;
        };
        this.redeemAllAvailable = Object.assign(redeemAllAvailable_send, {
            call: redeemAllAvailable_call
        });
    }
}
exports.Redeeming = Redeeming;
Redeeming._abi = Redeeming_json_1.default.abi;
