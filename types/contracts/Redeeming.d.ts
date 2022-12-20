import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    farming: string;
    vesting: string[];
    rewardPerVesting: (number | BigNumber)[];
    reward: string[];
    convertingRatio: (number | BigNumber)[];
    admin: string;
}
export interface IConvertingRatioParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IHarvestAndRedeemParams {
    account: string;
    pid: number | BigNumber;
}
export interface IPutFundParams {
    token: string;
    from: string;
    amount: number | BigNumber;
}
export interface IRedeemParams {
    account: string;
    vestingIdx: number | BigNumber;
}
export interface IRewardParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export declare class Redeeming extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseReclaimRemainingRewardEvent(receipt: TransactionReceipt): Redeeming.ReclaimRemainingRewardEvent[];
    decodeReclaimRemainingRewardEvent(event: Event): Redeeming.ReclaimRemainingRewardEvent;
    parseRedeemEvent(receipt: TransactionReceipt): Redeeming.RedeemEvent[];
    decodeRedeemEvent(event: Event): Redeeming.RedeemEvent;
    admin: {
        (options?: TransactionOptions): Promise<string>;
    };
    availableRewardAmount: {
        (account: string, options?: TransactionOptions): Promise<{
            tokens: string[];
            availableReward: BigNumber[];
        }>;
    };
    convertingRatio: {
        (params: IConvertingRatioParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    farming: {
        (options?: TransactionOptions): Promise<string>;
    };
    harvestAndRedeem: {
        (params: IHarvestAndRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestAndRedeemParams, options?: TransactionOptions) => Promise<void>;
    };
    putFund: {
        (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
    };
    reclaimRemainingReward: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    redeem: {
        (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
    };
    redeemAllAvailable: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    reward: {
        (params: IRewardParams, options?: TransactionOptions): Promise<string>;
    };
    rewardLength: {
        (vestingIdx: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    vesting: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    vestingLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module Redeeming {
    interface ReclaimRemainingRewardEvent {
        _event: Event;
    }
    interface RedeemEvent {
        account: string;
        token: string;
        vesting: BigNumber;
        reward: BigNumber;
        _event: Event;
    }
}
