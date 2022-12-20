import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    rewardsPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    lpToken: string;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export interface IEmergencyWithdrawParams {
    pid: number | BigNumber;
    to: string;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    to: string;
}
export interface IPendingRewardsParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allowed: boolean;
}
export interface IUserInfoParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IWithdrawParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export interface IWithdrawAndHarvestParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export declare class MasterChefV2 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): MasterChefV2.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): MasterChefV2.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): MasterChefV2.DepositEvent[];
    decodeDepositEvent(event: Event): MasterChefV2.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): MasterChefV2.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): MasterChefV2.HarvestEvent[];
    decodeHarvestEvent(event: Event): MasterChefV2.HarvestEvent;
    parseLogInitEvent(receipt: TransactionReceipt): MasterChefV2.LogInitEvent[];
    decodeLogInitEvent(event: Event): MasterChefV2.LogInitEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): MasterChefV2.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): MasterChefV2.LogPoolAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): MasterChefV2.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): MasterChefV2.LogSetPoolEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): MasterChefV2.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): MasterChefV2.LogUpdatePoolEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): MasterChefV2.WithdrawEvent;
    add: {
        (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddParams, options?: TransactionOptions) => Promise<void>;
    };
    addRewards: {
        (rewards: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (rewards: string[], options?: TransactionOptions) => Promise<void>;
    };
    deny: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
    };
    emergencyWithdraw: {
        (params: IEmergencyWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEmergencyWithdrawParams, options?: TransactionOptions) => Promise<void>;
    };
    endBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    harvest: {
        (params: IHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestParams, options?: TransactionOptions) => Promise<void>;
    };
    lpToken: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    massUpdatePools: {
        (pids: (number | BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pids: (number | BigNumber)[], options?: TransactionOptions) => Promise<void>;
    };
    owners: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    pendingRewards: {
        (params: IPendingRewardsParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            accRewardsPerShare: BigNumber;
            lastRewardBlock: BigNumber;
            allocPoint: BigNumber;
        }>;
    };
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    rely: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    rewardToken: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    rewardsPerBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    set: {
        (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetParams, options?: TransactionOptions) => Promise<void>;
    };
    setWhiteList: {
        (params: ISetWhiteListParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams, options?: TransactionOptions) => Promise<void>;
    };
    startBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalAllocPoint: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    updatePool: {
        (pid: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    userInfo: {
        (params: IUserInfoParams, options?: TransactionOptions): Promise<{
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
    };
    whitelisted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
    };
    withdrawAndHarvest: {
        (params: IWithdrawAndHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawAndHarvestParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module MasterChefV2 {
    interface AuthChangedEvent {
        account: string;
        auth: boolean;
        _event: Event;
    }
    interface DepositEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
    interface HarvestEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface LogInitEvent {
        _event: Event;
    }
    interface LogPoolAdditionEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        _event: Event;
    }
    interface LogSetPoolEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        _event: Event;
    }
    interface LogUpdatePoolEvent {
        pid: BigNumber;
        lastRewardBlock: BigNumber;
        lpSupply: BigNumber;
        accRewardsPerShare: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
}
