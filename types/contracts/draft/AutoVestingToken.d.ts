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
export declare class AutoVestingToken extends _Contract {
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
export declare module AutoVestingToken {
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
