import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    rewardToken: string[];
    rewardsPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
    bonusEndBlock: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    lpToken: string;
    withUpdate: boolean;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export interface IGetMultiplierParams {
    from: number | BigNumber;
    to: number | BigNumber;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    user: string;
}
export interface IPendingRewardsParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
    withUpdate: boolean;
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
}
export declare class MasterChef extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): MasterChef.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): MasterChef.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): MasterChef.DepositEvent[];
    decodeDepositEvent(event: Event): MasterChef.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): MasterChef.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): MasterChef.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): MasterChef.HarvestEvent[];
    decodeHarvestEvent(event: Event): MasterChef.HarvestEvent;
    parseLogInitEvent(receipt: TransactionReceipt): MasterChef.LogInitEvent[];
    decodeLogInitEvent(event: Event): MasterChef.LogInitEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): MasterChef.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): MasterChef.LogPoolAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): MasterChef.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): MasterChef.LogSetPoolEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): MasterChef.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): MasterChef.LogUpdatePoolEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): MasterChef.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): MasterChef.WithdrawEvent;
    BONUS_MULTIPLIER: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    add: {
        (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddParams, options?: TransactionOptions) => Promise<void>;
    };
    bonusEndBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
        (pid: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    endBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getMultiplier: {
        (params: IGetMultiplierParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    harvest: {
        (params: IHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestParams, options?: TransactionOptions) => Promise<void>;
    };
    massUpdatePools: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    owners: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    pause: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    pendingRewards: {
        (params: IPendingRewardsParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accRewardsPerShare: BigNumber;
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
    rewardTokenLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
    totalPendingRewards: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    updatePool: {
        (pid: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    updateSelectedPools: {
        (pids: (number | BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pids: (number | BigNumber)[], options?: TransactionOptions) => Promise<void>;
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
    private assign;
}
export declare module MasterChef {
    interface AuthChangedEvent {
        account: string;
        auth: boolean;
        _event: Event;
    }
    interface DepositEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
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
        accSushiPerShare: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
