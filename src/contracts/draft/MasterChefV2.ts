import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MasterChefV2.json";
export interface IDeployParams {rewardsPerBlock:number|BigNumber;startBlock:number|BigNumber;endBlock:number|BigNumber}
export interface IAddParams {allocPoint:number|BigNumber;lpToken:string}
export interface IDepositParams {pid:number|BigNumber;amount:number|BigNumber;to:string}
export interface IEmergencyWithdrawParams {pid:number|BigNumber;to:string}
export interface IHarvestParams {pid:number|BigNumber;to:string}
export interface IPendingRewardsParams {pid:number|BigNumber;user:string}
export interface ISetParams {pid:number|BigNumber;allocPoint:number|BigNumber}
export interface ISetWhiteListParams {who:string;allowed:boolean}
export interface IUserInfoParams {param1:number|BigNumber;param2:string}
export interface IWithdrawParams {pid:number|BigNumber;amount:number|BigNumber;to:string}
export interface IWithdrawAndHarvestParams {pid:number|BigNumber;amount:number|BigNumber;to:string}
export class MasterChefV2 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([this.wallet.utils.toString(params.rewardsPerBlock),this.wallet.utils.toString(params.startBlock),this.wallet.utils.toString(params.endBlock)], options);
    }
    parseAuthChangedEvent(receipt: TransactionReceipt): MasterChefV2.AuthChangedEvent[]{
        return this.parseEvents(receipt, "AuthChanged").map(e=>this.decodeAuthChangedEvent(e));
    }
    decodeAuthChangedEvent(event: Event): MasterChefV2.AuthChangedEvent{
        let result = event.data;
        return {
            account: result.account,
            auth: result.auth,
            _event: event
        };
    }
    parseDepositEvent(receipt: TransactionReceipt): MasterChefV2.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): MasterChefV2.DepositEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            to: result.to,
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.EmergencyWithdrawEvent[]{
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e=>this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event: Event): MasterChefV2.EmergencyWithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            to: result.to,
            _event: event
        };
    }
    parseHarvestEvent(receipt: TransactionReceipt): MasterChefV2.HarvestEvent[]{
        return this.parseEvents(receipt, "Harvest").map(e=>this.decodeHarvestEvent(e));
    }
    decodeHarvestEvent(event: Event): MasterChefV2.HarvestEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseLogInitEvent(receipt: TransactionReceipt): MasterChefV2.LogInitEvent[]{
        return this.parseEvents(receipt, "LogInit").map(e=>this.decodeLogInitEvent(e));
    }
    decodeLogInitEvent(event: Event): MasterChefV2.LogInitEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): MasterChefV2.LogPoolAdditionEvent[]{
        return this.parseEvents(receipt, "LogPoolAddition").map(e=>this.decodeLogPoolAdditionEvent(e));
    }
    decodeLogPoolAdditionEvent(event: Event): MasterChefV2.LogPoolAdditionEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            allocPoint: new BigNumber(result.allocPoint),
            lpToken: result.lpToken,
            _event: event
        };
    }
    parseLogSetPoolEvent(receipt: TransactionReceipt): MasterChefV2.LogSetPoolEvent[]{
        return this.parseEvents(receipt, "LogSetPool").map(e=>this.decodeLogSetPoolEvent(e));
    }
    decodeLogSetPoolEvent(event: Event): MasterChefV2.LogSetPoolEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            allocPoint: new BigNumber(result.allocPoint),
            _event: event
        };
    }
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): MasterChefV2.LogUpdatePoolEvent[]{
        return this.parseEvents(receipt, "LogUpdatePool").map(e=>this.decodeLogUpdatePoolEvent(e));
    }
    decodeLogUpdatePoolEvent(event: Event): MasterChefV2.LogUpdatePoolEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            lastRewardBlock: new BigNumber(result.lastRewardBlock),
            lpSupply: new BigNumber(result.lpSupply),
            accRewardsPerShare: new BigNumber(result.accRewardsPerShare),
            _event: event
        };
    }
    parseWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.WithdrawEvent[]{
        return this.parseEvents(receipt, "Withdraw").map(e=>this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event: Event): MasterChefV2.WithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            to: result.to,
            _event: event
        };
    }
    add: {
        (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddParams, options?: TransactionOptions) => Promise<void>;
    }
    addRewards: {
        (rewards:string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (rewards:string[], options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<void>;
    }
    emergencyWithdraw: {
        (params: IEmergencyWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEmergencyWithdrawParams, options?: TransactionOptions) => Promise<void>;
    }
    endBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    harvest: {
        (params: IHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestParams, options?: TransactionOptions) => Promise<void>;
    }
    lpToken: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    massUpdatePools: {
        (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pids:(number|BigNumber)[], options?: TransactionOptions) => Promise<void>;
    }
    owners: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    pendingRewards: {
        (params: IPendingRewardsParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    poolInfo: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{accRewardsPerShare:BigNumber,lastRewardBlock:BigNumber,allocPoint:BigNumber}>;
    }
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    rely: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    rewardToken: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    rewardsPerBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    set: {
        (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetParams, options?: TransactionOptions) => Promise<void>;
    }
    setWhiteList: {
        (params: ISetWhiteListParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams, options?: TransactionOptions) => Promise<void>;
    }
    startBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalAllocPoint: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    updatePool: {
        (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    userInfo: {
        (params: IUserInfoParams, options?: TransactionOptions): Promise<{amount:BigNumber,rewardDebt:BigNumber}>;
    }
    whitelisted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
    }
    withdrawAndHarvest: {
        (params: IWithdrawAndHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawAndHarvestParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let endBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endBlock',[],options);
            return new BigNumber(result);
        }
        this.endBlock = endBlock_call
        let lpToken_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('lpToken',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.lpToken = lpToken_call
        let owners_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('owners',[param1],options);
            return result;
        }
        this.owners = owners_call
        let pendingRewardsParams = (params: IPendingRewardsParams) => [this.wallet.utils.toString(params.pid),params.user];
        let pendingRewards_call = async (params: IPendingRewardsParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('pendingRewards',pendingRewardsParams(params),options);
            return new BigNumber(result);
        }
        this.pendingRewards = pendingRewards_call
        let poolInfo_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{accRewardsPerShare:BigNumber,lastRewardBlock:BigNumber,allocPoint:BigNumber}> => {
            let result = await this.call('poolInfo',[this.wallet.utils.toString(param1)],options);
            return {
                accRewardsPerShare: new BigNumber(result.accRewardsPerShare),
                lastRewardBlock: new BigNumber(result.lastRewardBlock),
                allocPoint: new BigNumber(result.allocPoint)
            };
        }
        this.poolInfo = poolInfo_call
        let poolLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('poolLength',[],options);
            return new BigNumber(result);
        }
        this.poolLength = poolLength_call
        let rewardToken_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('rewardToken',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.rewardToken = rewardToken_call
        let rewardsPerBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('rewardsPerBlock',[],options);
            return new BigNumber(result);
        }
        this.rewardsPerBlock = rewardsPerBlock_call
        let startBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('startBlock',[],options);
            return new BigNumber(result);
        }
        this.startBlock = startBlock_call
        let totalAllocPoint_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalAllocPoint',[],options);
            return new BigNumber(result);
        }
        this.totalAllocPoint = totalAllocPoint_call
        let userInfoParams = (params: IUserInfoParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let userInfo_call = async (params: IUserInfoParams, options?: TransactionOptions): Promise<{amount:BigNumber,rewardDebt:BigNumber}> => {
            let result = await this.call('userInfo',userInfoParams(params),options);
            return {
                amount: new BigNumber(result.amount),
                rewardDebt: new BigNumber(result.rewardDebt)
            };
        }
        this.userInfo = userInfo_call
        let whitelisted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('whitelisted',[param1],options);
            return result;
        }
        this.whitelisted = whitelisted_call
        let addParams = (params: IAddParams) => [this.wallet.utils.toString(params.allocPoint),params.lpToken];
        let add_send = async (params: IAddParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('add',addParams(params),options);
            return result;
        }
        let add_call = async (params: IAddParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('add',addParams(params),options);
            return;
        }
        this.add = Object.assign(add_send, {
            call:add_call
        });
        let addRewards_send = async (rewards:string[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addRewards',[rewards],options);
            return result;
        }
        let addRewards_call = async (rewards:string[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addRewards',[rewards],options);
            return;
        }
        this.addRewards = Object.assign(addRewards_send, {
            call:addRewards_call
        });
        let deny_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[account],options);
            return result;
        }
        let deny_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[account],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let depositParams = (params: IDepositParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.amount),params.to];
        let deposit_send = async (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params),options);
            return result;
        }
        let deposit_call = async (params: IDepositParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deposit',depositParams(params),options);
            return;
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
        });
        let emergencyWithdrawParams = (params: IEmergencyWithdrawParams) => [this.wallet.utils.toString(params.pid),params.to];
        let emergencyWithdraw_send = async (params: IEmergencyWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('emergencyWithdraw',emergencyWithdrawParams(params),options);
            return result;
        }
        let emergencyWithdraw_call = async (params: IEmergencyWithdrawParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('emergencyWithdraw',emergencyWithdrawParams(params),options);
            return;
        }
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call:emergencyWithdraw_call
        });
        let harvestParams = (params: IHarvestParams) => [this.wallet.utils.toString(params.pid),params.to];
        let harvest_send = async (params: IHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('harvest',harvestParams(params),options);
            return result;
        }
        let harvest_call = async (params: IHarvestParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('harvest',harvestParams(params),options);
            return;
        }
        this.harvest = Object.assign(harvest_send, {
            call:harvest_call
        });
        let massUpdatePools_send = async (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('massUpdatePools',[this.wallet.utils.toString(pids)],options);
            return result;
        }
        let massUpdatePools_call = async (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('massUpdatePools',[this.wallet.utils.toString(pids)],options);
            return;
        }
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call:massUpdatePools_call
        });
        let rely_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('rely',[account],options);
            return result;
        }
        let rely_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('rely',[account],options);
            return;
        }
        this.rely = Object.assign(rely_send, {
            call:rely_call
        });
        let setParams = (params: ISetParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.allocPoint)];
        let set_send = async (params: ISetParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('set',setParams(params),options);
            return result;
        }
        let set_call = async (params: ISetParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('set',setParams(params),options);
            return;
        }
        this.set = Object.assign(set_send, {
            call:set_call
        });
        let setWhiteListParams = (params: ISetWhiteListParams) => [params.who,params.allowed];
        let setWhiteList_send = async (params: ISetWhiteListParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setWhiteList',setWhiteListParams(params),options);
            return result;
        }
        let setWhiteList_call = async (params: ISetWhiteListParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setWhiteList',setWhiteListParams(params),options);
            return;
        }
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call:setWhiteList_call
        });
        let updatePool_send = async (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updatePool',[this.wallet.utils.toString(pid)],options);
            return result;
        }
        let updatePool_call = async (pid:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updatePool',[this.wallet.utils.toString(pid)],options);
            return;
        }
        this.updatePool = Object.assign(updatePool_send, {
            call:updatePool_call
        });
        let withdrawParams = (params: IWithdrawParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.amount),params.to];
        let withdraw_send = async (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params),options);
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdraw',withdrawParams(params),options);
            return;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
        let withdrawAndHarvestParams = (params: IWithdrawAndHarvestParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.amount),params.to];
        let withdrawAndHarvest_send = async (params: IWithdrawAndHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawAndHarvest',withdrawAndHarvestParams(params),options);
            return result;
        }
        let withdrawAndHarvest_call = async (params: IWithdrawAndHarvestParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawAndHarvest',withdrawAndHarvestParams(params),options);
            return;
        }
        this.withdrawAndHarvest = Object.assign(withdrawAndHarvest_send, {
            call:withdrawAndHarvest_call
        });
    }
}
export module MasterChefV2{
    export interface AuthChangedEvent {account:string,auth:boolean,_event:Event}
    export interface DepositEvent {user:string,pid:BigNumber,amount:BigNumber,to:string,_event:Event}
    export interface EmergencyWithdrawEvent {user:string,pid:BigNumber,amount:BigNumber,to:string,_event:Event}
    export interface HarvestEvent {user:string,pid:BigNumber,amount:BigNumber,_event:Event}
    export interface LogInitEvent {_event:Event}
    export interface LogPoolAdditionEvent {pid:BigNumber,allocPoint:BigNumber,lpToken:string,_event:Event}
    export interface LogSetPoolEvent {pid:BigNumber,allocPoint:BigNumber,_event:Event}
    export interface LogUpdatePoolEvent {pid:BigNumber,lastRewardBlock:BigNumber,lpSupply:BigNumber,accRewardsPerShare:BigNumber,_event:Event}
    export interface WithdrawEvent {user:string,pid:BigNumber,amount:BigNumber,to:string,_event:Event}
}