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
export declare class VestingToken extends _Contract {
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
export declare module VestingToken {
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
