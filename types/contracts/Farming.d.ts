import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    rewardPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
    admin: string;
}
export interface IAddPoolParams {
    allocPoint: number | BigNumber;
    lpToken: string;
    endBlock: number | BigNumber;
    bonusMultiplier: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    withUpdate: boolean;
}
export interface IAddRewardsParams {
    rewardToken: string;
    multiplier: number | BigNumber;
    vestingRatio: number | BigNumber;
    vestingStartOnHarvest: boolean;
    vestingDuration: number | BigNumber;
}
export interface IClaimVestingParams {
    pid: number | BigNumber;
    rewardId: number | BigNumber;
    user: string;
}
export interface IClaimableVestingParams {
    pid: number | BigNumber;
    rewardId: number | BigNumber;
    user: string;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    user: string;
}
export interface IPendingRewardParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetPoolParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
    endBlock: number | BigNumber;
    bonusMultiplier: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    withUpdate: boolean;
}
export interface ISetRewardsParams {
    rewardId: number | BigNumber;
    multiplier: number | BigNumber;
    vestingRatio: number | BigNumber;
    vestingDuration: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allowed: boolean;
}
export interface IUserInfoParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUserRewardsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
    param3: string;
}
export interface IWithdrawParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export declare class Farming extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): Farming.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): Farming.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): Farming.DepositEvent[];
    decodeDepositEvent(event: Event): Farming.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): Farming.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): Farming.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): Farming.HarvestEvent[];
    decodeHarvestEvent(event: Event): Farming.HarvestEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): Farming.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): Farming.LogPoolAdditionEvent;
    parseLogRewardAdditionEvent(receipt: TransactionReceipt): Farming.LogRewardAdditionEvent[];
    decodeLogRewardAdditionEvent(event: Event): Farming.LogRewardAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): Farming.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): Farming.LogSetPoolEvent;
    parseLogSetRewardEvent(receipt: TransactionReceipt): Farming.LogSetRewardEvent[];
    decodeLogSetRewardEvent(event: Event): Farming.LogSetRewardEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): Farming.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): Farming.LogUpdatePoolEvent;
    parseVestedEvent(receipt: TransactionReceipt): Farming.VestedEvent[];
    decodeVestedEvent(event: Event): Farming.VestedEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): Farming.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): Farming.WithdrawEvent;
    addPool: {
        (params: IAddPoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddPoolParams, options?: TransactionOptions) => Promise<void>;
    };
    addRewards: {
        (params: IAddRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddRewardsParams, options?: TransactionOptions) => Promise<void>;
    };
    admin: {
        (options?: TransactionOptions): Promise<string>;
    };
    adminWithdrawReward: {
        (rewardId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (rewardId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    claimVesting: {
        (params: IClaimVestingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimVestingParams, options?: TransactionOptions) => Promise<void>;
    };
    claimableVesting: {
        (params: IClaimableVestingParams, options?: TransactionOptions): Promise<BigNumber>;
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
    getReserveReward: {
        (rewardId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
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
    pendingReward: {
        (params: IPendingRewardParams, options?: TransactionOptions): Promise<{
            rewardToken: string[];
            availableNow: BigNumber[];
            toBeVested: BigNumber[];
            vestingStart: BigNumber[];
            vestingDuration: BigNumber[];
        }>;
    };
    poolIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            lpToken: string;
            allocPoint: BigNumber;
            endBlock: BigNumber;
            bonusMultiplier: BigNumber;
            bonusEndBlock: BigNumber;
            rewardDebt: BigNumber;
            lastRewardBlock: BigNumber;
            accRewardPerShare: BigNumber;
        }>;
    };
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    rely: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    resetPool: {
        (pid: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    rewardIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    rewardInfo: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            rewardToken: string;
            multiplier: BigNumber;
            vestingRatio: BigNumber;
            vestingStartOnHarvest: boolean;
            vestingDuration: BigNumber;
            rewarded: BigNumber;
            reserve: BigNumber;
        }>;
    };
    rewardLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    rewardPerBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    setAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
    };
    setPool: {
        (params: ISetPoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetPoolParams, options?: TransactionOptions) => Promise<void>;
    };
    setRewards: {
        (params: ISetRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetRewardsParams, options?: TransactionOptions) => Promise<void>;
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
    userRewards: {
        (params: IUserRewardsParams, options?: TransactionOptions): Promise<{
            harvested: BigNumber;
            locked: BigNumber;
            lockedTill: BigNumber;
            lastUpdate: BigNumber;
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
export declare module Farming {
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
        rewardId: BigNumber;
        amount: BigNumber;
        locked: BigNumber;
        _event: Event;
    }
    interface LogPoolAdditionEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        endBlock: BigNumber;
        bonusMultiplier: BigNumber;
        bonusEndBlock: BigNumber;
        _event: Event;
    }
    interface LogRewardAdditionEvent {
        rewardId: BigNumber;
        rewardToken: string;
        multiplier: BigNumber;
        vestingRatio: BigNumber;
        vestingStartOnHarvest: boolean;
        vestingDuration: BigNumber;
        _event: Event;
    }
    interface LogSetPoolEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        endBlock: BigNumber;
        bonusMultiplier: BigNumber;
        bonusEndBlock: BigNumber;
        _event: Event;
    }
    interface LogSetRewardEvent {
        rewardId: BigNumber;
        multiplier: BigNumber;
        vestingRatio: BigNumber;
        vestingDuration: BigNumber;
        _event: Event;
    }
    interface LogUpdatePoolEvent {
        pid: BigNumber;
        lastRewardBlock: BigNumber;
        lpSupply: BigNumber;
        accSushiPerShare: BigNumber;
        _event: Event;
    }
    interface VestedEvent {
        user: string;
        pid: BigNumber;
        rewardId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
