import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Farming.json";
export interface IDeployParams {rewardPerBlock:number|BigNumber;startBlock:number|BigNumber;endBlock:number|BigNumber;admin:string}
export interface IAddPoolParams {allocPoint:number|BigNumber;lpToken:string;endBlock:number|BigNumber;bonusMultiplier:number|BigNumber;bonusEndBlock:number|BigNumber;withUpdate:boolean}
export interface IAddRewardsParams {rewardToken:string;multiplier:number|BigNumber;vestingRatio:number|BigNumber;vestingStartOnHarvest:boolean;vestingDuration:number|BigNumber}
export interface IClaimVestingParams {pid:number|BigNumber;rewardId:number|BigNumber;user:string}
export interface IClaimableVestingParams {pid:number|BigNumber;rewardId:number|BigNumber;user:string}
export interface IDepositParams {pid:number|BigNumber;amount:number|BigNumber}
export interface IHarvestParams {pid:number|BigNumber;user:string}
export interface IPendingRewardParams {pid:number|BigNumber;user:string}
export interface ISetPoolParams {pid:number|BigNumber;allocPoint:number|BigNumber;endBlock:number|BigNumber;bonusMultiplier:number|BigNumber;bonusEndBlock:number|BigNumber;withUpdate:boolean}
export interface ISetRewardsParams {rewardId:number|BigNumber;multiplier:number|BigNumber;vestingRatio:number|BigNumber;vestingDuration:number|BigNumber}
export interface ISetWhiteListParams {who:string;allowed:boolean}
export interface IUserInfoParams {param1:number|BigNumber;param2:string}
export interface IUserRewardsParams {param1:number|BigNumber;param2:number|BigNumber;param3:string}
export interface IWithdrawParams {pid:number|BigNumber;amount:number|BigNumber}
export class Farming extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([this.wallet.utils.toString(params.rewardPerBlock),this.wallet.utils.toString(params.startBlock),this.wallet.utils.toString(params.endBlock),params.admin], options);
    }
    parseAuthChangedEvent(receipt: TransactionReceipt): Farming.AuthChangedEvent[]{
        return this.parseEvents(receipt, "AuthChanged").map(e=>this.decodeAuthChangedEvent(e));
    }
    decodeAuthChangedEvent(event: Event): Farming.AuthChangedEvent{
        let result = event.data;
        return {
            account: result.account,
            auth: result.auth,
            _event: event
        };
    }
    parseDepositEvent(receipt: TransactionReceipt): Farming.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): Farming.DepositEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): Farming.EmergencyWithdrawEvent[]{
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e=>this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event: Event): Farming.EmergencyWithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseHarvestEvent(receipt: TransactionReceipt): Farming.HarvestEvent[]{
        return this.parseEvents(receipt, "Harvest").map(e=>this.decodeHarvestEvent(e));
    }
    decodeHarvestEvent(event: Event): Farming.HarvestEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            rewardId: new BigNumber(result.rewardId),
            amount: new BigNumber(result.amount),
            locked: new BigNumber(result.locked),
            _event: event
        };
    }
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): Farming.LogPoolAdditionEvent[]{
        return this.parseEvents(receipt, "LogPoolAddition").map(e=>this.decodeLogPoolAdditionEvent(e));
    }
    decodeLogPoolAdditionEvent(event: Event): Farming.LogPoolAdditionEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            allocPoint: new BigNumber(result.allocPoint),
            lpToken: result.lpToken,
            endBlock: new BigNumber(result.endBlock),
            bonusMultiplier: new BigNumber(result.bonusMultiplier),
            bonusEndBlock: new BigNumber(result.bonusEndBlock),
            _event: event
        };
    }
    parseLogRewardAdditionEvent(receipt: TransactionReceipt): Farming.LogRewardAdditionEvent[]{
        return this.parseEvents(receipt, "LogRewardAddition").map(e=>this.decodeLogRewardAdditionEvent(e));
    }
    decodeLogRewardAdditionEvent(event: Event): Farming.LogRewardAdditionEvent{
        let result = event.data;
        return {
            rewardId: new BigNumber(result.rewardId),
            rewardToken: result.rewardToken,
            multiplier: new BigNumber(result.multiplier),
            vestingRatio: new BigNumber(result.vestingRatio),
            vestingStartOnHarvest: result.vestingStartOnHarvest,
            vestingDuration: new BigNumber(result.vestingDuration),
            _event: event
        };
    }
    parseLogSetPoolEvent(receipt: TransactionReceipt): Farming.LogSetPoolEvent[]{
        return this.parseEvents(receipt, "LogSetPool").map(e=>this.decodeLogSetPoolEvent(e));
    }
    decodeLogSetPoolEvent(event: Event): Farming.LogSetPoolEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            allocPoint: new BigNumber(result.allocPoint),
            endBlock: new BigNumber(result.endBlock),
            bonusMultiplier: new BigNumber(result.bonusMultiplier),
            bonusEndBlock: new BigNumber(result.bonusEndBlock),
            _event: event
        };
    }
    parseLogSetRewardEvent(receipt: TransactionReceipt): Farming.LogSetRewardEvent[]{
        return this.parseEvents(receipt, "LogSetReward").map(e=>this.decodeLogSetRewardEvent(e));
    }
    decodeLogSetRewardEvent(event: Event): Farming.LogSetRewardEvent{
        let result = event.data;
        return {
            rewardId: new BigNumber(result.rewardId),
            multiplier: new BigNumber(result.multiplier),
            vestingRatio: new BigNumber(result.vestingRatio),
            vestingDuration: new BigNumber(result.vestingDuration),
            _event: event
        };
    }
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): Farming.LogUpdatePoolEvent[]{
        return this.parseEvents(receipt, "LogUpdatePool").map(e=>this.decodeLogUpdatePoolEvent(e));
    }
    decodeLogUpdatePoolEvent(event: Event): Farming.LogUpdatePoolEvent{
        let result = event.data;
        return {
            pid: new BigNumber(result.pid),
            lastRewardBlock: new BigNumber(result.lastRewardBlock),
            lpSupply: new BigNumber(result.lpSupply),
            accSushiPerShare: new BigNumber(result.accSushiPerShare),
            _event: event
        };
    }
    parseVestedEvent(receipt: TransactionReceipt): Farming.VestedEvent[]{
        return this.parseEvents(receipt, "Vested").map(e=>this.decodeVestedEvent(e));
    }
    decodeVestedEvent(event: Event): Farming.VestedEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            rewardId: new BigNumber(result.rewardId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawEvent(receipt: TransactionReceipt): Farming.WithdrawEvent[]{
        return this.parseEvents(receipt, "Withdraw").map(e=>this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event: Event): Farming.WithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            pid: new BigNumber(result.pid),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    addPool: {
        (params: IAddPoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddPoolParams, options?: TransactionOptions) => Promise<void>;
    }
    addRewards: {
        (params: IAddRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddRewardsParams, options?: TransactionOptions) => Promise<void>;
    }
    admin: {
        (options?: TransactionOptions): Promise<string>;
    }
    adminWithdrawReward: {
        (rewardId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (rewardId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    claimVesting: {
        (params: IClaimVestingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IClaimVestingParams, options?: TransactionOptions) => Promise<void>;
    }
    claimableVesting: {
        (params: IClaimableVestingParams, options?: TransactionOptions): Promise<BigNumber>;
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
        (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    endBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getReserveReward: {
        (rewardId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    harvest: {
        (params: IHarvestParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IHarvestParams, options?: TransactionOptions) => Promise<void>;
    }
    massUpdatePools: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    owners: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    pendingReward: {
        (params: IPendingRewardParams, options?: TransactionOptions): Promise<{rewardToken:string[],availableNow:BigNumber[],toBeVested:BigNumber[],vestingStart:BigNumber[],vestingDuration:BigNumber[]}>;
    }
    poolIdx: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    poolInfo: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{lpToken:string,allocPoint:BigNumber,endBlock:BigNumber,bonusMultiplier:BigNumber,bonusEndBlock:BigNumber,rewardDebt:BigNumber,lastRewardBlock:BigNumber,accRewardPerShare:BigNumber}>;
    }
    poolLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    rely: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    resetPool: {
        (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pid:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    rewardIdx: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    rewardInfo: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{rewardToken:string,multiplier:BigNumber,vestingRatio:BigNumber,vestingStartOnHarvest:boolean,vestingDuration:BigNumber,rewarded:BigNumber,reserve:BigNumber}>;
    }
    rewardLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    rewardPerBlock: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    setAdmin: {
        (admin:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin:string, options?: TransactionOptions) => Promise<void>;
    }
    setPool: {
        (params: ISetPoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetPoolParams, options?: TransactionOptions) => Promise<void>;
    }
    setRewards: {
        (params: ISetRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetRewardsParams, options?: TransactionOptions) => Promise<void>;
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
    updateSelectedPools: {
        (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (pids:(number|BigNumber)[], options?: TransactionOptions) => Promise<void>;
    }
    userInfo: {
        (params: IUserInfoParams, options?: TransactionOptions): Promise<{amount:BigNumber,rewardDebt:BigNumber}>;
    }
    userRewards: {
        (params: IUserRewardsParams, options?: TransactionOptions): Promise<{harvested:BigNumber,locked:BigNumber,lockedTill:BigNumber,lastUpdate:BigNumber}>;
    }
    whitelisted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let admin_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('admin',[],options);
            return result;
        }
        this.admin = admin_call
        let claimableVestingParams = (params: IClaimableVestingParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.rewardId),params.user];
        let claimableVesting_call = async (params: IClaimableVestingParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('claimableVesting',claimableVestingParams(params),options);
            return new BigNumber(result);
        }
        this.claimableVesting = claimableVesting_call
        let endBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('endBlock',[],options);
            return new BigNumber(result);
        }
        this.endBlock = endBlock_call
        let getReserveReward_call = async (rewardId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getReserveReward',[this.wallet.utils.toString(rewardId)],options);
            return new BigNumber(result);
        }
        this.getReserveReward = getReserveReward_call
        let owners_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('owners',[param1],options);
            return result;
        }
        this.owners = owners_call
        let pendingRewardParams = (params: IPendingRewardParams) => [this.wallet.utils.toString(params.pid),params.user];
        let pendingReward_call = async (params: IPendingRewardParams, options?: TransactionOptions): Promise<{rewardToken:string[],availableNow:BigNumber[],toBeVested:BigNumber[],vestingStart:BigNumber[],vestingDuration:BigNumber[]}> => {
            let result = await this.call('pendingReward',pendingRewardParams(params),options);
            return {
                rewardToken: result.rewardToken,
                availableNow: result.availableNow.map(e=>new BigNumber(e)),
                toBeVested: result.toBeVested.map(e=>new BigNumber(e)),
                vestingStart: result.vestingStart.map(e=>new BigNumber(e)),
                vestingDuration: result.vestingDuration.map(e=>new BigNumber(e))
            };
        }
        this.pendingReward = pendingReward_call
        let poolIdx_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('poolIdx',[param1],options);
            return new BigNumber(result);
        }
        this.poolIdx = poolIdx_call
        let poolInfo_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{lpToken:string,allocPoint:BigNumber,endBlock:BigNumber,bonusMultiplier:BigNumber,bonusEndBlock:BigNumber,rewardDebt:BigNumber,lastRewardBlock:BigNumber,accRewardPerShare:BigNumber}> => {
            let result = await this.call('poolInfo',[this.wallet.utils.toString(param1)],options);
            return {
                lpToken: result.lpToken,
                allocPoint: new BigNumber(result.allocPoint),
                endBlock: new BigNumber(result.endBlock),
                bonusMultiplier: new BigNumber(result.bonusMultiplier),
                bonusEndBlock: new BigNumber(result.bonusEndBlock),
                rewardDebt: new BigNumber(result.rewardDebt),
                lastRewardBlock: new BigNumber(result.lastRewardBlock),
                accRewardPerShare: new BigNumber(result.accRewardPerShare)
            };
        }
        this.poolInfo = poolInfo_call
        let poolLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('poolLength',[],options);
            return new BigNumber(result);
        }
        this.poolLength = poolLength_call
        let rewardIdx_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('rewardIdx',[param1],options);
            return new BigNumber(result);
        }
        this.rewardIdx = rewardIdx_call
        let rewardInfo_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{rewardToken:string,multiplier:BigNumber,vestingRatio:BigNumber,vestingStartOnHarvest:boolean,vestingDuration:BigNumber,rewarded:BigNumber,reserve:BigNumber}> => {
            let result = await this.call('rewardInfo',[this.wallet.utils.toString(param1)],options);
            return {
                rewardToken: result.rewardToken,
                multiplier: new BigNumber(result.multiplier),
                vestingRatio: new BigNumber(result.vestingRatio),
                vestingStartOnHarvest: result.vestingStartOnHarvest,
                vestingDuration: new BigNumber(result.vestingDuration),
                rewarded: new BigNumber(result.rewarded),
                reserve: new BigNumber(result.reserve)
            };
        }
        this.rewardInfo = rewardInfo_call
        let rewardLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('rewardLength',[],options);
            return new BigNumber(result);
        }
        this.rewardLength = rewardLength_call
        let rewardPerBlock_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('rewardPerBlock',[],options);
            return new BigNumber(result);
        }
        this.rewardPerBlock = rewardPerBlock_call
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
        let userRewardsParams = (params: IUserRewardsParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2),params.param3];
        let userRewards_call = async (params: IUserRewardsParams, options?: TransactionOptions): Promise<{harvested:BigNumber,locked:BigNumber,lockedTill:BigNumber,lastUpdate:BigNumber}> => {
            let result = await this.call('userRewards',userRewardsParams(params),options);
            return {
                harvested: new BigNumber(result.harvested),
                locked: new BigNumber(result.locked),
                lockedTill: new BigNumber(result.lockedTill),
                lastUpdate: new BigNumber(result.lastUpdate)
            };
        }
        this.userRewards = userRewards_call
        let whitelisted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('whitelisted',[param1],options);
            return result;
        }
        this.whitelisted = whitelisted_call
        let addPoolParams = (params: IAddPoolParams) => [this.wallet.utils.toString(params.allocPoint),params.lpToken,this.wallet.utils.toString(params.endBlock),this.wallet.utils.toString(params.bonusMultiplier),this.wallet.utils.toString(params.bonusEndBlock),params.withUpdate];
        let addPool_send = async (params: IAddPoolParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addPool',addPoolParams(params),options);
            return result;
        }
        let addPool_call = async (params: IAddPoolParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addPool',addPoolParams(params),options);
            return;
        }
        this.addPool = Object.assign(addPool_send, {
            call:addPool_call
        });
        let addRewardsParams = (params: IAddRewardsParams) => [params.rewardToken,this.wallet.utils.toString(params.multiplier),this.wallet.utils.toString(params.vestingRatio),params.vestingStartOnHarvest,this.wallet.utils.toString(params.vestingDuration)];
        let addRewards_send = async (params: IAddRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addRewards',addRewardsParams(params),options);
            return result;
        }
        let addRewards_call = async (params: IAddRewardsParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addRewards',addRewardsParams(params),options);
            return;
        }
        this.addRewards = Object.assign(addRewards_send, {
            call:addRewards_call
        });
        let adminWithdrawReward_send = async (rewardId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('adminWithdrawReward',[this.wallet.utils.toString(rewardId)],options);
            return result;
        }
        let adminWithdrawReward_call = async (rewardId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('adminWithdrawReward',[this.wallet.utils.toString(rewardId)],options);
            return;
        }
        this.adminWithdrawReward = Object.assign(adminWithdrawReward_send, {
            call:adminWithdrawReward_call
        });
        let claimVestingParams = (params: IClaimVestingParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.rewardId),params.user];
        let claimVesting_send = async (params: IClaimVestingParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('claimVesting',claimVestingParams(params),options);
            return result;
        }
        let claimVesting_call = async (params: IClaimVestingParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('claimVesting',claimVestingParams(params),options);
            return;
        }
        this.claimVesting = Object.assign(claimVesting_send, {
            call:claimVesting_call
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
        let depositParams = (params: IDepositParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.amount)];
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
        let emergencyWithdraw_send = async (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('emergencyWithdraw',[this.wallet.utils.toString(pid)],options);
            return result;
        }
        let emergencyWithdraw_call = async (pid:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('emergencyWithdraw',[this.wallet.utils.toString(pid)],options);
            return;
        }
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call:emergencyWithdraw_call
        });
        let harvestParams = (params: IHarvestParams) => [this.wallet.utils.toString(params.pid),params.user];
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
        let massUpdatePools_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('massUpdatePools',[],options);
            return result;
        }
        let massUpdatePools_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('massUpdatePools',[],options);
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
        let resetPool_send = async (pid:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('resetPool',[this.wallet.utils.toString(pid)],options);
            return result;
        }
        let resetPool_call = async (pid:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('resetPool',[this.wallet.utils.toString(pid)],options);
            return;
        }
        this.resetPool = Object.assign(resetPool_send, {
            call:resetPool_call
        });
        let setAdmin_send = async (admin:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setAdmin',[admin],options);
            return result;
        }
        let setAdmin_call = async (admin:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setAdmin',[admin],options);
            return;
        }
        this.setAdmin = Object.assign(setAdmin_send, {
            call:setAdmin_call
        });
        let setPoolParams = (params: ISetPoolParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.allocPoint),this.wallet.utils.toString(params.endBlock),this.wallet.utils.toString(params.bonusMultiplier),this.wallet.utils.toString(params.bonusEndBlock),params.withUpdate];
        let setPool_send = async (params: ISetPoolParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setPool',setPoolParams(params),options);
            return result;
        }
        let setPool_call = async (params: ISetPoolParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setPool',setPoolParams(params),options);
            return;
        }
        this.setPool = Object.assign(setPool_send, {
            call:setPool_call
        });
        let setRewardsParams = (params: ISetRewardsParams) => [this.wallet.utils.toString(params.rewardId),this.wallet.utils.toString(params.multiplier),this.wallet.utils.toString(params.vestingRatio),this.wallet.utils.toString(params.vestingDuration)];
        let setRewards_send = async (params: ISetRewardsParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setRewards',setRewardsParams(params),options);
            return result;
        }
        let setRewards_call = async (params: ISetRewardsParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setRewards',setRewardsParams(params),options);
            return;
        }
        this.setRewards = Object.assign(setRewards_send, {
            call:setRewards_call
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
        let updateSelectedPools_send = async (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateSelectedPools',[this.wallet.utils.toString(pids)],options);
            return result;
        }
        let updateSelectedPools_call = async (pids:(number|BigNumber)[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateSelectedPools',[this.wallet.utils.toString(pids)],options);
            return;
        }
        this.updateSelectedPools = Object.assign(updateSelectedPools_send, {
            call:updateSelectedPools_call
        });
        let withdrawParams = (params: IWithdrawParams) => [this.wallet.utils.toString(params.pid),this.wallet.utils.toString(params.amount)];
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
    }
}
export module Farming{
    export interface AuthChangedEvent {account:string,auth:boolean,_event:Event}
    export interface DepositEvent {user:string,pid:BigNumber,amount:BigNumber,_event:Event}
    export interface EmergencyWithdrawEvent {user:string,pid:BigNumber,amount:BigNumber,_event:Event}
    export interface HarvestEvent {user:string,pid:BigNumber,rewardId:BigNumber,amount:BigNumber,locked:BigNumber,_event:Event}
    export interface LogPoolAdditionEvent {pid:BigNumber,allocPoint:BigNumber,lpToken:string,endBlock:BigNumber,bonusMultiplier:BigNumber,bonusEndBlock:BigNumber,_event:Event}
    export interface LogRewardAdditionEvent {rewardId:BigNumber,rewardToken:string,multiplier:BigNumber,vestingRatio:BigNumber,vestingStartOnHarvest:boolean,vestingDuration:BigNumber,_event:Event}
    export interface LogSetPoolEvent {pid:BigNumber,allocPoint:BigNumber,endBlock:BigNumber,bonusMultiplier:BigNumber,bonusEndBlock:BigNumber,_event:Event}
    export interface LogSetRewardEvent {rewardId:BigNumber,multiplier:BigNumber,vestingRatio:BigNumber,vestingDuration:BigNumber,_event:Event}
    export interface LogUpdatePoolEvent {pid:BigNumber,lastRewardBlock:BigNumber,lpSupply:BigNumber,accSushiPerShare:BigNumber,_event:Event}
    export interface VestedEvent {user:string,pid:BigNumber,rewardId:BigNumber,amount:BigNumber,_event:Event}
    export interface WithdrawEvent {user:string,pid:BigNumber,amount:BigNumber,_event:Event}
}