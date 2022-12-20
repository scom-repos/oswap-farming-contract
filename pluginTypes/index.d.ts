/// <amd-module name="@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/farming-contract/contracts/Farming.json.ts" />
declare module "@scom/farming-contract/contracts/Farming.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/farming-contract/contracts/Farming.ts" />
declare module "@scom/farming-contract/contracts/Farming.ts" {
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
    export class Farming extends _Contract {
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
    export module Farming {
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
}
/// <amd-module name="@scom/farming-contract/contracts/MasterChef.json.ts" />
declare module "@scom/farming-contract/contracts/MasterChef.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/farming-contract/contracts/MasterChef.ts" />
declare module "@scom/farming-contract/contracts/MasterChef.ts" {
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
    export class MasterChef extends _Contract {
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
    export module MasterChef {
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
}
/// <amd-module name="@scom/farming-contract/contracts/Redeeming.json.ts" />
declare module "@scom/farming-contract/contracts/Redeeming.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/farming-contract/contracts/Redeeming.ts" />
declare module "@scom/farming-contract/contracts/Redeeming.ts" {
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
    export class Redeeming extends _Contract {
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
    export module Redeeming {
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
}
/// <amd-module name="@scom/farming-contract/contracts/VestingToken.json.ts" />
declare module "@scom/farming-contract/contracts/VestingToken.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/farming-contract/contracts/VestingToken.ts" />
declare module "@scom/farming-contract/contracts/VestingToken.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        startReleaseBlock: number | BigNumber;
        endReleaseBlock: number | BigNumber;
        cap: number | BigNumber;
        vestingRatio: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ILockParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IMintParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface IRedeemParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class VestingToken extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): VestingToken.ApprovalEvent[];
        decodeApprovalEvent(event: Event): VestingToken.ApprovalEvent;
        parseLockEvent(receipt: TransactionReceipt): VestingToken.LockEvent[];
        decodeLockEvent(event: Event): VestingToken.LockEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): VestingToken.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): VestingToken.OwnershipTransferredEvent;
        parseRedeemEvent(receipt: TransactionReceipt): VestingToken.RedeemEvent[];
        decodeRedeemEvent(event: Event): VestingToken.RedeemEvent;
        parseTransferEvent(receipt: TransactionReceipt): VestingToken.TransferEvent[];
        decodeTransferEvent(event: Event): VestingToken.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        canUnlockAmount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        endReleaseBlock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        farming: {
            (options?: TransactionOptions): Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        lastUnlockBlock: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
        };
        lockOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        redeem: {
            (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
        };
        redeeming: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        setFarming: {
            (farming: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (farming: string, options?: TransactionOptions) => Promise<void>;
        };
        setRedeeming: {
            (redeeming: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (redeeming: string, options?: TransactionOptions) => Promise<void>;
        };
        startReleaseBlock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalAvailableAmount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        totalBalanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        totalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferAll: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<void>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        unlock: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        unlockedSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingRatio: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module VestingToken {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            account: string;
            direct: BigNumber;
            amount: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface RedeemEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/farming-contract/contracts/draft/AutoVestingToken.json.ts" />
declare module "@scom/farming-contract/contracts/draft/AutoVestingToken.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/farming-contract/contracts/draft/AutoVestingToken.ts" />
declare module "@scom/farming-contract/contracts/draft/AutoVestingToken.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        start: number | BigNumber;
        end: number | BigNumber;
        cap: number | BigNumber;
        farming: string;
        redeeming: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IRedeemParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class AutoVestingToken extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): AutoVestingToken.ApprovalEvent[];
        decodeApprovalEvent(event: Event): AutoVestingToken.ApprovalEvent;
        parseLockEvent(receipt: TransactionReceipt): AutoVestingToken.LockEvent[];
        decodeLockEvent(event: Event): AutoVestingToken.LockEvent;
        parseRedeemEvent(receipt: TransactionReceipt): AutoVestingToken.RedeemEvent[];
        decodeRedeemEvent(event: Event): AutoVestingToken.RedeemEvent;
        parseTransferEvent(receipt: TransactionReceipt): AutoVestingToken.TransferEvent[];
        decodeTransferEvent(event: Event): AutoVestingToken.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        duration: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        end: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        farming: {
            (options?: TransactionOptions): Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        locked: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        redeem: {
            (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
        };
        redeeming: {
            (options?: TransactionOptions): Promise<string>;
        };
        start: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalVestable: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        vestable: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module AutoVestingToken {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface RedeemEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/farming-contract/contracts/draft/MasterChefV2.json.ts" />
declare module "@scom/farming-contract/contracts/draft/MasterChefV2.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/farming-contract/contracts/draft/MasterChefV2.ts" />
declare module "@scom/farming-contract/contracts/draft/MasterChefV2.ts" {
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
    export class MasterChefV2 extends _Contract {
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
    export module MasterChefV2 {
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
}
/// <amd-module name="@scom/farming-contract/contracts/test/MockERC20.json.ts" />
declare module "@scom/farming-contract/contracts/test/MockERC20.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/farming-contract/contracts/test/MockERC20.ts" />
declare module "@scom/farming-contract/contracts/test/MockERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        symbol: string;
        name: string;
        initialSupply: number | BigNumber;
        decimals: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        value: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class MockERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): MockERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): MockERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): MockERC20.TransferEvent[];
        decodeTransferEvent(event: Event): MockERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module MockERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/farming-contract/contracts/index.ts" />
declare module "@scom/farming-contract/contracts/index.ts" {
    export { ERC20 } from "@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { Farming } from "@scom/farming-contract/contracts/Farming.ts";
    export { MasterChef } from "@scom/farming-contract/contracts/MasterChef.ts";
    export { Redeeming } from "@scom/farming-contract/contracts/Redeeming.ts";
    export { VestingToken } from "@scom/farming-contract/contracts/VestingToken.ts";
    export { AutoVestingToken } from "@scom/farming-contract/contracts/draft/AutoVestingToken.ts";
    export { MasterChefV2 } from "@scom/farming-contract/contracts/draft/MasterChefV2.ts";
    export { MockERC20 } from "@scom/farming-contract/contracts/test/MockERC20.ts";
}
/// <amd-module name="@scom/farming-contract" />
declare module "@scom/farming-contract" {
    export * as Contracts from "@scom/farming-contract/contracts/index.ts";
}
