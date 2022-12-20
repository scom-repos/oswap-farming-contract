import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Redeeming.json";
export interface IDeployParams {farming:string;vesting:string[];rewardPerVesting:(number|BigNumber)[];reward:string[];convertingRatio:(number|BigNumber)[];admin:string}
export interface IConvertingRatioParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IHarvestAndRedeemParams {account:string;pid:number|BigNumber}
export interface IPutFundParams {token:string;from:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;vestingIdx:number|BigNumber}
export interface IRewardParams {param1:number|BigNumber;param2:number|BigNumber}
export class Redeeming extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.farming,params.vesting,this.wallet.utils.toString(params.rewardPerVesting),params.reward,this.wallet.utils.toString(params.convertingRatio),params.admin], options);
    }
    parseReclaimRemainingRewardEvent(receipt: TransactionReceipt): Redeeming.ReclaimRemainingRewardEvent[]{
        return this.parseEvents(receipt, "ReclaimRemainingReward").map(e=>this.decodeReclaimRemainingRewardEvent(e));
    }
    decodeReclaimRemainingRewardEvent(event: Event): Redeeming.ReclaimRemainingRewardEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): Redeeming.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): Redeeming.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            token: result.token,
            vesting: new BigNumber(result.vesting),
            reward: new BigNumber(result.reward),
            _event: event
        };
    }
    admin: {
        (options?: TransactionOptions): Promise<string>;
    }
    availableRewardAmount: {
        (account:string, options?: TransactionOptions): Promise<{tokens:string[],availableReward:BigNumber[]}>;
    }
    convertingRatio: {
        (params: IConvertingRatioParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    farming: {
        (options?: TransactionOptions): Promise<string>;
    }
    harvestAndRedeem: {
        (params: IHarvestAndRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestAndRedeemParams, options?: TransactionOptions) => Promise<void>;
    }
    putFund: {
        (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
    }
    reclaimRemainingReward: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    redeem: {
        (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
    }
    redeemAllAvailable: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    reward: {
        (params: IRewardParams, options?: TransactionOptions): Promise<string>;
    }
    rewardLength: {
        (vestingIdx:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    vesting: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    vestingLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let admin_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('admin',[],options);
            return result;
        }
        this.admin = admin_call
        let availableRewardAmount_call = async (account:string, options?: TransactionOptions): Promise<{tokens:string[],availableReward:BigNumber[]}> => {
            let result = await this.call('availableRewardAmount',[account],options);
            return {
                tokens: result.tokens,
                availableReward: result.availableReward.map(e=>new BigNumber(e))
            };
        }
        this.availableRewardAmount = availableRewardAmount_call
        let convertingRatioParams = (params: IConvertingRatioParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let convertingRatio_call = async (params: IConvertingRatioParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('convertingRatio',convertingRatioParams(params),options);
            return new BigNumber(result);
        }
        this.convertingRatio = convertingRatio_call
        let farming_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('farming',[],options);
            return result;
        }
        this.farming = farming_call
        let rewardParams = (params: IRewardParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let reward_call = async (params: IRewardParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('reward',rewardParams(params),options);
            return result;
        }
        this.reward = reward_call
        let rewardLength_call = async (vestingIdx:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('rewardLength',[this.wallet.utils.toString(vestingIdx)],options);
            return new BigNumber(result);
        }
        this.rewardLength = rewardLength_call
        let vesting_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vesting',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.vesting = vesting_call
        let vestingLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('vestingLength',[],options);
            return new BigNumber(result);
        }
        this.vestingLength = vestingLength_call
        let harvestAndRedeemParams = (params: IHarvestAndRedeemParams) => [params.account,this.wallet.utils.toString(params.pid)];
        let harvestAndRedeem_send = async (params: IHarvestAndRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('harvestAndRedeem',harvestAndRedeemParams(params),options);
            return result;
        }
        let harvestAndRedeem_call = async (params: IHarvestAndRedeemParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('harvestAndRedeem',harvestAndRedeemParams(params),options);
            return;
        }
        this.harvestAndRedeem = Object.assign(harvestAndRedeem_send, {
            call:harvestAndRedeem_call
        });
        let putFundParams = (params: IPutFundParams) => [params.token,params.from,this.wallet.utils.toString(params.amount)];
        let putFund_send = async (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('putFund',putFundParams(params),options);
            return result;
        }
        let putFund_call = async (params: IPutFundParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('putFund',putFundParams(params),options);
            return;
        }
        this.putFund = Object.assign(putFund_send, {
            call:putFund_call
        });
        let reclaimRemainingReward_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('reclaimRemainingReward',[],options);
            return result;
        }
        let reclaimRemainingReward_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('reclaimRemainingReward',[],options);
            return;
        }
        this.reclaimRemainingReward = Object.assign(reclaimRemainingReward_send, {
            call:reclaimRemainingReward_call
        });
        let redeemParams = (params: IRedeemParams) => [params.account,this.wallet.utils.toString(params.vestingIdx)];
        let redeem_send = async (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('redeem',redeemParams(params),options);
            return result;
        }
        let redeem_call = async (params: IRedeemParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('redeem',redeemParams(params),options);
            return;
        }
        this.redeem = Object.assign(redeem_send, {
            call:redeem_call
        });
        let redeemAllAvailable_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('redeemAllAvailable',[account],options);
            return result;
        }
        let redeemAllAvailable_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('redeemAllAvailable',[account],options);
            return;
        }
        this.redeemAllAvailable = Object.assign(redeemAllAvailable_send, {
            call:redeemAllAvailable_call
        });
    }
}
export module Redeeming{
    export interface ReclaimRemainingRewardEvent {_event:Event}
    export interface RedeemEvent {account:string,token:string,vesting:BigNumber,reward:BigNumber,_event:Event}
}