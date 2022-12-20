import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./VestingToken.json";
export interface IDeployParams {name:string;symbol:string;startReleaseBlock:number|BigNumber;endReleaseBlock:number|BigNumber;cap:number|BigNumber;vestingRatio:number|BigNumber}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface ILockParams {account:string;amount:number|BigNumber}
export interface IMintParams {to:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class VestingToken extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.name,params.symbol,this.wallet.utils.toString(params.startReleaseBlock),this.wallet.utils.toString(params.endReleaseBlock),this.wallet.utils.toString(params.cap),this.wallet.utils.toString(params.vestingRatio)], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): VestingToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): VestingToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): VestingToken.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): VestingToken.LockEvent{
        let result = event.data;
        return {
            account: result.account,
            direct: new BigNumber(result.direct),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): VestingToken.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): VestingToken.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): VestingToken.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): VestingToken.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): VestingToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): VestingToken.TransferEvent{
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
    canUnlockAmount: {
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
    endReleaseBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    farming: {
        (options?: TransactionOptions): Promise<string>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    lastUnlockBlock: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    lock: {
        (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
    }
    lockOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    redeem: {
        (params: IRedeemParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRedeemParams, options?: TransactionOptions) => Promise<void>;
    }
    redeeming: {
        (options?: TransactionOptions): Promise<string>;
    }
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    setFarming: {
        (farming:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (farming:string, options?: TransactionOptions) => Promise<void>;
    }
    setRedeeming: {
        (redeeming:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (redeeming:string, options?: TransactionOptions) => Promise<void>;
    }
    startReleaseBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    totalAvailableAmount: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    totalBalanceOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    totalLock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferAll: {
        (to:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to:string, options?: TransactionOptions) => Promise<void>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    unlock: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    unlockedSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    vestingRatio: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
        let canUnlockAmount_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('canUnlockAmount',[account],options);
            return new BigNumber(result);
        }
        this.canUnlockAmount = canUnlockAmount_call
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
        let endReleaseBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endReleaseBlock',[],options);
            return new BigNumber(result);
        }
        this.endReleaseBlock = endReleaseBlock_call
        let farming_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('farming',[],options);
            return result;
        }
        this.farming = farming_call
        let lastUnlockBlock_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastUnlockBlock',[account],options);
            return new BigNumber(result);
        }
        this.lastUnlockBlock = lastUnlockBlock_call
        let lockOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lockOf',[account],options);
            return new BigNumber(result);
        }
        this.lockOf = lockOf_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let redeeming_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('redeeming',[],options);
            return result;
        }
        this.redeeming = redeeming_call
        let startReleaseBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startReleaseBlock',[],options);
            return new BigNumber(result);
        }
        this.startReleaseBlock = startReleaseBlock_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalAvailableAmount_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalAvailableAmount',[account],options);
            return new BigNumber(result);
        }
        this.totalAvailableAmount = totalAvailableAmount_call
        let totalBalanceOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalBalanceOf',[account],options);
            return new BigNumber(result);
        }
        this.totalBalanceOf = totalBalanceOf_call
        let totalLock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalLock',[],options);
            return new BigNumber(result);
        }
        this.totalLock = totalLock_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let unlockedSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('unlockedSupply',[],options);
            return new BigNumber(result);
        }
        this.unlockedSupply = unlockedSupply_call
        let vestingRatio_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('vestingRatio',[],options);
            return new BigNumber(result);
        }
        this.vestingRatio = vestingRatio_call
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
        let lockParams = (params: ILockParams) => [params.account,this.wallet.utils.toString(params.amount)];
        let lock_send = async (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params),options);
            return result;
        }
        let lock_call = async (params: ILockParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('lock',lockParams(params),options);
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let mintParams = (params: IMintParams) => [params.to,this.wallet.utils.toString(params.amount)];
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
        let renounceOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership',[],options);
            return result;
        }
        let renounceOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('renounceOwnership',[],options);
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let setFarming_send = async (farming:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFarming',[farming],options);
            return result;
        }
        let setFarming_call = async (farming:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFarming',[farming],options);
            return;
        }
        this.setFarming = Object.assign(setFarming_send, {
            call:setFarming_call
        });
        let setRedeeming_send = async (redeeming:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setRedeeming',[redeeming],options);
            return result;
        }
        let setRedeeming_call = async (redeeming:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setRedeeming',[redeeming],options);
            return;
        }
        this.setRedeeming = Object.assign(setRedeeming_send, {
            call:setRedeeming_call
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
        let transferAll_send = async (to:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferAll',[to],options);
            return result;
        }
        let transferAll_call = async (to:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferAll',[to],options);
            return;
        }
        this.transferAll = Object.assign(transferAll_send, {
            call:transferAll_call
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
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unlock_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unlock',[],options);
            return result;
        }
        let unlock_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unlock',[],options);
            return;
        }
        this.unlock = Object.assign(unlock_send, {
            call:unlock_call
        });
    }
}
export module VestingToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface LockEvent {account:string,direct:BigNumber,amount:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface RedeemEvent {account:string,amount:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}