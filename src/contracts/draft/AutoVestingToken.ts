import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./AutoVestingToken.json";
export interface IDeployParams {name:string;symbol:string;start:number|BigNumber;end:number|BigNumber;cap:number|BigNumber;farming:string;redeeming:string}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintParams {account:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class AutoVestingToken extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.name,params.symbol,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.end),this.wallet.utils.toString(params.cap),params.farming,params.redeeming], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): AutoVestingToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): AutoVestingToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): AutoVestingToken.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): AutoVestingToken.LockEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): AutoVestingToken.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): AutoVestingToken.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): AutoVestingToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): AutoVestingToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    balanceOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    cap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    duration: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    end: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    farming: {
        (options?: TransactionOptions): Promise<string>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    locked: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    redeem: {
        (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
    }
    redeeming: {
        (options?: TransactionOptions): Promise<string>;
    }
    start: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    totalLocked: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalVestable: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    vestable: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let cap_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('cap',[],options);
            return new BigNumber(result);
        }
        this.cap = cap_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let duration_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('duration',[],options);
            return new BigNumber(result);
        }
        this.duration = duration_call
        let end_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('end',[],options);
            return new BigNumber(result);
        }
        this.end = end_call
        let farming_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('farming',[],options);
            return result;
        }
        this.farming = farming_call
        let locked_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('locked',[account],options);
            return new BigNumber(result);
        }
        this.locked = locked_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let redeeming_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('redeeming',[],options);
            return result;
        }
        this.redeeming = redeeming_call
        let start_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('start',[],options);
            return new BigNumber(result);
        }
        this.start = start_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalLocked_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalLocked',[],options);
            return new BigNumber(result);
        }
        this.totalLocked = totalLocked_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let totalVestable_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalVestable',[],options);
            return new BigNumber(result);
        }
        this.totalVestable = totalVestable_call
        let vestable_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('vestable',[param1],options);
            return new BigNumber(result);
        }
        this.vestable = vestable_call
        let approveParams = (params: IApproveParams) => [params.spender,this.wallet.utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params),options);
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mintParams = (params: IMintParams) => [params.account,this.wallet.utils.toString(params.amount)];
        let mint_send = async (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params),options);
            return result;
        }
        let mint_call = async (params: IMintParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('mint',mintParams(params),options);
            return;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let redeemParams = (params: IRedeemParams) => [params.account,this.wallet.utils.toString(params.amount)];
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
        let transferParams = (params: ITransferParams) => [params.recipient,this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params),options);
            return result;
        }
        let transfer_call = async (params: ITransferParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params),options);
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.sender,params.recipient,this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
    }
}
export module AutoVestingToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface LockEvent {account:string,amount:BigNumber,_event:Event}
    export interface RedeemEvent {account:string,amount:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}