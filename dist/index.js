define("@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162000eae38038062000eae833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250508251620001b491506003906020850190620001e0565b508051620001ca906004906020840190620001e0565b50506005805460ff191660121790555062000285565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022357805160ff191683800117855562000253565b8280016001018555821562000253579182015b828111156200025357825182559160200191906001019062000236565b506200026192915062000265565b5090565b6200028291905b808211156200026157600081556001016200026c565b90565b610c1980620002956000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610287578063a9059cbb146102c0578063dd62ed3e146102f9576100c9565b8063395093511461021357806370a082311461024c57806395d89b411461027f576100c9565b806318160ddd116100b257806318160ddd1461019857806323b872dd146101b2578063313ce567146101f5576100c9565b806306fdde03146100ce578063095ea7b31461014b575b600080fd5b6100d6610334565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101105781810151838201526020016100f8565b50505050905090810190601f16801561013d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101846004803603604081101561016157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356103e8565b604080519115158252519081900360200190f35b6101a0610405565b60408051918252519081900360200190f35b610184600480360360608110156101c857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561040b565b6101fd6104b2565b6040805160ff9092168252519081900360200190f35b6101846004803603604081101561022957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104bb565b6101a06004803603602081101561026257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661051c565b6100d6610544565b6101846004803603604081101561029d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105c3565b610184600480360360408110156102d657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561063e565b6101a06004803603604081101561030f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610652565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b5050505050905090565b60006103fc6103f561068a565b848461068e565b50600192915050565b60025490565b60006104188484846107d5565b6104a88461042461068a565b6104a385604051806060016040528060288152602001610b4e6028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061046f61068a565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff6109b116565b61068e565b5060019392505050565b60055460ff1690565b60006103fc6104c861068a565b846104a385600160006104d961068a565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610a6216565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103de5780601f106103b3576101008083540402835291602001916103de565b60006103fc6105d061068a565b846104a385604051806060016040528060258152602001610bbf60259139600160006105fa61068a565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6109b116565b60006103fc61064b61068a565b84846107d5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166106fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610b9b6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610766576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610b066022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610841576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610b766025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610ae36023913960400191505060405180910390fd5b6108b8838383610add565b61090881604051806060016040528060268152602001610b286026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff6109b116565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220939093559084168152205461094a908263ffffffff610a6216565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610a5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a1f578181015183820152602001610a07565b50505050905090810190601f168015610a4c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610ad657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212208119ae2d79b8bef58cb7f7417d6876f845690019d5598e5a037fa80d6ff666f764736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts"], function (require, exports, eth_contract_1, ERC20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20 = void 0;
    class ERC20 extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC20_json_1.default.abi, ERC20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.decimals = decimals_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    exports.ERC20 = ERC20;
    ERC20._abi = ERC20_json_1.default.abi;
});
define("@scom/farming-contract/contracts/Farming.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/Farming.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "uint256", "name": "_rewardPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }, { "internalType": "address", "name": "_admin", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "auth", "type": "bool" }], "name": "AuthChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "rewardId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "locked", "type": "uint256" }], "name": "Harvest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "endBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "bonusMultiplier", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "bonusEndBlock", "type": "uint256" }], "name": "LogPoolAddition", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "rewardId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC20", "name": "rewardToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "multiplier", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "vestingRatio", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "vestingStartOnHarvest", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "vestingDuration", "type": "uint256" }], "name": "LogRewardAddition", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "bonusMultiplier", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "bonusEndBlock", "type": "uint256" }], "name": "LogSetPool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "rewardId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "multiplier", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "vestingRatio", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "vestingDuration", "type": "uint256" }], "name": "LogSetReward", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lpSupply", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accSushiPerShare", "type": "uint256" }], "name": "LogUpdatePool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "rewardId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Vested", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusMultiplier", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "addPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "_rewardToken", "type": "address" }, { "internalType": "uint256", "name": "_multiplier", "type": "uint256" }, { "internalType": "uint256", "name": "_vestingRatio", "type": "uint256" }, { "internalType": "bool", "name": "_vestingStartOnHarvest", "type": "bool" }, { "internalType": "uint256", "name": "_vestingDuration", "type": "uint256" }], "name": "addRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_rewardId", "type": "uint256" }], "name": "adminWithdrawReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardId", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "claimVesting", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardId", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "claimableVesting", "outputs": [{ "internalType": "uint256", "name": "release", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_rewardId", "type": "uint256" }], "name": "getReserveReward", "outputs": [{ "internalType": "uint256", "name": "reserve", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "harvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "owners", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingReward", "outputs": [{ "internalType": "contract IERC20[]", "name": "rewardToken", "type": "address[]" }, { "internalType": "uint256[]", "name": "availableNow", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "toBeVested", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "vestingStart", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "vestingDuration", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "poolIdx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "endBlock", "type": "uint256" }, { "internalType": "uint256", "name": "bonusMultiplier", "type": "uint256" }, { "internalType": "uint256", "name": "bonusEndBlock", "type": "uint256" }, { "internalType": "int256", "name": "rewardDebt", "type": "int256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "accRewardPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rely", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "resetPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "rewardIdx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "rewardInfo", "outputs": [{ "internalType": "contract IERC20", "name": "rewardToken", "type": "address" }, { "internalType": "uint256", "name": "multiplier", "type": "uint256" }, { "internalType": "uint256", "name": "vestingRatio", "type": "uint256" }, { "internalType": "bool", "name": "vestingStartOnHarvest", "type": "bool" }, { "internalType": "uint256", "name": "vestingDuration", "type": "uint256" }, { "internalType": "uint256", "name": "rewarded", "type": "uint256" }, { "internalType": "uint256", "name": "reserve", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rewardLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rewardPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_admin", "type": "address" }], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusMultiplier", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "setPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_rewardId", "type": "uint256" }, { "internalType": "uint256", "name": "_multiplier", "type": "uint256" }, { "internalType": "uint256", "name": "_vestingRatio", "type": "uint256" }, { "internalType": "uint256", "name": "_vestingDuration", "type": "uint256" }], "name": "setRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_who", "type": "address" }, { "internalType": "bool", "name": "_allowed", "type": "bool" }], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "pids", "type": "uint256[]" }], "name": "updateSelectedPools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "int256", "name": "rewardDebt", "type": "int256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userRewards", "outputs": [{ "internalType": "uint256", "name": "harvested", "type": "uint256" }, { "internalType": "uint256", "name": "locked", "type": "uint256" }, { "internalType": "uint256", "name": "lockedTill", "type": "uint256" }, { "internalType": "uint256", "name": "lastUpdate", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162004c8438038062004c84833981810160405260808110156200003757600080fd5b50805160208201516040830151606090930151919290916000620000636001600160e01b036200015116565b6001600160a01b03811660008181526020818152604091829020805460ff191660019081179091558251908152915193945091927f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d929181900390910190a2506001805543831015620000d4574392505b8183106200011d576040805162461bcd60e51b8152602060048201526011602482015270496e76616c696420656e6420626c6f636b60781b604482015290519081900360640190fd5b600293909355600b91909155600c55600d80546001600160a01b0319166001600160a01b0390921691909117905562000155565b3390565b614b1f80620001656000396000f3fe608060405234801561001057600080fd5b506004361061025c5760003560e01c806381a00f8311610145578063aaf0dd36116100bd578063d936547e1161008c578063f2fb39e511610071578063f2fb39e514610a10578063f851a44014610a3f578063fe8e640214610a705761025c565b8063d936547e146109ba578063e2bbb158146109ed5761025c565b8063aaf0dd361461090d578063af22eac214610940578063b7999fbe1461097f578063b95c5746146109b25761025c565b806393f1a40b1161011457806398969e82116100f957806398969e821461071c5780639c52a7f1146108bd578063a1970fa8146108f05761025c565b806393f1a40b1461067757806395edeaaa146106c95761025c565b806381a00f83146105585780638ae39cac146105c45780638d14e127146105cc578063915bacc6146106075761025c565b806348cd4cb1116101d8578063630b5ba1116101a7578063663d103a1161018c578063663d103a146104cb578063704b6c02146104e8578063802d64571461051b5761025c565b8063630b5ba11461049057806365fae35e146104985761025c565b806348cd4cb1146104315780634920541f1461043957806351eb05a6146104565780635312ea8e146104735761025c565b80631526fe271161022f57806318fccc761161021457806318fccc7614610388578063441a3e70146103c1578063447c3010146103e45761025c565b80631526fe271461030b57806317caf6f1146103805761025c565b8063022914a714610261578063042a6ecb146102a8578063081e3eda146102e9578063083c632314610303575b600080fd5b6102946004803603602081101561027757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ad5565b604080519115158252519081900360200190f35b6102e7600480360360608110156102be57600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16610aea565b005b6102f1610c20565b60408051918252519081900360200190f35b6102f1610c26565b6103286004803603602081101561032157600080fd5b5035610c2c565b6040805173ffffffffffffffffffffffffffffffffffffffff90991689526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b6102f1610c96565b6102e76004803603604081101561039e57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610c9c565b6102e7600480360360408110156103d757600080fd5b50803590602001356111b7565b6102e7600480360360a08110156103fa57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013590604081013590606081013515159060800135611428565b6102f161184a565b6102e76004803603602081101561044f57600080fd5b5035611850565b6102e76004803603602081101561046c57600080fd5b5035611981565b6102e76004803603602081101561048957600080fd5b5035611b6c565b6102e7611d38565b6102e7600480360360208110156104ae57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611d57565b6102f1600480360360208110156104e157600080fd5b5035611e7e565b6102e7600480360360208110156104fe57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612152565b6102e7600480360360c081101561053157600080fd5b5080359060208101359060408101359060608101359060808101359060a0013515156122bb565b6105756004803603602081101561056e57600080fd5b503561255e565b6040805173ffffffffffffffffffffffffffffffffffffffff90981688526020880196909652868601949094529115156060860152608085015260a084015260c0830152519081900360e00190f35b6102f16125c5565b6102e7600480360360408110156105e257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156125cb565b6102e76004803603602081101561061d57600080fd5b81019060208101813564010000000081111561063857600080fd5b82018360208201111561064a57600080fd5b8035906020019184602083028401116401000000008311171561066c57600080fd5b5090925090506126c1565b6106b06004803603604081101561068d57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166126f6565b6040805192835260208301919091528051918290030190f35b6102e7600480360360c08110156106df57600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff6020820135169060408101359060608101359060808101359060a00135151561271a565b6107556004803603604081101561073257600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16612bd2565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019060200280838360005b838110156107a557818101518382015260200161078d565b5050505090500186810385528a818151815260200191508051906020019060200280838360005b838110156107e45781810151838201526020016107cc565b50505050905001868103845289818151815260200191508051906020019060200280838360005b8381101561082357818101518382015260200161080b565b50505050905001868103835288818151815260200191508051906020019060200280838360005b8381101561086257818101518382015260200161084a565b50505050905001868103825287818151815260200191508051906020019060200280838360005b838110156108a1578181015183820152602001610889565b505050509050019a505050505050505050505060405180910390f35b6102e7600480360360208110156108d357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166132a3565b6102e76004803603602081101561090657600080fd5b5035613464565b6102f16004803603602081101561092357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16613681565b6102f16004803603606081101561095657600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16613693565b6102f16004803603602081101561099557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166136a9565b6102f16136bb565b610294600480360360208110156109d057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166136c1565b6102e760048036036040811015610a0357600080fd5b50803590602001356136d6565b6102e760048036036080811015610a2657600080fd5b5080359060208101359060408101359060600135613972565b610a47613b78565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610aaf60048036036060811015610a8657600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16613b94565b604080519485526020850193909352838301919091526060830152519081900360800190f35b60006020819052908152604090205460ff1681565b60026001541415610b5c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001556000610b6f84848443613bcc565b9050600081118015610bcb5750600073ffffffffffffffffffffffffffffffffffffffff1660058481548110610ba157fe5b600091825260209091206007909102015473ffffffffffffffffffffffffffffffffffffffff1614155b15610c1657610c16828260058681548110610be257fe5b600091825260209091206007909102015473ffffffffffffffffffffffffffffffffffffffff16919063ffffffff613e1216565b5050600180555050565b60035490565b600c5481565b60038181548110610c3957fe5b60009182526020909120600890910201805460018201546002830154600384015460048501546005860154600687015460079097015473ffffffffffffffffffffffffffffffffffffffff90961697509395929491939092909188565b600a5481565b60026001541415610d0e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155610d1c82611981565b600060038381548110610d2b57fe5b600091825260208083208684526007808352604080862073ffffffffffffffffffffffffffffffffffffffff891687529093529184206008909302019081015482549194509192918291610da591610da09164e8d4a5100091610d94919063ffffffff613ea416565b9063ffffffff613f2016565b613fa1565b9050610dbe83600101548261401290919063ffffffff16565b915060008213610dd157505050506111af565b600183018190556005840154610ded908363ffffffff61409116565b60058086019190915554905060005b818110156111a957600060058281548110610e1357fe5b600091825260208083208b8452600882526040808520878652835280852073ffffffffffffffffffffffffffffffffffffffff8d168652909252908320600792909202016001810154909350909190610e8990670de0b6b3a764000090610d9490610e7d8a614110565b9063ffffffff613ea416565b8254909150610e9e908263ffffffff61418516565b82556002830154600090819015610fbb57600c546003860154439091109060ff1615610ee757600081610ed15743610ed5565b600c545b9050610ee38e898f84613bcc565b9250505b610f0a670de0b6b3a7640000610d94886002015487613ea490919063ffffffff16565b6006870154909350610f22908463ffffffff61418516565b60068701556001850154610f3c908463ffffffff61418516565b6001860155600386015460ff168015610f53575080155b610f5f57600c54610f61565b435b600386018190556004870154610f7d919063ffffffff61418516565b6002860155610f92848463ffffffff6141f916565b93508015610fb957610fb6610fa98e898f43613bcc565b839063ffffffff61418516565b91505b505b6005850154610fd0908463ffffffff61418516565b6005860155845473ffffffffffffffffffffffffffffffffffffffff161561114057611002818463ffffffff61418516565b8554604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561107857600080fd5b505afa15801561108c573d6000803e3d6000fd5b505050506040513d60208110156110a257600080fd5b505190508082111561111557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e73756666696369656e74207265776172642062616c616e63650000000000604482015290519081900360640190fd5b855461113e9073ffffffffffffffffffffffffffffffffffffffff168d8463ffffffff613e1216565b505b858c8c73ffffffffffffffffffffffffffffffffffffffff167f7baefe19499ec89bdfeffd0fc7335c9d0ea87f8ca40bb82c956184634ba170fd8686604051808381526020018281526020019250505060405180910390a4505060019093019250610dfc915050565b50505050505b505060018055565b6002600154141561122957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001558061129a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616d6f756e74000000000000000000000000000000000000604482015290519081900360640190fd5b6112a382611981565b6000600383815481106112b257fe5b60009182526020808320868452600782526040808520338652909252922080546008909202909201925083111561134a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f77697468647261773a206e6f7420676f6f640000000000000000000000000000604482015290519081900360640190fd5b805461135c908463ffffffff6141f916565b8155600782015460009061138690610da09064e8d4a5100090610d9490889063ffffffff613ea416565b600183015490915061139e908263ffffffff61401216565b600183015560058301546113b8908263ffffffff61401216565b600584015582546113e69073ffffffffffffffffffffffffffffffffffffffff16338663ffffffff613e1216565b604080518581529051869133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505060018055505050565b600080611433614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166114c857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b6005541580611531575073ffffffffffffffffffffffffffffffffffffffff851660008181526006602052604090205460058054909190811061150757fe5b600091825260209091206007909102015473ffffffffffffffffffffffffffffffffffffffff1614155b61159c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f52657761726420746f6b656e20616c7265616479206578697374730000000000604482015290519081900360640190fd5b670de0b6b3a764000083111561161357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c69642076617374696e6720726174696f0000000000000000000000604482015290519081900360640190fd5b6005805473ffffffffffffffffffffffffffffffffffffffff8781166000818152600660209081526040808320869055805160e0810182528481529182018b81529082018a815289151560608401908152608084018a815260a0850186815260c086018781526001808c018d55978c905295517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06007909b029a8b0180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909a161790985592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db189015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db2880155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3870180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db486015592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db585015591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db690930192909255915490916117fb91906141f9565b6040805187815260208101879052851515818301526060810185905290517f7366c122b526a7cf409e316d7b5393ea96f50a0973d1df51e138107685cea5119181900360800190a35050505050565b600b5481565b60006003828154811061185f57fe5b60009182526020909120600890910201805490915073ffffffffffffffffffffffffffffffffffffffff166118f557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f2073756368206c70546f6b656e0000000000000000000000000000000000604482015290519081900360640190fd5b438160020154101561197d576001810154600a546119189163ffffffff6141f916565b600a556000600182018190556002820154600383015460048401546040805194855260208501939093528383019190915260608301525183917f8b9adcd9d91cc15e0faf8bcce699014d0ffbf026a2fb1a3ce6bb0e65a4f94cc1919081900360800190a25b5050565b60006003828154811061199057fe5b60009182526020909120600890910201805490915073ffffffffffffffffffffffffffffffffffffffff16611a2657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e76616c696420706f6f6c2049640000000000000000000000000000000000604482015290519081900360640190fd5b806006015443111561197d578054604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015611aa257600080fd5b505afa158015611ab6573d6000803e3d6000fd5b505050506040513d6020811015611acc57600080fd5b505190508015611b17576000611ae184614274565b9050611b10611aff83610d948464e8d4a5100063ffffffff613ea416565b60078501549063ffffffff61418516565b6007840155505b436006830181905560078301546040805192835260208301849052828101919091525184917fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d2919081900360600190a2505050565b60026001541415611bde57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600181905550600060038281548110611bf557fe5b60009182526020909120600890910201805490915073ffffffffffffffffffffffffffffffffffffffff16611c8b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e76616c696420706f6f6c2049640000000000000000000000000000000000604482015290519081900360640190fd5b60008281526007602090815260408083203384529091529020805460018201546005840154611cbf9163ffffffff61401216565b6005840155600080835560018301558254611cf79073ffffffffffffffffffffffffffffffffffffffff16338363ffffffff613e1216565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a35050600180555050565b60035460005b8181101561197d57611d4f81611981565b600101611d3e565b600080611d62614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16611df757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155825190815291517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b600554600090821115611ef257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52657761726420746f6b656e206e6f7420657869737473000000000000000000604482015290519081900360640190fd5b43600c5410611f6257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f43616d706169676e206e6f7420656e6465640000000000000000000000000000604482015290519081900360640190fd5b600354600580546000919085908110611f7757fe5b60009182526020822060079091020191505b8281101561211557600060038281548110611fa057fe5b6000918252602080832060089092029091018054604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051929550849373ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193919291829003018186803b15801561202457600080fd5b505afa158015612038573d6000803e3d6000fd5b505050506040513d602081101561204e57600080fd5b5051905080156120b157600783015461206d908263ffffffff613ea416565b915082600601544311156120b157600061208685614274565b90506120ad6120a08264e8d4a5100063ffffffff613ea416565b849063ffffffff61418516565b9250505b6121056120f88660010154610e7d6120f36120de64e8d4a51000896005015461436b90919063ffffffff16565b6120e788613fa1565b9063ffffffff61401216565b614110565b889063ffffffff61418516565b9650505050806001019050611f89565b5060068101546121489061213c856c0c9f2c9cd04674edea4000000063ffffffff613f2016565b9063ffffffff61418516565b925050505b919050565b60008061215d614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166121f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661227457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661726d696e673a207a65726f20616464726573730000000000000000000000604482015290519081900360640190fd5b600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806122c6614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661235b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b60035486106123cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e76616c696420706f6f6c2049640000000000000000000000000000000000604482015290519081900360640190fd5b6000600387815481106123da57fe5b906000526020600020906008020190506000600b5443116123fd57600b546123ff565b435b9050858110612459576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806149c86024913960400191505060405180910390fd5b600c548611156124b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180614a546021913960400191505060405180910390fd5b82156124c2576124c2611d38565b868260010154146124f5576124ea8761213c8460010154600a546141f990919063ffffffff16565b600a55600182018790555b600282018690556003820185905560048201849055604080518881526020810188905280820187905260608101869052905189917f8b9adcd9d91cc15e0faf8bcce699014d0ffbf026a2fb1a3ce6bb0e65a4f94cc1919081900360800190a25050505050505050565b6005818154811061256b57fe5b6000918252602090912060079091020180546001820154600283015460038401546004850154600586015460069096015473ffffffffffffffffffffffffffffffffffffffff90951696509294919360ff90911692919087565b60025481565b6000806125d6614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661266b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b8060005b818110156126f0576126e88484838181106126dc57fe5b90506020020135611981565b6001016126c5565b50505050565b60076020908152600092835260408084209091529082529020805460019091015482565b600080612725614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166127ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b80156127c8576127c8611d38565b73ffffffffffffffffffffffffffffffffffffffff851661284a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e76616c6964204c5020546f6b656e00000000000000000000000000000000604482015290519081900360640190fd5b60035415806128b3575073ffffffffffffffffffffffffffffffffffffffff851660008181526004602052604090205460038054909190811061288957fe5b600091825260209091206008909102015473ffffffffffffffffffffffffffffffffffffffff1614155b61291e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4c5020546f6b656e20616c726561647920657869737473000000000000000000604482015290519081900360640190fd5b6000600b54431161293157600b54612933565b435b905084811061298d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806149c86024913960400191505060405180910390fd5b600c548511156129e8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180614a546021913960400191505060405180910390fd5b8615612a0557600a54612a01908863ffffffff61418516565b600a555b600380549050600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060036040518061010001604052808873ffffffffffffffffffffffffffffffffffffffff168152602001898152602001878152602001868152602001858152602001600081526020018381526020016000815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e0820151816007015550508573ffffffffffffffffffffffffffffffffffffffff166001600380549050037f473f3d41fcbf3d07a5d4024b31e390168266fbaba4e04209fee612b485825ab1898888886040518085815260200184815260200183815260200182815260200194505050505060405180910390a350505050505050565b600082815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281206003805460609384938493849384939182918b908110612c1d57fe5b60009182526020909120600890910201805490915073ffffffffffffffffffffffffffffffffffffffff16612cb357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f496e76616c696420706f6f6c2049640000000000000000000000000000000000604482015290519081900360640190fd5b60078101546006820154431115612d97578154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015612d3457600080fd5b505afa158015612d48573d6000803e3d6000fd5b505050506040513d6020811015612d5e57600080fd5b505190508015612d95576000612d738d614274565b9050612d916120a083610d948464e8d4a5100063ffffffff613ea416565b9250505b505b612dc56120f385600101546120e7610da064e8d4a51000610d94878b60000154613ea490919063ffffffff16565b60055490935091505067ffffffffffffffff81118015612de457600080fd5b50604051908082528060200260200182016040528015612e0e578160200160208202803683370190505b5060055490975067ffffffffffffffff81118015612e2b57600080fd5b50604051908082528060200260200182016040528015612e55578160200160208202803683370190505b5060055490965067ffffffffffffffff81118015612e7257600080fd5b50604051908082528060200260200182016040528015612e9c578160200160208202803683370190505b5060055490955067ffffffffffffffff81118015612eb957600080fd5b50604051908082528060200260200182016040528015612ee3578160200160208202803683370190505b5060055490945067ffffffffffffffff81118015612f0057600080fd5b50604051908082528060200260200182016040528015612f2a578160200160208202803683370190505b50925060005b60055481101561329657600060058281548110612f4957fe5b6000918252602090912060079091020180548a5191925073ffffffffffffffffffffffffffffffffffffffff16908a9084908110612f8357fe5b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152821561328d576000612fd3670de0b6b3a7640000610d94846001015487613ea490919063ffffffff16565b6002830154909150156131c25760008c8152600860209081526040808320868452825280832073ffffffffffffffffffffffffffffffffffffffff8f1684529091529020600101546004830154600c544391613035919063ffffffff61418516565b116130515761304a828263ffffffff61418516565b91506131c0565b600383015460009060ff16156130945761307f8e868f43600c5410613076574361307a565b600c545b614482565b9050613091828263ffffffff6141f916565b91505b60006130d1670de0b6b3a7640000610d946130c48860020154670de0b6b3a76400006141f990919063ffffffff16565b879063ffffffff613ea416565b905060006130e98461213c878563ffffffff6141f916565b9050600043600c541015613127576131248760040154610d94613117600c54436141f990919063ffffffff16565b859063ffffffff613ea416565b90505b613137828263ffffffff6141f916565b8d898151811061314357fe5b6020908102919091010152600387015460ff1680156131635750600c5443105b61316f57600c54613171565b435b8c898151811061317d57fe5b60200260200101818152505086600401548b898151811061319a57fe5b60209081029190910101526131b98161213c868663ffffffff61418516565b9550505050505b505b8154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561323257600080fd5b505afa158015613246573d6000803e3d6000fd5b505050506040513d602081101561325c57600080fd5b5051905080821061326d578061326f565b815b9050808a858151811061327e57fe5b60200260200101818152505050505b50600101612f30565b5050509295509295909350565b6000806132ae614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661334357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b61334b614270565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156133e557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f417574683a2043616e6e6f742073656c662064656e7900000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526020818152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558051928352517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b600260015414156134d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260015560006134e682611e7e565b90506000600583815481106134f757fe5b6000918252602080832060079092029091018054604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192955073ffffffffffffffffffffffffffffffffffffffff909116926370a0823192602480840193829003018186803b15801561357657600080fd5b505afa15801561358a573d6000803e3d6000fd5b505050506040513d60208110156135a057600080fd5b5051905082811161361257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b815473ffffffffffffffffffffffffffffffffffffffff1615610c1657600d54610c169073ffffffffffffffffffffffffffffffffffffffff1661365c838663ffffffff6141f916565b845473ffffffffffffffffffffffffffffffffffffffff16919063ffffffff613e1216565b60066020526000908152604090205481565b60006136a184848443614482565b949350505050565b60046020526000908152604090205481565b60055490565b60096020526000908152604090205460ff1681565b6002600154141561374857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155806137b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616d6f756e74000000000000000000000000000000000000604482015290519081900360640190fd5b323314806137d657503360009081526009602052604090205460ff165b6137df57600080fd5b6137e882611981565b6000600383815481106137f757fe5b6000918252602080832086845260078252604080852033865290925292206002600890920290920190810154909250431061389357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616d706169676e20616c726561647920656e6465643b000000000000000000604482015290519081900360640190fd5b81546138bd9073ffffffffffffffffffffffffffffffffffffffff1633308663ffffffff6145d416565b80546138cf908463ffffffff61418516565b815560078201546000906138f990610da09064e8d4a5100090610d9490889063ffffffff613ea416565b6001830154909150613911908263ffffffff61409116565b6001830155600583015461392b908263ffffffff61409116565b6005840155604080518581529051869133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a3505060018055505050565b60008061397d614270565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16613a1257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b600554841115613a8357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52657761726420746f6b656e206e6f7420657869737473000000000000000000604482015290519081900360640190fd5b600060058581548110613a9257fe5b90600052602060002090600702019050670de0b6b3a7640000831115613b1957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c69642076617374696e6720726174696f0000000000000000000000604482015290519081900360640190fd5b6001810184905560028101839055600481018290556040805185815260208101859052808201849052905186917f5d7de431daa650bd55a6fa31b7f6f1ed9af1b7df47376c1dcbdeb18a4c2e9d4b919081900360600190a25050505050565b600d5473ffffffffffffffffffffffffffffffffffffffff1681565b600860209081526000938452604080852082529284528284209052825290208054600182015460028301546003909301549192909184565b6000613bda85858585614482565b905080156136a157600060058581548110613bf157fe5b600091825260208083208984526008825260408085208a8652835280852073ffffffffffffffffffffffffffffffffffffffff8a168652909252922060038101869055600181015460079092029092019250613c53908463ffffffff6141f916565b6001820155815473ffffffffffffffffffffffffffffffffffffffff1615613d84578154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015613ce557600080fd5b505afa158015613cf9573d6000803e3d6000fd5b505050506040513d6020811015613d0f57600080fd5b5051905080841115613d8257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e73756666696369656e74207265776172642062616c616e63650000000000604482015290519081900360640190fd5b505b6006820154613d99908463ffffffff6141f916565b60068301556005820154613db3908463ffffffff61418516565b60058301556040805184815290518791899173ffffffffffffffffffffffffffffffffffffffff8916917f3166bd2b07f10b6a010d45cdaf2b18484b24aafe1f62198ac7d94b13119f1f19919081900360200190a45050949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052613e9f908490614665565b505050565b600082613eb357506000613f1a565b82820282848281613ec057fe5b0414613f17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180614a336021913960400191505060405180910390fd5b90505b92915050565b6000808211613f9057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381613f9957fe5b049392505050565b80600081121561214d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b60008183038183128015906140275750838113155b8061403c575060008312801561403c57508381135b613f17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180614a9c6024913960400191505060405180910390fd5b60008282018183128015906140a65750838112155b806140bb57506000831280156140bb57508381125b613f17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806149ec6021913960400191505060405180910390fd5b60008082121561418157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b5090565b600082820183811015613f1757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008282111561426a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b6000806003838154811061428457fe5b906000526020600020906008020190506000816006015490506000438360020154106142b057436142b6565b82600201545b60048401549091506000818411614322578183116142ee5760038501546142e790610e7d858763ffffffff6141f916565b905061431d565b61431a614301848463ffffffff6141f916565b600387015461213c90610e7d868963ffffffff6141f916565b90505b61433d565b8284101561433d5761433a838563ffffffff6141f916565b90505b614360600a54610d948760010154610e7d60025486613ea490919063ffffffff16565b979650505050505050565b60008261437a57506000613f1a565b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156143c857507f800000000000000000000000000000000000000000000000000000000000000082145b1561441e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180614a756027913960400191505060405180910390fd5b8282028284828161442b57fe5b0514613f17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180614a756027913960400191505060405180910390fd5b6000806005858154811061449257fe5b90600052602060002090600702019050600081600201541161451557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f2076657374696e6720737065636966696564000000000000000000000000604482015290519081900360640190fd5b6000868152600860209081526040808320888452825280832073ffffffffffffffffffffffffffffffffffffffff8816845290915290206002820154158015906145625750838160030154105b156145ca578060020154841061457e57806001015492506145ca565b6145c761459c826003015483600201546141f990919063ffffffff16565b610d946145b68460030154886141f990919063ffffffff16565b60018501549063ffffffff613ea416565b92505b5050949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526126f09085905b60606146c7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661473d9092919063ffffffff16565b805190915015613e9f578080602001905160208110156146e657600080fd5b5051613e9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180614ac0602a913960400191505060405180910390fd5b60606136a18484600085614753565b9392505050565b6060824710156147ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180614a0d6026913960400191505060405180910390fd5b6147b785614903565b61482257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061488c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161484f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146148ee576040519150601f19603f3d011682016040523d82523d6000602084013e6148f3565b606091505b50915091506145c7828286614909565b3b151590565b6060831561491857508161474c565b8251156149285782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561498c578181015183820152602001614974565b50505050905090810190601f1680156149b95780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe506f6f6c20656e6420626c6f636b206265666f72652063616d706169676e2073746172745369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77506f6f6c20656e6420626c6f636b2061667465722063616d706169676e20656e645369676e6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220aa6eb8f71b0b7b3dd2b504c92243bfaa945e466c23a5df75092754e9f59177a164736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/Farming.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/Farming.json.ts"], function (require, exports, eth_contract_2, Farming_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Farming = void 0;
    class Farming extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, Farming_json_1.default.abi, Farming_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([this.wallet.utils.toString(params.rewardPerBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.endBlock), params.admin], options);
        }
        parseAuthChangedEvent(receipt) {
            return this.parseEvents(receipt, "AuthChanged").map(e => this.decodeAuthChangedEvent(e));
        }
        decodeAuthChangedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                auth: result.auth,
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_2.BigNumber(result.pid),
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        parseEmergencyWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
        }
        decodeEmergencyWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_2.BigNumber(result.pid),
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        parseHarvestEvent(receipt) {
            return this.parseEvents(receipt, "Harvest").map(e => this.decodeHarvestEvent(e));
        }
        decodeHarvestEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_2.BigNumber(result.pid),
                rewardId: new eth_contract_2.BigNumber(result.rewardId),
                amount: new eth_contract_2.BigNumber(result.amount),
                locked: new eth_contract_2.BigNumber(result.locked),
                _event: event
            };
        }
        parseLogPoolAdditionEvent(receipt) {
            return this.parseEvents(receipt, "LogPoolAddition").map(e => this.decodeLogPoolAdditionEvent(e));
        }
        decodeLogPoolAdditionEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_2.BigNumber(result.pid),
                allocPoint: new eth_contract_2.BigNumber(result.allocPoint),
                lpToken: result.lpToken,
                endBlock: new eth_contract_2.BigNumber(result.endBlock),
                bonusMultiplier: new eth_contract_2.BigNumber(result.bonusMultiplier),
                bonusEndBlock: new eth_contract_2.BigNumber(result.bonusEndBlock),
                _event: event
            };
        }
        parseLogRewardAdditionEvent(receipt) {
            return this.parseEvents(receipt, "LogRewardAddition").map(e => this.decodeLogRewardAdditionEvent(e));
        }
        decodeLogRewardAdditionEvent(event) {
            let result = event.data;
            return {
                rewardId: new eth_contract_2.BigNumber(result.rewardId),
                rewardToken: result.rewardToken,
                multiplier: new eth_contract_2.BigNumber(result.multiplier),
                vestingRatio: new eth_contract_2.BigNumber(result.vestingRatio),
                vestingStartOnHarvest: result.vestingStartOnHarvest,
                vestingDuration: new eth_contract_2.BigNumber(result.vestingDuration),
                _event: event
            };
        }
        parseLogSetPoolEvent(receipt) {
            return this.parseEvents(receipt, "LogSetPool").map(e => this.decodeLogSetPoolEvent(e));
        }
        decodeLogSetPoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_2.BigNumber(result.pid),
                allocPoint: new eth_contract_2.BigNumber(result.allocPoint),
                endBlock: new eth_contract_2.BigNumber(result.endBlock),
                bonusMultiplier: new eth_contract_2.BigNumber(result.bonusMultiplier),
                bonusEndBlock: new eth_contract_2.BigNumber(result.bonusEndBlock),
                _event: event
            };
        }
        parseLogSetRewardEvent(receipt) {
            return this.parseEvents(receipt, "LogSetReward").map(e => this.decodeLogSetRewardEvent(e));
        }
        decodeLogSetRewardEvent(event) {
            let result = event.data;
            return {
                rewardId: new eth_contract_2.BigNumber(result.rewardId),
                multiplier: new eth_contract_2.BigNumber(result.multiplier),
                vestingRatio: new eth_contract_2.BigNumber(result.vestingRatio),
                vestingDuration: new eth_contract_2.BigNumber(result.vestingDuration),
                _event: event
            };
        }
        parseLogUpdatePoolEvent(receipt) {
            return this.parseEvents(receipt, "LogUpdatePool").map(e => this.decodeLogUpdatePoolEvent(e));
        }
        decodeLogUpdatePoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_2.BigNumber(result.pid),
                lastRewardBlock: new eth_contract_2.BigNumber(result.lastRewardBlock),
                lpSupply: new eth_contract_2.BigNumber(result.lpSupply),
                accSushiPerShare: new eth_contract_2.BigNumber(result.accSushiPerShare),
                _event: event
            };
        }
        parseVestedEvent(receipt) {
            return this.parseEvents(receipt, "Vested").map(e => this.decodeVestedEvent(e));
        }
        decodeVestedEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_2.BigNumber(result.pid),
                rewardId: new eth_contract_2.BigNumber(result.rewardId),
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        parseWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
        }
        decodeWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_2.BigNumber(result.pid),
                amount: new eth_contract_2.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let admin_call = async (options) => {
                let result = await this.call('admin', [], options);
                return result;
            };
            this.admin = admin_call;
            let claimableVestingParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.rewardId), params.user];
            let claimableVesting_call = async (params, options) => {
                let result = await this.call('claimableVesting', claimableVestingParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.claimableVesting = claimableVesting_call;
            let endBlock_call = async (options) => {
                let result = await this.call('endBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.endBlock = endBlock_call;
            let getReserveReward_call = async (rewardId, options) => {
                let result = await this.call('getReserveReward', [this.wallet.utils.toString(rewardId)], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.getReserveReward = getReserveReward_call;
            let owners_call = async (param1, options) => {
                let result = await this.call('owners', [param1], options);
                return result;
            };
            this.owners = owners_call;
            let pendingRewardParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
            let pendingReward_call = async (params, options) => {
                let result = await this.call('pendingReward', pendingRewardParams(params), options);
                return {
                    rewardToken: result.rewardToken,
                    availableNow: result.availableNow.map(e => new eth_contract_2.BigNumber(e)),
                    toBeVested: result.toBeVested.map(e => new eth_contract_2.BigNumber(e)),
                    vestingStart: result.vestingStart.map(e => new eth_contract_2.BigNumber(e)),
                    vestingDuration: result.vestingDuration.map(e => new eth_contract_2.BigNumber(e))
                };
            };
            this.pendingReward = pendingReward_call;
            let poolIdx_call = async (param1, options) => {
                let result = await this.call('poolIdx', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.poolIdx = poolIdx_call;
            let poolInfo_call = async (param1, options) => {
                let result = await this.call('poolInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    lpToken: result.lpToken,
                    allocPoint: new eth_contract_2.BigNumber(result.allocPoint),
                    endBlock: new eth_contract_2.BigNumber(result.endBlock),
                    bonusMultiplier: new eth_contract_2.BigNumber(result.bonusMultiplier),
                    bonusEndBlock: new eth_contract_2.BigNumber(result.bonusEndBlock),
                    rewardDebt: new eth_contract_2.BigNumber(result.rewardDebt),
                    lastRewardBlock: new eth_contract_2.BigNumber(result.lastRewardBlock),
                    accRewardPerShare: new eth_contract_2.BigNumber(result.accRewardPerShare)
                };
            };
            this.poolInfo = poolInfo_call;
            let poolLength_call = async (options) => {
                let result = await this.call('poolLength', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.poolLength = poolLength_call;
            let rewardIdx_call = async (param1, options) => {
                let result = await this.call('rewardIdx', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.rewardIdx = rewardIdx_call;
            let rewardInfo_call = async (param1, options) => {
                let result = await this.call('rewardInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    rewardToken: result.rewardToken,
                    multiplier: new eth_contract_2.BigNumber(result.multiplier),
                    vestingRatio: new eth_contract_2.BigNumber(result.vestingRatio),
                    vestingStartOnHarvest: result.vestingStartOnHarvest,
                    vestingDuration: new eth_contract_2.BigNumber(result.vestingDuration),
                    rewarded: new eth_contract_2.BigNumber(result.rewarded),
                    reserve: new eth_contract_2.BigNumber(result.reserve)
                };
            };
            this.rewardInfo = rewardInfo_call;
            let rewardLength_call = async (options) => {
                let result = await this.call('rewardLength', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.rewardLength = rewardLength_call;
            let rewardPerBlock_call = async (options) => {
                let result = await this.call('rewardPerBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.rewardPerBlock = rewardPerBlock_call;
            let startBlock_call = async (options) => {
                let result = await this.call('startBlock', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.startBlock = startBlock_call;
            let totalAllocPoint_call = async (options) => {
                let result = await this.call('totalAllocPoint', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.totalAllocPoint = totalAllocPoint_call;
            let userInfoParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let userInfo_call = async (params, options) => {
                let result = await this.call('userInfo', userInfoParams(params), options);
                return {
                    amount: new eth_contract_2.BigNumber(result.amount),
                    rewardDebt: new eth_contract_2.BigNumber(result.rewardDebt)
                };
            };
            this.userInfo = userInfo_call;
            let userRewardsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2), params.param3];
            let userRewards_call = async (params, options) => {
                let result = await this.call('userRewards', userRewardsParams(params), options);
                return {
                    harvested: new eth_contract_2.BigNumber(result.harvested),
                    locked: new eth_contract_2.BigNumber(result.locked),
                    lockedTill: new eth_contract_2.BigNumber(result.lockedTill),
                    lastUpdate: new eth_contract_2.BigNumber(result.lastUpdate)
                };
            };
            this.userRewards = userRewards_call;
            let whitelisted_call = async (param1, options) => {
                let result = await this.call('whitelisted', [param1], options);
                return result;
            };
            this.whitelisted = whitelisted_call;
            let addPoolParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.lpToken, this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusMultiplier), this.wallet.utils.toString(params.bonusEndBlock), params.withUpdate];
            let addPool_send = async (params, options) => {
                let result = await this.send('addPool', addPoolParams(params), options);
                return result;
            };
            let addPool_call = async (params, options) => {
                let result = await this.call('addPool', addPoolParams(params), options);
                return;
            };
            this.addPool = Object.assign(addPool_send, {
                call: addPool_call
            });
            let addRewardsParams = (params) => [params.rewardToken, this.wallet.utils.toString(params.multiplier), this.wallet.utils.toString(params.vestingRatio), params.vestingStartOnHarvest, this.wallet.utils.toString(params.vestingDuration)];
            let addRewards_send = async (params, options) => {
                let result = await this.send('addRewards', addRewardsParams(params), options);
                return result;
            };
            let addRewards_call = async (params, options) => {
                let result = await this.call('addRewards', addRewardsParams(params), options);
                return;
            };
            this.addRewards = Object.assign(addRewards_send, {
                call: addRewards_call
            });
            let adminWithdrawReward_send = async (rewardId, options) => {
                let result = await this.send('adminWithdrawReward', [this.wallet.utils.toString(rewardId)], options);
                return result;
            };
            let adminWithdrawReward_call = async (rewardId, options) => {
                let result = await this.call('adminWithdrawReward', [this.wallet.utils.toString(rewardId)], options);
                return;
            };
            this.adminWithdrawReward = Object.assign(adminWithdrawReward_send, {
                call: adminWithdrawReward_call
            });
            let claimVestingParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.rewardId), params.user];
            let claimVesting_send = async (params, options) => {
                let result = await this.send('claimVesting', claimVestingParams(params), options);
                return result;
            };
            let claimVesting_call = async (params, options) => {
                let result = await this.call('claimVesting', claimVestingParams(params), options);
                return;
            };
            this.claimVesting = Object.assign(claimVesting_send, {
                call: claimVesting_call
            });
            let deny_send = async (account, options) => {
                let result = await this.send('deny', [account], options);
                return result;
            };
            let deny_call = async (account, options) => {
                let result = await this.call('deny', [account], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let depositParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
            let deposit_send = async (params, options) => {
                let result = await this.send('deposit', depositParams(params), options);
                return result;
            };
            let deposit_call = async (params, options) => {
                let result = await this.call('deposit', depositParams(params), options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
            let emergencyWithdraw_send = async (pid, options) => {
                let result = await this.send('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let emergencyWithdraw_call = async (pid, options) => {
                let result = await this.call('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
                call: emergencyWithdraw_call
            });
            let harvestParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
            let harvest_send = async (params, options) => {
                let result = await this.send('harvest', harvestParams(params), options);
                return result;
            };
            let harvest_call = async (params, options) => {
                let result = await this.call('harvest', harvestParams(params), options);
                return;
            };
            this.harvest = Object.assign(harvest_send, {
                call: harvest_call
            });
            let massUpdatePools_send = async (options) => {
                let result = await this.send('massUpdatePools', [], options);
                return result;
            };
            let massUpdatePools_call = async (options) => {
                let result = await this.call('massUpdatePools', [], options);
                return;
            };
            this.massUpdatePools = Object.assign(massUpdatePools_send, {
                call: massUpdatePools_call
            });
            let rely_send = async (account, options) => {
                let result = await this.send('rely', [account], options);
                return result;
            };
            let rely_call = async (account, options) => {
                let result = await this.call('rely', [account], options);
                return;
            };
            this.rely = Object.assign(rely_send, {
                call: rely_call
            });
            let resetPool_send = async (pid, options) => {
                let result = await this.send('resetPool', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let resetPool_call = async (pid, options) => {
                let result = await this.call('resetPool', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.resetPool = Object.assign(resetPool_send, {
                call: resetPool_call
            });
            let setAdmin_send = async (admin, options) => {
                let result = await this.send('setAdmin', [admin], options);
                return result;
            };
            let setAdmin_call = async (admin, options) => {
                let result = await this.call('setAdmin', [admin], options);
                return;
            };
            this.setAdmin = Object.assign(setAdmin_send, {
                call: setAdmin_call
            });
            let setPoolParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.allocPoint), this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusMultiplier), this.wallet.utils.toString(params.bonusEndBlock), params.withUpdate];
            let setPool_send = async (params, options) => {
                let result = await this.send('setPool', setPoolParams(params), options);
                return result;
            };
            let setPool_call = async (params, options) => {
                let result = await this.call('setPool', setPoolParams(params), options);
                return;
            };
            this.setPool = Object.assign(setPool_send, {
                call: setPool_call
            });
            let setRewardsParams = (params) => [this.wallet.utils.toString(params.rewardId), this.wallet.utils.toString(params.multiplier), this.wallet.utils.toString(params.vestingRatio), this.wallet.utils.toString(params.vestingDuration)];
            let setRewards_send = async (params, options) => {
                let result = await this.send('setRewards', setRewardsParams(params), options);
                return result;
            };
            let setRewards_call = async (params, options) => {
                let result = await this.call('setRewards', setRewardsParams(params), options);
                return;
            };
            this.setRewards = Object.assign(setRewards_send, {
                call: setRewards_call
            });
            let setWhiteListParams = (params) => [params.who, params.allowed];
            let setWhiteList_send = async (params, options) => {
                let result = await this.send('setWhiteList', setWhiteListParams(params), options);
                return result;
            };
            let setWhiteList_call = async (params, options) => {
                let result = await this.call('setWhiteList', setWhiteListParams(params), options);
                return;
            };
            this.setWhiteList = Object.assign(setWhiteList_send, {
                call: setWhiteList_call
            });
            let updatePool_send = async (pid, options) => {
                let result = await this.send('updatePool', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let updatePool_call = async (pid, options) => {
                let result = await this.call('updatePool', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.updatePool = Object.assign(updatePool_send, {
                call: updatePool_call
            });
            let updateSelectedPools_send = async (pids, options) => {
                let result = await this.send('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
                return result;
            };
            let updateSelectedPools_call = async (pids, options) => {
                let result = await this.call('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
                return;
            };
            this.updateSelectedPools = Object.assign(updateSelectedPools_send, {
                call: updateSelectedPools_call
            });
            let withdrawParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
            let withdraw_send = async (params, options) => {
                let result = await this.send('withdraw', withdrawParams(params), options);
                return result;
            };
            let withdraw_call = async (params, options) => {
                let result = await this.call('withdraw', withdrawParams(params), options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
        }
    }
    exports.Farming = Farming;
    Farming._abi = Farming_json_1.default.abi;
});
define("@scom/farming-contract/contracts/MasterChef.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/MasterChef.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IRewardToken[]", "name": "_rewardToken", "type": "address[]" }, { "internalType": "uint256", "name": "_rewardsPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "auth", "type": "bool" }], "name": "AuthChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Harvest", "type": "event" },
            { "anonymous": false, "inputs": [], "name": "LogInit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC20", "name": "lpToken", "type": "address" }], "name": "LogPoolAddition", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }], "name": "LogSetPool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lpSupply", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accSushiPerShare", "type": "uint256" }], "name": "LogUpdatePool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" },
            { "inputs": [], "name": "BONUS_MULTIPLIER", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "bonusEndBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "harvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "owners", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "contract IERC20", "name": "lpToken", "type": "address" }, { "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "accRewardsPerShare", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rely", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "rewardToken", "outputs": [{ "internalType": "contract IRewardToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rewardTokenLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rewardsPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }, { "internalType": "bool", "name": "_withUpdate", "type": "bool" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_who", "type": "address" }, { "internalType": "bool", "name": "_allowed", "type": "bool" }], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalPendingRewards", "outputs": [{ "internalType": "uint256", "name": "pendingRewards", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "pids", "type": "uint256[]" }], "name": "updateSelectedPools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162002bc038038062002bc0833981810160405260a08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b505050509190910160409081526020830151908301516060840151608090940151919550935090506000620000f86001600160e01b036200041116565b6001600160a01b03811660008181526020818152604091829020805460ff191660019081179091558251908152915193945091927f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d929181900390910190a25060018055818310620001a5576040805162461bcd60e51b8152602060048201526011602482015270496e76616c696420656e6420626c6f636b60781b604482015290519081900360640190fd5b808311158015620001b65750818111155b62000208576040805162461bcd60e51b815260206004820152601760248201527f496e76616c696420626f6e757320656e6420626c6f636b000000000000000000604482015290519081900360640190fd5b600062000275856200024d6200022d85876200041660201b62001c391790919060201c565b6200026160016200024d8a896200041660201b62001c391790919060201c565b6200047960201b62001cb01790919060201c565b620004de60201b62001d2a1790919060201c565b865190915060005b81811015620003df578781815181106200029357fe5b60200260200101516001600160a01b031663355274ea6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002d457600080fd5b505afa158015620002e9573d6000803e3d6000fd5b505050506040513d60208110156200030057600080fd5b505188518990839081106200031157fe5b60200260200101516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200035257600080fd5b505afa15801562000367573d6000803e3d6000fd5b505050506040513d60208110156200037e57600080fd5b505184011115620003d6576040805162461bcd60e51b815260206004820152601860248201527f52657761726420746f6b656e2063617020746f6f206c6f770000000000000000604482015290519081900360640190fd5b6001016200027d565b508651620003f59060039060208a019062000539565b505050600593909355600492909255600955600a5550620005ca565b335b90565b6000828211156200046e576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b508082035b92915050565b6000826200048a5750600062000473565b828202828482816200049857fe5b0414620004d75760405162461bcd60e51b815260040180806020018281038252602181526020018062002b9f6021913960400191505060405180910390fd5b9392505050565b600082820183811015620004d7576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b82805482825590600052602060002090810192821562000591579160200282015b828111156200059157825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200055a565b506200059f929150620005a3565b5090565b6200041391905b808211156200059f5780546001600160a01b0319168155600101620005aa565b6125c580620005da6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063630b5ba1116101045780638dbb1e3a116100a2578063d18df53c11610071578063d18df53c146105a7578063d936547e146105e0578063e2bbb15814610613578063ec1371f214610636576101cf565b80638dbb1e3a1461048f578063915bacc6146104b257806393f1a40b146105225780639c52a7f114610574576101cf565b80638456cb59116100de5780638456cb591461043c578063857cb94a146104445780638aa285501461044c5780638d14e12714610454576101cf565b8063630b5ba1146103d657806364482f79146103de57806365fae35e14610409576101cf565b80631eaaa04511610171578063509b6c3f1161014b578063509b6c3f1461034e57806351eb05a6146103945780635312ea8e146103b15780635eeb6710146103ce576101cf565b80631eaaa045146102e2578063441a3e701461032357806348cd4cb114610346576101cf565b80631526fe27116101ad5780631526fe271461023d57806317caf6f11461029757806318fccc761461029f5780631aed6553146102da576101cf565b8063022914a7146101d4578063081e3eda1461021b578063083c632314610235575b600080fd5b610207600480360360208110156101ea57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661063e565b604080519115158252519081900360200190f35b610223610653565b60408051918252519081900360200190f35b610223610659565b61025a6004803603602081101561025357600080fd5b503561065f565b6040805173ffffffffffffffffffffffffffffffffffffffff90951685526020850193909352838301919091526060830152519081900360800190f35b6102236106ad565b6102d8600480360360408110156102b557600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166106b3565b005b610223610805565b6102d8600480360360608110156102f857600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff6020820135169060400135151561080b565b6102d86004803603604081101561033957600080fd5b5080359060200135610a5f565b610223610c8c565b61036b6004803603602081101561036457600080fd5b5035610c92565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102d8600480360360208110156103aa57600080fd5b5035610cc6565b6102d8600480360360208110156103c757600080fd5b5035610f38565b610223611088565b6102d861108e565b6102d8600480360360608110156103f457600080fd5b508035906020810135906040013515156110b1565b6102d86004803603602081101561041f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611208565b6102d861132f565b6102236113d5565b6102236113db565b6102d86004803603604081101561046a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156113e0565b610223600480360360408110156104a557600080fd5b50803590602001356114d6565b6102d8600480360360208110156104c857600080fd5b8101906020810181356401000000008111156104e357600080fd5b8201836020820111156104f557600080fd5b8035906020019184602083028401116401000000008311171561051757600080fd5b509092509050611570565b61055b6004803603604081101561053857600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166115a5565b6040805192835260208301919091528051918290030190f35b6102d86004803603602081101561058a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115c9565b610223600480360360408110156105bd57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff1661178a565b610207600480360360208110156105f657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661191e565b6102d86004803603604081101561062957600080fd5b5080359060200135611933565b610223611af9565b60006020819052908152604090205460ff1681565b60065490565b600a5481565b6006818154811061066c57fe5b6000918252602090912060049091020180546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff9092169350919084565b60085481565b6002600154141561072557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260018190555060006006838154811061073c57fe5b6000918252602080832086845260078252604080852073ffffffffffffffffffffffffffffffffffffffff8816865290925292206004909102909101915061078384610cc6565b60006107c982600101546107bd64e8d4a510006107b187600301548760000154611cb090919063ffffffff16565b9063ffffffff611d9e16565b9063ffffffff611c3916565b90506107d6848683611e1f565b600383015482546107f79164e8d4a51000916107b19163ffffffff611cb016565b600192830155508055505050565b60045481565b600080610816612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166108ab57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b80156108b9576108b961108e565b600060095443116108cc576009546108ce565b435b6008549091506108e4908563ffffffff611d2a16565b6008556040805160808101825273ffffffffffffffffffffffffffffffffffffffff8581168083526020808401898152848601878152600060608701818152600680546001810182559281905297517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f600490930292830180547fffffffffffffffffffffffff000000000000000000000000000000000000000016919098161790965591517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40830155517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4182015592517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d429093019290925591548351888152935192937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91909101927f4710feb78e3bce8d2e3ca2989a8eb2f8bcd32a6a55b4535942c180fc4d2e2952929181900390910190a350505050565b60026001541415610ad157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260015532331480610af357503360009081526002602052604090205460ff165b610afc57600080fd5b600060068381548110610b0b57fe5b600091825260208083208684526007825260408085203386529092529220805460049092029092019250831115610ba357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f77697468647261773a206e6f7420676f6f640000000000000000000000000000604482015290519081900360640190fd5b610bac84610cc6565b6000610bda82600101546107bd64e8d4a510006107b187600301548760000154611cb090919063ffffffff16565b9050610be7338683611e1f565b8154610bf9908563ffffffff611c3916565b8083556003840154610c1c9164e8d4a51000916107b1919063ffffffff611cb016565b60018301558254610c4a9073ffffffffffffffffffffffffffffffffffffffff16338663ffffffff61209d16565b604080518581529051869133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505060018055505050565b60095481565b60038181548110610c9f57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600060068281548110610cd557fe5b9060005260206000209060040201905080600201544311610cf65750610f35565b8054604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015610d6657600080fd5b505afa158015610d7a573d6000803e3d6000fd5b505050506040513d6020811015610d9057600080fd5b5051905080610da6575043600290910155610f35565b6000610db68360020154436114d6565b90506000610de96008546107b18660010154610ddd60055487611cb090919063ffffffff16565b9063ffffffff611cb016565b90508015610ee05760035460005b81811015610eab5760038181548110610e0c57fe5b6000918252602082200154604080517f40c10f1900000000000000000000000000000000000000000000000000000000815230600482015260248101879052905173ffffffffffffffffffffffffffffffffffffffff909216926340c10f199260448084019382900301818387803b158015610e8757600080fd5b505af1158015610e9b573d6000803e3d6000fd5b505060019092019150610df79050565b50610ed9610ec8856107b18564e8d4a5100063ffffffff611cb016565b60038701549063ffffffff611d2a16565b6003860155505b436002850181905560038501546040805192835260208301869052828101919091525186917fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d2919081900360600190a2505050505b50565b60026001541415610faa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260015532331480610fcc57503360009081526002602052604090205460ff165b610fd557600080fd5b600060068281548110610fe457fe5b6000918252602080832085845260078252604080852033808752935284208054858255600182019590955560049093020180549094509192916110479173ffffffffffffffffffffffffffffffffffffffff91909116908363ffffffff61209d16565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a35050600180555050565b60055481565b60065460005b818110156110ad576110a581610cc6565b600101611094565b5050565b6000806110bc612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661115157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b801561115f5761115f61108e565b6111a2826111966006868154811061117357fe5b906000526020600020906004020160010154600854611c3990919063ffffffff16565b9063ffffffff611d2a16565b60088190555081600684815481106111b657fe5b906000526020600020906004020160010181905550827f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c836040518082815260200191505060405180910390a2505050565b600080611213612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166112a857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155825190815291517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b60008061133a612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166113cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b43600a55565b60035490565b600181565b6000806113eb612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661148057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b600082600a5410156114ea5750600061156a565b81600a5410156114fa57600a5491505b600454821161151f576115186001610ddd848663ffffffff611c3916565b905061156a565b600454831061153857611518828463ffffffff611c3916565b61151861155060045484611c3990919063ffffffff16565b6111966001610ddd87600454611c3990919063ffffffff16565b92915050565b8060005b8181101561159f5761159784848381811061158b57fe5b90506020020135610cc6565b600101611574565b50505050565b60076020908152600092835260408084209091529082529020805460019091015482565b6000806115d4612099565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661166957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b611671612099565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561170b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f417574683a2043616e6e6f742073656c662064656e7900000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526020818152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558051928352517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b6000806006848154811061179a57fe5b6000918252602080832087845260078252604080852073ffffffffffffffffffffffffffffffffffffffff898116875290845281862060049586029093016003810154815484517f70a082310000000000000000000000000000000000000000000000000000000081523098810198909852935191985093969395939492909116926370a08231926024808301939192829003018186803b15801561183e57600080fd5b505afa158015611852573d6000803e3d6000fd5b505050506040513d602081101561186857600080fd5b505160028501549091504311801561187f57508015155b156118eb5760006118948560020154436114d6565b905060006118bb6008546107b18860010154610ddd60055487611cb090919063ffffffff16565b90506118e66118d9846107b18464e8d4a5100063ffffffff611cb016565b859063ffffffff611d2a16565b935050505b61191383600101546107bd64e8d4a510006107b1868860000154611cb090919063ffffffff16565b979650505050505050565b60026020526000908152604090205460ff1681565b600260015414156119a557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155323314806119c757503360009081526002602052604090205460ff165b6119d057600080fd5b6000600683815481106119df57fe5b60009182526020808320868452600782526040808520338652909252922060049091029091019150611a1084610cc6565b805415611a54576000611a4582600101546107bd64e8d4a510006107b187600301548760000154611cb090919063ffffffff16565b9050611a52338683611e1f565b505b8154611a7e9073ffffffffffffffffffffffffffffffffffffffff1633308663ffffffff61212a16565b8054611a90908463ffffffff611d2a16565b8082556003830154611ab39164e8d4a51000916107b1919063ffffffff611cb016565b6001820155604080518481529051859133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050600180555050565b600654600090815b81811015611c3457600060068281548110611b1857fe5b600091825260208083206004928302018054604080517f70a0823100000000000000000000000000000000000000000000000000000000815230958101959095525191955073ffffffffffffffffffffffffffffffffffffffff16926370a08231926024808301939192829003018186803b158015611b9657600080fd5b505afa158015611baa573d6000803e3d6000fd5b505050506040513d6020811015611bc057600080fd5b5051600283015490915043118015611bd757508015155b15611c2a576000611bec8360020154436114d6565b90506000611c136008546107b18660010154610ddd60055487611cb090919063ffffffff16565b9050611c25878263ffffffff611d2a16565b965050505b5050600101611b01565b505090565b600082821115611caa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082611cbf5750600061156a565b82820282848281611ccc57fe5b0414611d23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806125456021913960400191505060405180910390fd5b9392505050565b600082820183811015611d2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000808211611e0e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611e1757fe5b049392505050565b80156120945760035460005b8181101561204457600060038281548110611e4257fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b158015611eb757600080fd5b505afa158015611ecb573d6000803e3d6000fd5b505050506040513d6020811015611ee157600080fd5b5051905080841115611f965760038281548110611efa57fe5b6000918252602082200154604080517f282d3fdf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152602482018690529151919092169263282d3fdf926044808201939182900301818387803b158015611f7957600080fd5b505af1158015611f8d573d6000803e3d6000fd5b5050505061203b565b60038281548110611fa357fe5b6000918252602082200154604080517f282d3fdf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152602482018990529151919092169263282d3fdf926044808201939182900301818387803b15801561202257600080fd5b505af1158015612036573d6000803e3d6000fd5b505050505b50600101611e2b565b50604080518381529051849173ffffffffffffffffffffffffffffffffffffffff8716917f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549181900360200190a3505b505050565b3390565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526120949084906121bb565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261159f9085905b606061221d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122939092919063ffffffff16565b8051909150156120945780806020019051602081101561223c57600080fd5b5051612094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612566602a913960400191505060405180910390fd5b60606122a284846000856122aa565b949350505050565b606082471015612305576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061251f6026913960400191505060405180910390fd5b61230e8561245a565b61237957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106123e357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016123a6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612445576040519150601f19603f3d011682016040523d82523d6000602084013e61244a565b606091505b5091509150611913828286612460565b3b151590565b6060831561246f575081611d23565b82511561247f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156124e35781810151838201526020016124cb565b50505050905090810190601f1680156125105780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122008896c0bb4b695d1d3f63ff57c033ae5f8d4008ff9e48cd2d7635adbb5f5f56164736f6c634300060b0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77"
    };
});
define("@scom/farming-contract/contracts/MasterChef.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/MasterChef.json.ts"], function (require, exports, eth_contract_3, MasterChef_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MasterChef = void 0;
    class MasterChef extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, MasterChef_json_1.default.abi, MasterChef_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.rewardToken, this.wallet.utils.toString(params.rewardsPerBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.endBlock), this.wallet.utils.toString(params.bonusEndBlock)], options);
        }
        parseAuthChangedEvent(receipt) {
            return this.parseEvents(receipt, "AuthChanged").map(e => this.decodeAuthChangedEvent(e));
        }
        decodeAuthChangedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                auth: result.auth,
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_3.BigNumber(result.pid),
                amount: new eth_contract_3.BigNumber(result.amount),
                _event: event
            };
        }
        parseEmergencyWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
        }
        decodeEmergencyWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_3.BigNumber(result.pid),
                amount: new eth_contract_3.BigNumber(result.amount),
                _event: event
            };
        }
        parseHarvestEvent(receipt) {
            return this.parseEvents(receipt, "Harvest").map(e => this.decodeHarvestEvent(e));
        }
        decodeHarvestEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_3.BigNumber(result.pid),
                amount: new eth_contract_3.BigNumber(result.amount),
                _event: event
            };
        }
        parseLogInitEvent(receipt) {
            return this.parseEvents(receipt, "LogInit").map(e => this.decodeLogInitEvent(e));
        }
        decodeLogInitEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseLogPoolAdditionEvent(receipt) {
            return this.parseEvents(receipt, "LogPoolAddition").map(e => this.decodeLogPoolAdditionEvent(e));
        }
        decodeLogPoolAdditionEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_3.BigNumber(result.pid),
                allocPoint: new eth_contract_3.BigNumber(result.allocPoint),
                lpToken: result.lpToken,
                _event: event
            };
        }
        parseLogSetPoolEvent(receipt) {
            return this.parseEvents(receipt, "LogSetPool").map(e => this.decodeLogSetPoolEvent(e));
        }
        decodeLogSetPoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_3.BigNumber(result.pid),
                allocPoint: new eth_contract_3.BigNumber(result.allocPoint),
                _event: event
            };
        }
        parseLogUpdatePoolEvent(receipt) {
            return this.parseEvents(receipt, "LogUpdatePool").map(e => this.decodeLogUpdatePoolEvent(e));
        }
        decodeLogUpdatePoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_3.BigNumber(result.pid),
                lastRewardBlock: new eth_contract_3.BigNumber(result.lastRewardBlock),
                lpSupply: new eth_contract_3.BigNumber(result.lpSupply),
                accSushiPerShare: new eth_contract_3.BigNumber(result.accSushiPerShare),
                _event: event
            };
        }
        parseWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
        }
        decodeWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_3.BigNumber(result.pid),
                amount: new eth_contract_3.BigNumber(result.amount),
                _event: event
            };
        }
        assign() {
            let BONUS_MULTIPLIER_call = async (options) => {
                let result = await this.call('BONUS_MULTIPLIER', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.BONUS_MULTIPLIER = BONUS_MULTIPLIER_call;
            let bonusEndBlock_call = async (options) => {
                let result = await this.call('bonusEndBlock', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.bonusEndBlock = bonusEndBlock_call;
            let endBlock_call = async (options) => {
                let result = await this.call('endBlock', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.endBlock = endBlock_call;
            let getMultiplierParams = (params) => [this.wallet.utils.toString(params.from), this.wallet.utils.toString(params.to)];
            let getMultiplier_call = async (params, options) => {
                let result = await this.call('getMultiplier', getMultiplierParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.getMultiplier = getMultiplier_call;
            let owners_call = async (param1, options) => {
                let result = await this.call('owners', [param1], options);
                return result;
            };
            this.owners = owners_call;
            let pendingRewardsParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
            let pendingRewards_call = async (params, options) => {
                let result = await this.call('pendingRewards', pendingRewardsParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.pendingRewards = pendingRewards_call;
            let poolInfo_call = async (param1, options) => {
                let result = await this.call('poolInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    lpToken: result.lpToken,
                    allocPoint: new eth_contract_3.BigNumber(result.allocPoint),
                    lastRewardBlock: new eth_contract_3.BigNumber(result.lastRewardBlock),
                    accRewardsPerShare: new eth_contract_3.BigNumber(result.accRewardsPerShare)
                };
            };
            this.poolInfo = poolInfo_call;
            let poolLength_call = async (options) => {
                let result = await this.call('poolLength', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.poolLength = poolLength_call;
            let rewardToken_call = async (param1, options) => {
                let result = await this.call('rewardToken', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.rewardToken = rewardToken_call;
            let rewardTokenLength_call = async (options) => {
                let result = await this.call('rewardTokenLength', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.rewardTokenLength = rewardTokenLength_call;
            let rewardsPerBlock_call = async (options) => {
                let result = await this.call('rewardsPerBlock', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.rewardsPerBlock = rewardsPerBlock_call;
            let startBlock_call = async (options) => {
                let result = await this.call('startBlock', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.startBlock = startBlock_call;
            let totalAllocPoint_call = async (options) => {
                let result = await this.call('totalAllocPoint', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.totalAllocPoint = totalAllocPoint_call;
            let totalPendingRewards_call = async (options) => {
                let result = await this.call('totalPendingRewards', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.totalPendingRewards = totalPendingRewards_call;
            let userInfoParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let userInfo_call = async (params, options) => {
                let result = await this.call('userInfo', userInfoParams(params), options);
                return {
                    amount: new eth_contract_3.BigNumber(result.amount),
                    rewardDebt: new eth_contract_3.BigNumber(result.rewardDebt)
                };
            };
            this.userInfo = userInfo_call;
            let whitelisted_call = async (param1, options) => {
                let result = await this.call('whitelisted', [param1], options);
                return result;
            };
            this.whitelisted = whitelisted_call;
            let addParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.lpToken, params.withUpdate];
            let add_send = async (params, options) => {
                let result = await this.send('add', addParams(params), options);
                return result;
            };
            let add_call = async (params, options) => {
                let result = await this.call('add', addParams(params), options);
                return;
            };
            this.add = Object.assign(add_send, {
                call: add_call
            });
            let deny_send = async (account, options) => {
                let result = await this.send('deny', [account], options);
                return result;
            };
            let deny_call = async (account, options) => {
                let result = await this.call('deny', [account], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let depositParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
            let deposit_send = async (params, options) => {
                let result = await this.send('deposit', depositParams(params), options);
                return result;
            };
            let deposit_call = async (params, options) => {
                let result = await this.call('deposit', depositParams(params), options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
            let emergencyWithdraw_send = async (pid, options) => {
                let result = await this.send('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let emergencyWithdraw_call = async (pid, options) => {
                let result = await this.call('emergencyWithdraw', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
                call: emergencyWithdraw_call
            });
            let harvestParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
            let harvest_send = async (params, options) => {
                let result = await this.send('harvest', harvestParams(params), options);
                return result;
            };
            let harvest_call = async (params, options) => {
                let result = await this.call('harvest', harvestParams(params), options);
                return;
            };
            this.harvest = Object.assign(harvest_send, {
                call: harvest_call
            });
            let massUpdatePools_send = async (options) => {
                let result = await this.send('massUpdatePools', [], options);
                return result;
            };
            let massUpdatePools_call = async (options) => {
                let result = await this.call('massUpdatePools', [], options);
                return;
            };
            this.massUpdatePools = Object.assign(massUpdatePools_send, {
                call: massUpdatePools_call
            });
            let pause_send = async (options) => {
                let result = await this.send('pause', [], options);
                return result;
            };
            let pause_call = async (options) => {
                let result = await this.call('pause', [], options);
                return;
            };
            this.pause = Object.assign(pause_send, {
                call: pause_call
            });
            let rely_send = async (account, options) => {
                let result = await this.send('rely', [account], options);
                return result;
            };
            let rely_call = async (account, options) => {
                let result = await this.call('rely', [account], options);
                return;
            };
            this.rely = Object.assign(rely_send, {
                call: rely_call
            });
            let setParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.allocPoint), params.withUpdate];
            let set_send = async (params, options) => {
                let result = await this.send('set', setParams(params), options);
                return result;
            };
            let set_call = async (params, options) => {
                let result = await this.call('set', setParams(params), options);
                return;
            };
            this.set = Object.assign(set_send, {
                call: set_call
            });
            let setWhiteListParams = (params) => [params.who, params.allowed];
            let setWhiteList_send = async (params, options) => {
                let result = await this.send('setWhiteList', setWhiteListParams(params), options);
                return result;
            };
            let setWhiteList_call = async (params, options) => {
                let result = await this.call('setWhiteList', setWhiteListParams(params), options);
                return;
            };
            this.setWhiteList = Object.assign(setWhiteList_send, {
                call: setWhiteList_call
            });
            let updatePool_send = async (pid, options) => {
                let result = await this.send('updatePool', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let updatePool_call = async (pid, options) => {
                let result = await this.call('updatePool', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.updatePool = Object.assign(updatePool_send, {
                call: updatePool_call
            });
            let updateSelectedPools_send = async (pids, options) => {
                let result = await this.send('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
                return result;
            };
            let updateSelectedPools_call = async (pids, options) => {
                let result = await this.call('updateSelectedPools', [this.wallet.utils.toString(pids)], options);
                return;
            };
            this.updateSelectedPools = Object.assign(updateSelectedPools_send, {
                call: updateSelectedPools_call
            });
            let withdrawParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount)];
            let withdraw_send = async (params, options) => {
                let result = await this.send('withdraw', withdrawParams(params), options);
                return result;
            };
            let withdraw_call = async (params, options) => {
                let result = await this.call('withdraw', withdrawParams(params), options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
        }
    }
    exports.MasterChef = MasterChef;
    MasterChef._abi = MasterChef_json_1.default.abi;
});
define("@scom/farming-contract/contracts/Redeeming.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/Redeeming.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IFarming", "name": "_farming", "type": "address" }, { "internalType": "contract Vesting[]", "name": "_vesting", "type": "address[]" }, { "internalType": "uint256[]", "name": "_rewardPerVesting", "type": "uint256[]" }, { "internalType": "contract IERC20[]", "name": "_reward", "type": "address[]" }, { "internalType": "uint256[]", "name": "_convertingRatio", "type": "uint256[]" }, { "internalType": "address", "name": "_admin", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [], "name": "ReclaimRemainingReward", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "vesting", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "Redeem", "type": "event" },
            { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "availableRewardAmount", "outputs": [{ "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "uint256[]", "name": "availableReward", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "convertingRatio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "farming", "outputs": [{ "internalType": "contract IFarming", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "pid", "type": "uint256" }], "name": "harvestAndRedeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "putFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "reclaimRemainingReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "vestingIdx", "type": "uint256" }], "name": "redeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "redeemAllAvailable", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "reward", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "vestingIdx", "type": "uint256" }], "name": "rewardLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vesting", "outputs": [{ "internalType": "contract Vesting", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "vestingLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b506040516200224038038062002240833981810160405260c08110156200003757600080fd5b8151602083018051604051929492938301929190846401000000008211156200005f57600080fd5b9083019060208201858111156200007557600080fd5b82518660208202830111640100000000821117156200009357600080fd5b82525081516020918201928201910280838360005b83811015620000c2578181015183820152602001620000a8565b5050505090500160405260200180516040519392919084640100000000821115620000ec57600080fd5b9083019060208201858111156200010257600080fd5b82518660208202830111640100000000821117156200012057600080fd5b82525081516020918201928201910280838360005b838110156200014f57818101518382015260200162000135565b50505050905001604052602001805160405193929190846401000000008211156200017957600080fd5b9083019060208201858111156200018f57600080fd5b8251866020820283011164010000000082111715620001ad57600080fd5b82525081516020918201928201910280838360005b83811015620001dc578181015183820152602001620001c2565b50505050905001604052602001805160405193929190846401000000008211156200020657600080fd5b9083019060208201858111156200021c57600080fd5b82518660208202830111640100000000821117156200023a57600080fd5b82525081516020918201928201910280838360005b83811015620002695781810151838201526020016200024f565b5050505091909101604052506020015185518751919350149050620002d5576040805162461bcd60e51b815260206004820152601860248201527f76657374696e672073697a65206e6f74206d6174636865640000000000000000604482015290519081900360640190fd5b84516000805b828110156200031d5762000312878281518110620002f557fe5b6020026020010151836200067060201b62000fe61790919060201c565b9150600101620002db565b5084518114801562000330575083518551145b62000382576040805162461bcd60e51b815260206004820152601760248201527f7265776172642073697a65206e6f74206d617463686564000000000000000000604482015290519081900360640190fd5b6001600160601b0319606089901b166080528651620003a99060009060208a0190620006d2565b5086516001600160401b0381118015620003c257600080fd5b50604051908082528060200260200182016040528015620003f857816020015b6060815260200190600190039081620003e25790505b5080516200040f916001916020909101906200073c565b5086516001600160401b03811180156200042857600080fd5b506040519080825280602002602001820160405280156200045e57816020015b6060815260200190600190039081620004485790505b50805162000475916002916020909101906200079c565b506000805b838110156200064e5760008882815181106200049257fe5b60200260200101519050806001600160401b0381118015620004b357600080fd5b50604051908082528060200260200182016040528015620004de578160200160208202803683370190505b5060018381548110620004ed57fe5b9060005260206000200190805190602001906200050c929190620006d2565b50806001600160401b03811180156200052457600080fd5b506040519080825280602002602001820160405280156200054f578160200160208202803683370190505b50600283815481106200055e57fe5b9060005260206000200190805190602001906200057d929190620007fc565b5060005b8181101562000643578884815181106200059757fe5b602002602001015160018481548110620005ad57fe5b906000526020600020018281548110620005c357fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550878481518110620005fe57fe5b6020026020010151600284815481106200061457fe5b9060005260206000200182815481106200062a57fe5b6000918252602090912001556001938401930162000581565b50506001016200047a565b50600355505060601b6001600160601b03191660a05250620009029350505050565b600082820183811015620006cb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b8280548282559060005260206000209081019282156200072a579160200282015b828111156200072a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620006f3565b506200073892915062000848565b5090565b8280548282559060005260206000209081019282156200078e579160200282015b828111156200078e57825180516200077d918491602090910190620006d2565b50916020019190600101906200075d565b506200073892915062000872565b828054828255906000526020600020908101928215620007ee579160200282015b82811115620007ee5782518051620007dd918491602090910190620007fc565b5091602001919060010190620007bd565b50620007389291506200089a565b8280548282559060005260206000209081019282156200083a579160200282015b828111156200083a5782518255916020019190600101906200081d565b5062000738929150620008c2565b6200086f91905b80821115620007385780546001600160a01b03191681556001016200084f565b90565b6200086f91905b8082111562000738576000620008908282620008df565b5060010162000879565b6200086f91905b8082111562000738576000620008b88282620008df565b50600101620008a1565b6200086f91905b80821115620007385760008155600101620008c9565b5080546000825590600052602060002090810190620008ff9190620008c2565b50565b60805160601c60a05160601c6118fb62000945600039806109bf5280610a8b5280610f3152508061056b528061082a5280610ab15280610bb552506118fb6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063a4fa8d571161008c578063e8de2bdf11610066578063e8de2bdf146102ff578063f21f51d514610322578063f851a44014610365578063fe1a54211461036d576100df565b8063a4fa8d57146102a5578063b217f9d4146102c8578063c03f55dc146102e2576100df565b80638d96bdbe116100bd5780638d96bdbe1461016d57806390583c8f14610239578063a0b7f66414610272576100df565b80631e9a6950146100e45780632ffac82c1461011f5780634e3ad80f14610165575b600080fd5b61011d600480360360408110156100fa57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610375565b005b61013c6004803603602081101561013557600080fd5b5035610535565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61013c610569565b6101a06004803603602081101561018357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661058d565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101e45781810151838201526020016101cc565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561022357818101518382015260200161020b565b5050505090500194505050505060405180910390f35b61011d6004803603604081101561024f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610828565b61011d6004803603602081101561028857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108f4565b61013c600480360360408110156102bb57600080fd5b5080359060200135610914565b6102d061095f565b60408051918252519081900360200190f35b6102d0600480360360208110156102f857600080fd5b5035610965565b6102d06004803603604081101561031557600080fd5b5080359060200135610986565b61011d6004803603606081101561033857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356109bd565b61013c610a89565b61011d610aad565b73ffffffffffffffffffffffffffffffffffffffff82163014156103fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c6964206163636f756e740000000000000000000000000000000000604482015290519081900360640190fd5b600054811061046a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c69642076657374696e674964780000000000000000000000000000604482015290519081900360640190fd5b600080828154811061047857fe5b60009182526020918290200154604080517f9e74080500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015291519190921692639e7408059260248082019391829003018186803b1580156104f157600080fd5b505afa158015610505573d6000803e3d6000fd5b505050506040513d602081101561051b57600080fd5b50519050801561053057610530838383611063565b505050565b6000818154811061054257fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608060035467ffffffffffffffff811180156105a957600080fd5b506040519080825280602002602001820160405280156105d3578160200160208202803683370190505b50905060035467ffffffffffffffff811180156105ef57600080fd5b50604051908082528060200260200182016040528015610619578160200160208202803683370190505b5060008054919350805b8281101561082057600080828154811061063957fe5b60009182526020918290200154604080517f9e74080500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015291519190921692639e7408059260248082019391829003018186803b1580156106b257600080fd5b505afa1580156106c6573d6000803e3d6000fd5b505050506040513d60208110156106dc57600080fd5b505160018054919250600091849081106106f257fe5b600091825260208220015491505b81811015610815576001848154811061071557fe5b90600052602060002001818154811061072a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688868151811061076157fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506107f2670de0b6b3a76400006107e6600287815481106107b757fe5b9060005260206000200184815481106107cc57fe5b90600052602060002001548661125590919063ffffffff16565b9063ffffffff6112c816565b8786815181106107fe57fe5b602090810291909101015260019485019401610700565b505050600101610623565b505050915091565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318fccc7682846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156108cf57600080fd5b505af11580156108e3573d6000803e3d6000fd5b505050506108f0826108f4565b5050565b60008054905b818110156105305761090c8382610375565b6001016108fa565b6001828154811061092157fe5b90600052602060002001818154811061093657fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60005490565b60006001828154811061097457fe5b60009182526020909120015492915050565b6002828154811061099357fe5b9060005260206000200181815481106109a857fe5b90600052602060002001600091509150505481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163314610a6157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f742066726f6d2061646d696e000000000000000000000000000000000000604482015290519081900360640190fd5b61053073ffffffffffffffffffffffffffffffffffffffff841683308463ffffffff61134916565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663083c63236040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1557600080fd5b505afa158015610b29573d6000803e3d6000fd5b505050506040513d6020811015610b3f57600080fd5b50519050438110610bb157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f63616d706169676e20686173206e6f742066696e697368656400000000000000604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ec1371f26040518163ffffffff1660e01b815260040160206040518083038186803b158015610c1957600080fd5b505afa158015610c2d573d6000803e3d6000fd5b505050506040513d6020811015610c4357600080fd5b5051600080549192505b81811015610fb7576000808281548110610c6357fe5b60009182526020918290200154604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926318160ddd92600480840193829003018186803b158015610cd257600080fd5b505afa158015610ce6573d6000803e3d6000fd5b505050506040513d6020811015610cfc57600080fd5b50519050610d10818563ffffffff610fe616565b9050610dd060008381548110610d2257fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b158015610d9757600080fd5b505afa158015610dab573d6000803e3d6000fd5b505050506040513d6020811015610dc157600080fd5b5051829063ffffffff6113e416565b9050600060018381548110610de157fe5b600091825260208220015491505b81811015610fac57600060018581548110610e0657fe5b906000526020600020018281548110610e1b57fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b158015610e9057600080fd5b505afa158015610ea4573d6000803e3d6000fd5b505050506040513d6020811015610eba57600080fd5b505160028054919250600091610f1291670de0b6b3a7640000916107e691908a908110610ee357fe5b906000526020600020018681548110610ef857fe5b90600052602060002001548861125590919063ffffffff16565b9050610f24828263ffffffff6113e416565b90508015610fa257610fa27f00000000000000000000000000000000000000000000000000000000000000008260018981548110610f5e57fe5b906000526020600020018681548110610f7357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16919063ffffffff61145b16565b5050600101610def565b505050600101610c4d565b506040517f3680fab2fae832da360805214e3c81c30fbffd43ff154a25cd3a7706fcec610b90600090a1505050565b60008282018381101561105a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b6000828154811061107057fe5b6000918252602082200154604080517f1e9a695000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526024820186905291519190921692631e9a6950926044808201939182900301818387803b1580156110ef57600080fd5b505af1158015611103573d6000803e3d6000fd5b5050505060006001838154811061111657fe5b600091825260208220015491505b8181101561124e576000611179670de0b6b3a76400006107e66002888154811061114a57fe5b90600052602060002001858154811061115f57fe5b90600052602060002001548761125590919063ffffffff16565b90508015611245576111a886826001888154811061119357fe5b906000526020600020018581548110610f7357fe5b8573ffffffffffffffffffffffffffffffffffffffff167f3f693fff038bb8a046aa76d9516190ac7444f7d69cf952c4cbdc086fdef2d6fc600187815481106111ed57fe5b90600052602060002001848154811061120257fe5b600091825260209182902001546040805173ffffffffffffffffffffffffffffffffffffffff909216825291810188905280820185905290519081900360600190a25b50600101611124565b5050505050565b6000826112645750600061105d565b8282028284828161127157fe5b041461105a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061187b6021913960400191505060405180910390fd5b600080821161133857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161134157fe5b049392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526113de9085906114e4565b50505050565b60008282111561145557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526105309084905b6060611546826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115bc9092919063ffffffff16565b8051909150156105305780806020019051602081101561156557600080fd5b5051610530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061189c602a913960400191505060405180910390fd5b60606115cb84846000856115d5565b90505b9392505050565b606082471015611630576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806118556026913960400191505060405180910390fd5b61163985611790565b6116a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061170e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016116d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611770576040519150601f19603f3d011682016040523d82523d6000602084013e611775565b606091505b5091509150611785828286611796565b979650505050505050565b3b151590565b606083156117a55750816115ce565b8251156117b55782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611819578181015183820152602001611801565b50505050905090810190601f1680156118465780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212207e7d9afe11c6763c9db687d275bc57f9e49a5282492351cc5f3ee87d14610ea164736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/Redeeming.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/Redeeming.json.ts"], function (require, exports, eth_contract_4, Redeeming_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Redeeming = void 0;
    class Redeeming extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, Redeeming_json_1.default.abi, Redeeming_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.farming, params.vesting, this.wallet.utils.toString(params.rewardPerVesting), params.reward, this.wallet.utils.toString(params.convertingRatio), params.admin], options);
        }
        parseReclaimRemainingRewardEvent(receipt) {
            return this.parseEvents(receipt, "ReclaimRemainingReward").map(e => this.decodeReclaimRemainingRewardEvent(e));
        }
        decodeReclaimRemainingRewardEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseRedeemEvent(receipt) {
            return this.parseEvents(receipt, "Redeem").map(e => this.decodeRedeemEvent(e));
        }
        decodeRedeemEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                token: result.token,
                vesting: new eth_contract_4.BigNumber(result.vesting),
                reward: new eth_contract_4.BigNumber(result.reward),
                _event: event
            };
        }
        assign() {
            let admin_call = async (options) => {
                let result = await this.call('admin', [], options);
                return result;
            };
            this.admin = admin_call;
            let availableRewardAmount_call = async (account, options) => {
                let result = await this.call('availableRewardAmount', [account], options);
                return {
                    tokens: result.tokens,
                    availableReward: result.availableReward.map(e => new eth_contract_4.BigNumber(e))
                };
            };
            this.availableRewardAmount = availableRewardAmount_call;
            let convertingRatioParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let convertingRatio_call = async (params, options) => {
                let result = await this.call('convertingRatio', convertingRatioParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.convertingRatio = convertingRatio_call;
            let farming_call = async (options) => {
                let result = await this.call('farming', [], options);
                return result;
            };
            this.farming = farming_call;
            let rewardParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let reward_call = async (params, options) => {
                let result = await this.call('reward', rewardParams(params), options);
                return result;
            };
            this.reward = reward_call;
            let rewardLength_call = async (vestingIdx, options) => {
                let result = await this.call('rewardLength', [this.wallet.utils.toString(vestingIdx)], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.rewardLength = rewardLength_call;
            let vesting_call = async (param1, options) => {
                let result = await this.call('vesting', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.vesting = vesting_call;
            let vestingLength_call = async (options) => {
                let result = await this.call('vestingLength', [], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.vestingLength = vestingLength_call;
            let harvestAndRedeemParams = (params) => [params.account, this.wallet.utils.toString(params.pid)];
            let harvestAndRedeem_send = async (params, options) => {
                let result = await this.send('harvestAndRedeem', harvestAndRedeemParams(params), options);
                return result;
            };
            let harvestAndRedeem_call = async (params, options) => {
                let result = await this.call('harvestAndRedeem', harvestAndRedeemParams(params), options);
                return;
            };
            this.harvestAndRedeem = Object.assign(harvestAndRedeem_send, {
                call: harvestAndRedeem_call
            });
            let putFundParams = (params) => [params.token, params.from, this.wallet.utils.toString(params.amount)];
            let putFund_send = async (params, options) => {
                let result = await this.send('putFund', putFundParams(params), options);
                return result;
            };
            let putFund_call = async (params, options) => {
                let result = await this.call('putFund', putFundParams(params), options);
                return;
            };
            this.putFund = Object.assign(putFund_send, {
                call: putFund_call
            });
            let reclaimRemainingReward_send = async (options) => {
                let result = await this.send('reclaimRemainingReward', [], options);
                return result;
            };
            let reclaimRemainingReward_call = async (options) => {
                let result = await this.call('reclaimRemainingReward', [], options);
                return;
            };
            this.reclaimRemainingReward = Object.assign(reclaimRemainingReward_send, {
                call: reclaimRemainingReward_call
            });
            let redeemParams = (params) => [params.account, this.wallet.utils.toString(params.vestingIdx)];
            let redeem_send = async (params, options) => {
                let result = await this.send('redeem', redeemParams(params), options);
                return result;
            };
            let redeem_call = async (params, options) => {
                let result = await this.call('redeem', redeemParams(params), options);
                return;
            };
            this.redeem = Object.assign(redeem_send, {
                call: redeem_call
            });
            let redeemAllAvailable_send = async (account, options) => {
                let result = await this.send('redeemAllAvailable', [account], options);
                return result;
            };
            let redeemAllAvailable_call = async (account, options) => {
                let result = await this.call('redeemAllAvailable', [account], options);
                return;
            };
            this.redeemAllAvailable = Object.assign(redeemAllAvailable_send, {
                call: redeemAllAvailable_call
            });
        }
    }
    exports.Redeeming = Redeeming;
    Redeeming._abi = Redeeming_json_1.default.abi;
});
define("@scom/farming-contract/contracts/VestingToken.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/VestingToken.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint256", "name": "_startReleaseBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endReleaseBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "uint256", "name": "_vestingRatio", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "direct", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Lock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "canUnlockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endReleaseBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "farming", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "lastUnlockBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "lockOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "redeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "redeeming", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_farming", "type": "address" }], "name": "setFarming", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_redeeming", "type": "address" }], "name": "setRedeeming", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startReleaseBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "totalAvailableAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "totalBalanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }], "name": "transferAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unlockedSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "vestingRatio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101006040523480156200001257600080fd5b5060405162002a0e38038062002a0e833981810160405260c08110156200003857600080fd5b81019080805160405193929190846401000000008211156200005957600080fd5b9083019060208201858111156200006f57600080fd5b82516401000000008111828201881017156200008a57600080fd5b82525081516020918201929091019080838360005b83811015620000b95781810151838201526020016200009f565b50505050905090810190601f168015620000e75780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010b57600080fd5b9083019060208201858111156200012157600080fd5b82516401000000008111828201881017156200013c57600080fd5b82525081516020918201929091019080838360005b838110156200016b57818101518382015260200162000151565b50505050905090810190601f168015620001995780820380516001836020036101000a031916815260200191505b50604090815260208281015191830151606084015160809094015188519396509094509187918791620001d391600391908501906200034e565b508051620001e99060049060208401906200034e565b50506005805460ff191660121790555060006200020e6001600160e01b036200033316565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35083831015620002a55760405162461bcd60e51b8152600401808060200182810382526023815260200180620029eb6023913960400191505060405180910390fd5b670de0b6b3a764000081111562000303576040805162461bcd60e51b815260206004820152601560248201527f496e76616c69642076657374696e6720726174696f0000000000000000000000604482015290519081900360640190fd5b6200031860126001600160e01b036200033816565b60809390935260a09190915260c05260e05250620003f09050565b335b90565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039157805160ff1916838001178555620003c1565b82800160010185558215620003c1579182015b82811115620003c1578251825591602001919060010190620003a4565b50620003cf929150620003d3565b5090565b6200033591905b80821115620003cf5760008155600101620003da565b60805160a05160c05160e0516125986200045360003980610dbe52806111ee525080610f89528061109a525080610ad25280610b8a5280611a59525080610aa25280610eba5280610f06528061135652806116c0528061170c52506125986000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c806370a082311161012a578063a3a7e7f3116100bd578063a96dc7391161008c578063dd62ed3e11610071578063dd62ed3e14610714578063f2fde38b1461074f578063fd3d27b81461078257610226565b8063a96dc739146106d9578063ce4079ef1461070c57610226565b8063a3a7e7f31461062c578063a457c2d71461065f578063a69df4b514610698578063a9059cbb146106a057610226565b80638da5cb5b116100f95780638da5cb5b146105b657806395d89b41146105be5780639e740805146105c6578063a124a640146105f957610226565b806370a0823114610540578063715018a6146105735780637ee416151461057b57806389a2867c1461058357610226565b8063355274ea116101bd5780634b0ee02a1161018c57806351a846f01161017157806351a846f0146104fd5780635a46d3b514610505578063655308841461053857610226565b80634b0ee02a146104995780634e3ad80f146104cc57610226565b8063355274ea14610417578063395093511461041f5780633a1aae351461045857806340c10f191461046057610226565b8063202b1760116101f9578063202b17601461034a57806323b872dd1461037d578063282d3fdf146103c0578063313ce567146103f957610226565b806306fdde031461022b578063095ea7b3146102a857806318160ddd146102f55780631e9a69501461030f575b600080fd5b61023361078a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026d578181015183820152602001610255565b50505050905090810190601f16801561029a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e1600480360360408110156102be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561083e565b604080519115158252519081900360200190f35b6102fd61085c565b60408051918252519081900360200190f35b6103486004803603604081101561032557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610862565b005b6102fd6004803603602081101561036057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a9e565b6102e16004803603606081101561039357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610c0a565b610348600480360360408110156103d657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610cb1565b610401610f7e565b6040805160ff9092168252519081900360200190f35b6102fd610f87565b6102e16004803603604081101561043557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610fab565b6102fd61100c565b6103486004803603604081101561047657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611012565b6102fd600480360360208110156104af57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661114c565b6104d461118c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6104d46111a8565b6102fd6004803603602081101561051b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166111c4565b6102fd6111ec565b6102fd6004803603602081101561055657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611210565b610348611238565b6102fd611354565b6102fd6004803603602081101561059957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611378565b6104d46113a0565b6102336113c1565b6102fd600480360360208110156105dc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611440565b6103486004803603602081101561060f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611457565b6103486004803603602081101561064257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115cb565b6102e16004803603604081101561067557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356117c2565b61034861183d565b6102e1600480360360408110156106b657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356118cf565b610348600480360360208110156106ef57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166118e3565b6102fd611a57565b6102fd6004803603604081101561072a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611a7b565b6103486004803603602081101561076557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611ab3565b6102fd611c5f565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108345780601f1061080957610100808354040283529160200191610834565b820191906000526020600020905b81548152906001019060200180831161081757829003601f168201915b5050505050905090565b600061085261084b611c85565b8484611c89565b5060015b92915050565b60025490565b60085473ffffffffffffffffffffffffffffffffffffffff1633146108e857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742066726f6d2072656465656d696e670000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821630141561096d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c6964206163636f756e740000000000000000000000000000000000604482015290519081900360640190fd5b600061097883611210565b905081811015610a2857600061098d84610a9e565b905061099f828263ffffffff611dd016565b831115610a0d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b610a2684610a21858563ffffffff611e4b16565b611ec2565b505b600854610a4d90849073ffffffffffffffffffffffffffffffffffffffff1684611f57565b60408051838152905173ffffffffffffffffffffffffffffffffffffffff8516917f222838db2794d11532d940e8dec38ae307ed0b63cd97c233322e221f998767a6919081900360200190a2505050565b60007f0000000000000000000000000000000000000000000000000000000000000000431015610ad057506000610c05565b7f00000000000000000000000000000000000000000000000000000000000000004310610b23575073ffffffffffffffffffffffffffffffffffffffff8116600090815260096020526040902054610c05565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600a6020526040812054610b5a90439063ffffffff611e4b16565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600a602052604081205491925090610bb5907f00000000000000000000000000000000000000000000000000000000000000009063ffffffff611e4b16565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260096020526040902054909150610c00908290610bf4908563ffffffff61213316565b9063ffffffff6121a616565b925050505b919050565b6000610c17848484611f57565b610ca784610c23611c85565b610ca2856040518060600160405280602881526020016124cd6028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260016020526040812090610c6e611c85565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61222716565b611c89565b5060019392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f206c6f636b20746f20616464726573732830290000000000000000000000604482015290519081900360640190fd5b610d3c33611210565b811115610daa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f206c6f636b206f7665722062616c616e6365000000000000000000000000604482015290519081900360640190fd5b6000610de8670de0b6b3a7640000610bf4847f000000000000000000000000000000000000000000000000000000000000000063ffffffff61213316565b90506000610dfc838363ffffffff611e4b16565b90508015610e0f57610e0f338583611f57565b8115610e2057610e20333084611f57565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260096020526040902054610e56908363ffffffff611dd016565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260096020526040902055600654610e8f908363ffffffff611dd016565b60065573ffffffffffffffffffffffffffffffffffffffff84166000908152600a60205260409020547f00000000000000000000000000000000000000000000000000000000000000001115610f285773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602052604090207f000000000000000000000000000000000000000000000000000000000000000090555b6040805182815260208101849052815173ffffffffffffffffffffffffffffffffffffffff8716927f49eaf4942f1237055eb4cfa5f31c9dfe50d5b4ade01e021f7de8be2fbbde557b928290030190a250505050565b60055460ff1690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610852610fb8611c85565b84610ca28560016000610fc9611c85565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff611dd016565b60065490565b60075473ffffffffffffffffffffffffffffffffffffffff16331461109857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f742066726f6d206661726d696e6700000000000000000000000000000000604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006110d1826110c561085c565b9063ffffffff611dd016565b111561113e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6361702065786365656465640000000000000000000000000000000000000000604482015290519081900360640190fd5b61114882826122d8565b5050565b600061085661115a83611210565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600960205260409020549063ffffffff611dd016565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526009602052604090205490565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b611240611c85565b73ffffffffffffffffffffffffffffffffffffffff1661125e6113a0565b73ffffffffffffffffffffffffffffffffffffffff16146112e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600554604051600091610100900473ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580547fffffffffffffffffffffff0000000000000000000000000000000000000000ff169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1690565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108345780601f1061080957610100808354040283529160200191610834565b600061085661144e83610a9e565b6110c584611210565b61145f611c85565b73ffffffffffffffffffffffffffffffffffffffff1661147d6113a0565b73ffffffffffffffffffffffffffffffffffffffff16146114ff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60075473ffffffffffffffffffffffffffffffffffffffff161561158457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6661726d696e6720616c72656164792073657400000000000000000000000000604482015290519081900360640190fd5b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811633141561165057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f63616e6e6f74207472616e7366657220616c6c20746f2073656c660000000000604482015290519081900360640190fd5b336000908152600960205260408082205473ffffffffffffffffffffffffffffffffffffffff8416835291205461168c9163ffffffff611dd016565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260096020908152604080832093909355600a905220547f0000000000000000000000000000000000000000000000000000000000000000111561172e5773ffffffffffffffffffffffffffffffffffffffff81166000908152600a602052604090207f000000000000000000000000000000000000000000000000000000000000000090555b336000908152600a60205260408082205473ffffffffffffffffffffffffffffffffffffffff84168352912054101561178f57336000908152600a60205260408082205473ffffffffffffffffffffffffffffffffffffffff841683529120555b336000818152600960209081526040808320839055600a9091528120556117bf90826117ba82611210565b611f57565b50565b60006108526117cf611c85565b84610ca28560405180606001604052806025815260200161253e60259139600160006117f9611c85565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61222716565b336000908152600960205260409020546118b857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206c6f636b656420746f6b656e7300000000000000000000000000000000604482015290519081900360640190fd5b60006118c333610a9e565b90506117bf3382611ec2565b60006108526118dc611c85565b8484611f57565b6118eb611c85565b73ffffffffffffffffffffffffffffffffffffffff166119096113a0565b73ffffffffffffffffffffffffffffffffffffffff161461198b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60085473ffffffffffffffffffffffffffffffffffffffff1615611a1057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f72656465656d696e6720616c7265616479207365740000000000000000000000604482015290519081900360640190fd5b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b611abb611c85565b73ffffffffffffffffffffffffffffffffffffffff16611ad96113a0565b73ffffffffffffffffffffffffffffffffffffffff1614611b5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611bc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061243e6026913960400191505060405180910390fd5b60055460405173ffffffffffffffffffffffffffffffffffffffff80841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b6000611c80611c6c61100c565b611c7461085c565b9063ffffffff611e4b16565b905090565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316611cf5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061251a6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611d61576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124646022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600082820183811015611e4457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082821115611ebc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b801561114857611ed3308383611f57565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260096020526040902054611f09908263ffffffff611e4b16565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260096020908152604080832093909355600a905220439055600654611f50908263ffffffff611e4b16565b6006555050565b73ffffffffffffffffffffffffffffffffffffffff8316611fc3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806124f56025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661202f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061241b6023913960400191505060405180910390fd5b61203a838383612415565b61208a816040518060600160405280602681526020016124866026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff61222716565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822093909355908416815220546120cc908263ffffffff611dd016565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008261214257506000610856565b8282028284828161214f57fe5b0414611e44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806124ac6021913960400191505060405180910390fd5b600080821161221657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161221f57fe5b049392505050565b600081848411156122d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561229557818101518382015260200161227d565b50505050905090810190601f1680156122c25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff821661235a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61236660008383612415565b600254612379908263ffffffff611dd016565b60025573ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020546123b2908263ffffffff611dd016565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122088367e7da47534149ce4f9581bc0aa620f37feaea2940a8dc989f6f1f5fb411d64736f6c634300060b0033656e6452656c65617365426c6f636b203c20737461727452656c65617365426c6f636b"
    };
});
define("@scom/farming-contract/contracts/VestingToken.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/VestingToken.json.ts"], function (require, exports, eth_contract_5, VestingToken_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VestingToken = void 0;
    class VestingToken extends eth_contract_5.Contract {
        constructor(wallet, address) {
            super(wallet, address, VestingToken_json_1.default.abi, VestingToken_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.startReleaseBlock), this.wallet.utils.toString(params.endReleaseBlock), this.wallet.utils.toString(params.cap), this.wallet.utils.toString(params.vestingRatio)], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_5.BigNumber(result.value),
                _event: event
            };
        }
        parseLockEvent(receipt) {
            return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
        }
        decodeLockEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                direct: new eth_contract_5.BigNumber(result.direct),
                amount: new eth_contract_5.BigNumber(result.amount),
                _event: event
            };
        }
        parseOwnershipTransferredEvent(receipt) {
            return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
        }
        decodeOwnershipTransferredEvent(event) {
            let result = event.data;
            return {
                previousOwner: result.previousOwner,
                newOwner: result.newOwner,
                _event: event
            };
        }
        parseRedeemEvent(receipt) {
            return this.parseEvents(receipt, "Redeem").map(e => this.decodeRedeemEvent(e));
        }
        decodeRedeemEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                amount: new eth_contract_5.BigNumber(result.amount),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_5.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let canUnlockAmount_call = async (account, options) => {
                let result = await this.call('canUnlockAmount', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.canUnlockAmount = canUnlockAmount_call;
            let cap_call = async (options) => {
                let result = await this.call('cap', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.cap = cap_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.decimals = decimals_call;
            let endReleaseBlock_call = async (options) => {
                let result = await this.call('endReleaseBlock', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.endReleaseBlock = endReleaseBlock_call;
            let farming_call = async (options) => {
                let result = await this.call('farming', [], options);
                return result;
            };
            this.farming = farming_call;
            let lastUnlockBlock_call = async (account, options) => {
                let result = await this.call('lastUnlockBlock', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.lastUnlockBlock = lastUnlockBlock_call;
            let lockOf_call = async (account, options) => {
                let result = await this.call('lockOf', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.lockOf = lockOf_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let owner_call = async (options) => {
                let result = await this.call('owner', [], options);
                return result;
            };
            this.owner = owner_call;
            let redeeming_call = async (options) => {
                let result = await this.call('redeeming', [], options);
                return result;
            };
            this.redeeming = redeeming_call;
            let startReleaseBlock_call = async (options) => {
                let result = await this.call('startReleaseBlock', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.startReleaseBlock = startReleaseBlock_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalAvailableAmount_call = async (account, options) => {
                let result = await this.call('totalAvailableAmount', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.totalAvailableAmount = totalAvailableAmount_call;
            let totalBalanceOf_call = async (account, options) => {
                let result = await this.call('totalBalanceOf', [account], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.totalBalanceOf = totalBalanceOf_call;
            let totalLock_call = async (options) => {
                let result = await this.call('totalLock', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.totalLock = totalLock_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let unlockedSupply_call = async (options) => {
                let result = await this.call('unlockedSupply', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.unlockedSupply = unlockedSupply_call;
            let vestingRatio_call = async (options) => {
                let result = await this.call('vestingRatio', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.vestingRatio = vestingRatio_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let lockParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let lock_send = async (params, options) => {
                let result = await this.send('lock', lockParams(params), options);
                return result;
            };
            let lock_call = async (params, options) => {
                let result = await this.call('lock', lockParams(params), options);
                return;
            };
            this.lock = Object.assign(lock_send, {
                call: lock_call
            });
            let mintParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let redeemParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let redeem_send = async (params, options) => {
                let result = await this.send('redeem', redeemParams(params), options);
                return result;
            };
            let redeem_call = async (params, options) => {
                let result = await this.call('redeem', redeemParams(params), options);
                return;
            };
            this.redeem = Object.assign(redeem_send, {
                call: redeem_call
            });
            let renounceOwnership_send = async (options) => {
                let result = await this.send('renounceOwnership', [], options);
                return result;
            };
            let renounceOwnership_call = async (options) => {
                let result = await this.call('renounceOwnership', [], options);
                return;
            };
            this.renounceOwnership = Object.assign(renounceOwnership_send, {
                call: renounceOwnership_call
            });
            let setFarming_send = async (farming, options) => {
                let result = await this.send('setFarming', [farming], options);
                return result;
            };
            let setFarming_call = async (farming, options) => {
                let result = await this.call('setFarming', [farming], options);
                return;
            };
            this.setFarming = Object.assign(setFarming_send, {
                call: setFarming_call
            });
            let setRedeeming_send = async (redeeming, options) => {
                let result = await this.send('setRedeeming', [redeeming], options);
                return result;
            };
            let setRedeeming_call = async (redeeming, options) => {
                let result = await this.call('setRedeeming', [redeeming], options);
                return;
            };
            this.setRedeeming = Object.assign(setRedeeming_send, {
                call: setRedeeming_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferAll_send = async (to, options) => {
                let result = await this.send('transferAll', [to], options);
                return result;
            };
            let transferAll_call = async (to, options) => {
                let result = await this.call('transferAll', [to], options);
                return;
            };
            this.transferAll = Object.assign(transferAll_send, {
                call: transferAll_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
            let transferOwnership_send = async (newOwner, options) => {
                let result = await this.send('transferOwnership', [newOwner], options);
                return result;
            };
            let transferOwnership_call = async (newOwner, options) => {
                let result = await this.call('transferOwnership', [newOwner], options);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let unlock_send = async (options) => {
                let result = await this.send('unlock', [], options);
                return result;
            };
            let unlock_call = async (options) => {
                let result = await this.call('unlock', [], options);
                return;
            };
            this.unlock = Object.assign(unlock_send, {
                call: unlock_call
            });
        }
    }
    exports.VestingToken = VestingToken;
    VestingToken._abi = VestingToken_json_1.default.abi;
});
define("@scom/farming-contract/contracts/draft/AutoVestingToken.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/draft/AutoVestingToken.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_end", "type": "uint256" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "address", "name": "_farming", "type": "address" }, { "internalType": "address", "name": "_redeeming", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Lock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "duration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "end", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "farming", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "locked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "redeeming", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "start", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalVestable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "vestable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101206040523480156200001257600080fd5b5060405162001b4a38038062001b4a833981810160405260e08110156200003857600080fd5b81019080805160405193929190846401000000008211156200005957600080fd5b9083019060208201858111156200006f57600080fd5b82516401000000008111828201881017156200008a57600080fd5b82525081516020918201929091019080838360005b83811015620000b95781810151838201526020016200009f565b50505050905090810190601f168015620000e75780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010b57600080fd5b9083019060208201858111156200012157600080fd5b82516401000000008111828201881017156200013c57600080fd5b82525081516020918201929091019080838360005b838110156200016b57818101518382015260200162000151565b50505050905090810190601f168015620001995780820380516001836020036101000a031916815260200191505b506040908152602082810151918301516060840151608085015160a090950151895194975091955093929091849189918991620001dd916003919085019062000302565b508051620001f390600490602084019062000302565b50506005805460ff19166012179055508062000256576040805162461bcd60e51b815260206004820152601560248201527f45524332304361707065643a2063617020697320300000000000000000000000604482015290519081900360640190fd5b600655608085905260a08490526200027b8486620002a4602090811b62000ca217901c565b60c0526001600160601b0319606092831b811660e052911b166101005250620003a79350505050565b600082821115620002fc576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200034557805160ff191683800117855562000375565b8280016001018555821562000375579182015b828111156200037557825182559160200191906001019062000358565b506200038392915062000387565b5090565b620003a491905b808211156200038357600081556001016200038e565b90565b60805160a05160c05160e05160601c6101005160601c61173a620004106000398061067252806107805280610a6052508061092b5280610a3c52508061060f5280610ec9525080610c805280610e695280610ef1525080610bf55280610e97525061173a6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80634e3ad80f116100e3578063a457c2d71161008c578063cbf9fe5f11610066578063cbf9fe5f146104c5578063dd62ed3e146104f8578063efbe1c1c146105335761018d565b8063a457c2d71461044b578063a9059cbb14610484578063be9a6555146104bd5761018d565b806370a08231116100bd57806370a08231146103dd57806375a40a901461041057806395d89b41146104435761018d565b80634e3ad80f1461039c57806351a846f0146103cd57806356891412146103d55761018d565b806323b872dd11610145578063355274ea1161011f578063355274ea14610322578063395093511461032a57806340c10f19146103635761018d565b806323b872dd146102b95780632d820a10146102fc578063313ce567146103045761018d565b80630fb5a6b4116101765780630fb5a6b41461025c57806318160ddd146102765780631e9a69501461027e5761018d565b806306fdde0314610192578063095ea7b31461020f575b600080fd5b61019a61053b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d45781810151838201526020016101bc565b50505050905090810190601f1680156102015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102486004803603604081101561022557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105ef565b604080519115158252519081900360200190f35b61026461060d565b60408051918252519081900360200190f35b610264610631565b6102b76004803603604081101561029457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561065a565b005b610248600480360360608110156102cf57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107f6565b61026461089d565b61030c6108a3565b6040805160ff9092168252519081900360200190f35b6102646108ac565b6102486004803603604081101561034057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108b2565b6102b76004803603604081101561037957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610913565b6103a4610a3a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103a4610a5e565b610264610a82565b610264600480360360208110156103f357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a8f565b6102646004803603602081101561042657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ad3565b61019a610ae5565b6102486004803603604081101561046157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610b64565b6102486004803603604081101561049a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610bdf565b610264610bf3565b610264600480360360208110156104db57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c17565b6102646004803603604081101561050e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c46565b610264610c7e565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105e55780601f106105ba576101008083540402835291602001916105e5565b820191906000526020600020905b8154815290600101906020018083116105c857829003601f168201915b5050505050905090565b60006106036105fc610d19565b8484610d1d565b5060015b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610655610641600754610e64565b610649610f3b565b9063ffffffff610ca216565b905090565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146106fe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f56657374696e673a204e6f742066726f6d2072656465656d696e670000000000604482015290519081900360640190fd5b600061070983610a8f565b90508082111561077a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f56657374696e673a20496e73756666696369656e742062616c616e6365000000604482015290519081900360640190fd5b6107a5837f000000000000000000000000000000000000000000000000000000000000000084610f41565b60408051838152905173ffffffffffffffffffffffffffffffffffffffff8516917f222838db2794d11532d940e8dec38ae307ed0b63cd97c233322e221f998767a6919081900360200190a2505050565b6000610803848484610f41565b6108938461080f610d19565b61088e8560405180606001604052806028815260200161166f6028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061085a610d19565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61111d16565b610d1d565b5060019392505050565b60075481565b60055460ff1690565b60065490565b60006106036108bf610d19565b8461088e85600160006108d0610d19565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6111ce16565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146109b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56657374696e673a204e6f742066726f6d206661726d696e6700000000000000604482015290519081900360640190fd5b6109c18282611249565b6007546109d4908263ffffffff6111ce16565b60075573ffffffffffffffffffffffffffffffffffffffff8216600090815260086020526040902054610a0d908263ffffffff6111ce16565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602052604090209190915550565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610655600754610e64565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260086020526040812054610acb90610ac290610e64565b61064984611386565b90505b919050565b60086020526000908152604090205481565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105e55780601f106105ba576101008083540402835291602001916105e5565b6000610603610b71610d19565b8461088e856040518060600160405280602581526020016116e06025913960016000610b9b610d19565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61111d16565b6000610603610bec610d19565b8484610f41565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260086020526040812054610acb90610e64565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b7f000000000000000000000000000000000000000000000000000000000000000081565b600082821115610d1357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610d89576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116bc6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610df5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806116066022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000437f000000000000000000000000000000000000000000000000000000000000000011610e9557506000610ace565b7f0000000000000000000000000000000000000000000000000000000000000000431015610ec4575080610ace565b610f347f0000000000000000000000000000000000000000000000000000000000000000610f2884610f1c7f00000000000000000000000000000000000000000000000000000000000000004363ffffffff610ca216565b9063ffffffff6113ae16565b9063ffffffff61142116565b9050610ace565b60025490565b73ffffffffffffffffffffffffffffffffffffffff8316610fad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806116976025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611019576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115e36023913960400191505060405180910390fd5b6110248383836114a2565b611074816040518060600160405280602681526020016116286026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff61111d16565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822093909355908416815220546110b6908263ffffffff6111ce16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156111c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561118b578181015183820152602001611173565b50505050905090810190601f1680156111b85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561124257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166112cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6112d7600083836114a2565b6002546112ea908263ffffffff6111ce16565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054611323908263ffffffff6111ce16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6000826113bd57506000610607565b828202828482816113ca57fe5b0414611242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061164e6021913960400191505060405180910390fd5b600080821161149157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161149a57fe5b049392505050565b6114ad83838361152f565b73ffffffffffffffffffffffffffffffffffffffff83161561152a576114d283610a8f565b81111561152a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116286026913960400191505060405180910390fd5b505050565b61153a83838361152a565b73ffffffffffffffffffffffffffffffffffffffff831661152a5761155d6108ac565b61157582611569610631565b9063ffffffff6111ce16565b111561152a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220485009b90efd9c8cf09e339324542104217e96ad5b4cf36f5f3edb268211079364736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/draft/AutoVestingToken.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/draft/AutoVestingToken.json.ts"], function (require, exports, eth_contract_6, AutoVestingToken_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AutoVestingToken = void 0;
    class AutoVestingToken extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, AutoVestingToken_json_1.default.abi, AutoVestingToken_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.end), this.wallet.utils.toString(params.cap), params.farming, params.redeeming], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_6.BigNumber(result.value),
                _event: event
            };
        }
        parseLockEvent(receipt) {
            return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
        }
        decodeLockEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                amount: new eth_contract_6.BigNumber(result.amount),
                _event: event
            };
        }
        parseRedeemEvent(receipt) {
            return this.parseEvents(receipt, "Redeem").map(e => this.decodeRedeemEvent(e));
        }
        decodeRedeemEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                amount: new eth_contract_6.BigNumber(result.amount),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_6.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let cap_call = async (options) => {
                let result = await this.call('cap', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.cap = cap_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.decimals = decimals_call;
            let duration_call = async (options) => {
                let result = await this.call('duration', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.duration = duration_call;
            let end_call = async (options) => {
                let result = await this.call('end', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.end = end_call;
            let farming_call = async (options) => {
                let result = await this.call('farming', [], options);
                return result;
            };
            this.farming = farming_call;
            let locked_call = async (account, options) => {
                let result = await this.call('locked', [account], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.locked = locked_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let redeeming_call = async (options) => {
                let result = await this.call('redeeming', [], options);
                return result;
            };
            this.redeeming = redeeming_call;
            let start_call = async (options) => {
                let result = await this.call('start', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.start = start_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalLocked_call = async (options) => {
                let result = await this.call('totalLocked', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.totalLocked = totalLocked_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let totalVestable_call = async (options) => {
                let result = await this.call('totalVestable', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.totalVestable = totalVestable_call;
            let vestable_call = async (param1, options) => {
                let result = await this.call('vestable', [param1], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.vestable = vestable_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let redeemParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let redeem_send = async (params, options) => {
                let result = await this.send('redeem', redeemParams(params), options);
                return result;
            };
            let redeem_call = async (params, options) => {
                let result = await this.call('redeem', redeemParams(params), options);
                return;
            };
            this.redeem = Object.assign(redeem_send, {
                call: redeem_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    exports.AutoVestingToken = AutoVestingToken;
    AutoVestingToken._abi = AutoVestingToken_json_1.default.abi;
});
define("@scom/farming-contract/contracts/draft/MasterChefV2.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/draft/MasterChefV2.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "uint256", "name": "_rewardsPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "auth", "type": "bool" }], "name": "AuthChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "EmergencyWithdraw", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Harvest", "type": "event" },
            { "anonymous": false, "inputs": [], "name": "LogInit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC20", "name": "lpToken", "type": "address" }], "name": "LogPoolAddition", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "allocPoint", "type": "uint256" }], "name": "LogSetPool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint64", "name": "lastRewardBlock", "type": "uint64" }, { "indexed": false, "internalType": "uint256", "name": "lpSupply", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accRewardsPerShare", "type": "uint256" }], "name": "LogUpdatePool", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Withdraw", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "allocPoint", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_lpToken", "type": "address" }], "name": "add", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IRewardToken[]", "name": "_rewards", "type": "address[]" }], "name": "addRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "endBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "harvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lpToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "pids", "type": "uint256[]" }], "name": "massUpdatePools", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "owners", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingRewards", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "uint128", "name": "accRewardsPerShare", "type": "uint128" }, { "internalType": "uint64", "name": "lastRewardBlock", "type": "uint64" }, { "internalType": "uint64", "name": "allocPoint", "type": "uint64" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "poolLength", "outputs": [{ "internalType": "uint256", "name": "pools", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rely", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "rewardToken", "outputs": [{ "internalType": "contract IRewardToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rewardsPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_allocPoint", "type": "uint256" }], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_who", "type": "address" }, { "internalType": "bool", "name": "_allowed", "type": "bool" }], "name": "setWhiteList", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalAllocPoint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "int256", "name": "rewardDebt", "type": "int256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "withdrawAndHarvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162002d3338038062002d33833981810160405260608110156200003757600080fd5b508051602082015160409092015190919060006200005d6001600160e01b03620000d316565b6001600160a01b03811660008181526020818152604091829020805460ff191660019081179091558251908152915193945091927f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d929181900390910190a25060018055600892909255600955600a55620000d7565b3390565b612c4c80620000e76000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806351eb05a6116100ee5780638d14e127116100975780639c52a7f1116100715780639c52a7f114610623578063d18df53c14610656578063d1abb9071461068f578063d936547e146106ce576101a3565b80638d14e127146105575780638dbdbe6d1461059257806393f1a40b146105d1576101a3565b8063613ec914116100c8578063613ec9141461046457806365fae35e1461050757806378ed5d1f1461053a576101a3565b806351eb05a6146103cf57806357a5b58c146103ec5780635eeb67101461045c576101a3565b806318fccc76116101505780632f940c701161012a5780632f940c701461034857806348cd4cb114610381578063509b6c3f14610389576101a3565b806318fccc76146102b35780631ab06ee5146102ec5780632b8bbbe81461030f576101a3565b80630ad58d2f116101815780630ad58d2f146102115780631526fe271461025257806317caf6f1146102ab576101a3565b8063022914a7146101a8578063081e3eda146101ef578063083c632314610209575b600080fd5b6101db600480360360208110156101be57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610701565b604080519115158252519081900360200190f35b6101f7610716565b60408051918252519081900360200190f35b6101f761071c565b6102506004803603606081101561022757600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16610722565b005b61026f6004803603602081101561026857600080fd5b5035610967565b604080516fffffffffffffffffffffffffffffffff909416845267ffffffffffffffff9283166020850152911682820152519081900360600190f35b6101f76109d5565b610250600480360360408110156102c957600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166109db565b6102506004803603604081101561030257600080fd5b5080359060200135610c92565b6102506004803603604081101561032557600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610e31565b6102506004803603604081101561035e57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166110bf565b6101f76111f6565b6103a66004803603602081101561039f57600080fd5b50356111fc565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610250600480360360208110156103e557600080fd5b5035611230565b6102506004803603602081101561040257600080fd5b81019060208101813564010000000081111561041d57600080fd5b82018360208201111561042f57600080fd5b8035906020019184602083028401116401000000008311171561045157600080fd5b5090925090506115ba565b6101f76115ef565b6102506004803603602081101561047a57600080fd5b81019060208101813564010000000081111561049557600080fd5b8201836020820111156104a757600080fd5b803590602001918460208302840111640100000000831117156104c957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506115f5945050505050565b6102506004803603602081101561051d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661171f565b6103a66004803603602081101561055057600080fd5b5035611846565b6102506004803603604081101561056d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611853565b610250600480360360608110156105a857600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16611949565b61060a600480360360408110156105e757600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16611ba2565b6040805192835260208301919091528051918290030190f35b6102506004803603602081101561063957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611bc6565b6101f76004803603604081101561066c57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16611d87565b610250600480360360608110156106a557600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16611feb565b6101db600480360360208110156106e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612354565b60006020819052908152604090205460ff1681565b60045490565b600a5481565b6002600154141561079457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155323314806107b657503360009081526002602052604090205460ff165b6107bf57600080fd5b6107c883611230565b6107d0612b40565b600484815481106107dd57fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff700100000000000000000000000000000000830481168486015278010000000000000000000000000000000000000000000000009092049091168285015288855260068352838520338652909252919092208151919350916108ac9161089b9164e8d4a510009161088e9189911663ffffffff61236916565b8161089557fe5b046123e5565b60018301549063ffffffff61245b16565b600182015580546108c3908563ffffffff6124da16565b816000018190555061090c8385600588815481106108dd57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16919063ffffffff61255116565b60408051858152905173ffffffffffffffffffffffffffffffffffffffff851691879133917f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec2132919081900360200190a4505060018055505050565b6004818154811061097457fe5b6000918252602090912001546fffffffffffffffffffffffffffffffff8116915067ffffffffffffffff7001000000000000000000000000000000008204811691780100000000000000000000000000000000000000000000000090041683565b60075481565b60026001541415610a4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260015532331480610a6f57503360009081526002602052604090205460ff165b610a7857600080fd5b610a8182611230565b610a89612b40565b60048381548110610a9657fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff70010000000000000000000000000000000083048116848601527801000000000000000000000000000000000000000000000000909204909116828501528785526006835283852033865290925291832082518154939550909392610b459264e8d4a510009261088e92911663ffffffff61236916565b90506000610b68610b6384600101548461245b90919063ffffffff16565b6125de565b6001840183905590508015610c4f5760035460005b81811015610c4c5760038181548110610b9257fe5b6000918252602080832090910154604080517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015260248201899052915191909216936340c10f1993604480850194919392918390030190829087803b158015610c1857600080fd5b505af1158015610c2c573d6000803e3d6000fd5b505050506040513d6020811015610c4257600080fd5b5050600101610b7d565b50505b604080518281529051879133917f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549181900360200190a350506001805550505050565b600080610c9d612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610d3257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b610d8d81610d8160048581548110610d4657fe5b600091825260209091200154600754907801000000000000000000000000000000000000000000000000900467ffffffffffffffff166124da565b9063ffffffff61265716565b6007819055508060048381548110610da157fe5b600091825260209182902001805467ffffffffffffffff9390931678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff9093169290921790915560408051838152905184927f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c928290030190a25050565b600080610e3c612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610ed157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b6007544390610ee6908463ffffffff61265716565b60075560058054600181810183557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101805473ffffffffffffffffffffffffffffffffffffffff86167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051606081018252600080825267ffffffffffffffff808816602084019081528a8216948401948552600480548089018255935292517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805493519451821678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff95909216700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff949094167fffffffffffffffffffffffffffffffff000000000000000000000000000000009095169490941792909216929092179290921617905591546110879163ffffffff6124da16565b6040805186815290517f4710feb78e3bce8d2e3ca2989a8eb2f8bcd32a6a55b4535942c180fc4d2e29529181900360200190a3505050565b6002600154141561113157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001553233148061115357503360009081526002602052604090205460ff165b61115c57600080fd5b60008281526006602090815260408083203384529091528120805482825560018201929092556005805491929161119c918591849190889081106108dd57fe5b60408051828152905173ffffffffffffffffffffffffffffffffffffffff851691869133917f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b919081900360200190a45050600180555050565b60095481565b6003818154811061120957fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60006004828154811061123f57fe5b60009182526020909120018054909150700100000000000000000000000000000000900467ffffffffffffffff164311156115b65760006005838154811061128357fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b1580156112f857600080fd5b505afa15801561130c573d6000803e3d6000fd5b505050506040513d602081101561132257600080fd5b50519050801561143557815460009061135a904390700100000000000000000000000000000000900467ffffffffffffffff166124da565b60075484546008549293506000926113aa917801000000000000000000000000000000000000000000000000900467ffffffffffffffff169061139e908690612369565b9063ffffffff61236916565b816113b157fe5b0490506113f6836113cd8364e8d4a5100063ffffffff61236916565b816113d457fe5b86546fffffffffffffffffffffffffffffffff1691900463ffffffff61265716565b84547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9190911617845550505b81547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004367ffffffffffffffff1602178255600480548391908590811061148b57fe5b60009182526020918290208354910180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92831617808255845467ffffffffffffffff70010000000000000000000000000000000091829004811682027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff90931692909217808455955478010000000000000000000000000000000000000000000000009081900483160277ffffffffffffffffffffffffffffffffffffffffffffffff9096169590951790915585546040805195820490921685529284018590529116828201525184917f0fc9545022a542541ad085d091fb09a2ab36fee366a4576ab63714ea907ad353919081900360600190a2505b5050565b8060005b818110156115e9576115e18484838181106115d557fe5b90506020020135611230565b6001016115be565b50505050565b60085481565b600080611600612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661169557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b805160005b8181101561171a5760038382815181106116b057fe5b60209081029190910181015182546001808201855560009485529290932090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091550161169a565b505050565b60008061172a612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166117bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155825190815291517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b6005818154811061120957fe5b60008061185e612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166118f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b600260015414156119bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155323314806119dd57503360009081526002602052604090205460ff165b6119e657600080fd5b6119ef83611230565b6119f7612b40565b60048481548110611a0457fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff8116825267ffffffffffffffff7001000000000000000000000000000000008204811683850152780100000000000000000000000000000000000000000000000090910416818401528784526006825282842073ffffffffffffffffffffffffffffffffffffffff871685529091529120805491925090611ab5908563ffffffff61265716565b81558151611afc90611aeb9064e8d4a510009061088e9088906fffffffffffffffffffffffffffffffff1663ffffffff61236916565b60018301549063ffffffff6126cb16565b8160010181905550611b4733308660058981548110611b1757fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692919063ffffffff61274a16565b60408051858152905173ffffffffffffffffffffffffffffffffffffffff851691879133917f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b47919081900360200190a4505060018055505050565b60066020908152600092835260408084209091529082529020805460019091015482565b600080611bd1612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16611c6657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b611c6e612653565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611d0857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f417574683a2043616e6e6f742073656c662064656e7900000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526020818152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558051928352517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b6000611d91612b40565b60048481548110611d9e57fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff70010000000000000000000000000000000083048116848601527801000000000000000000000000000000000000000000000000909204909116828501528885526006835283852073ffffffffffffffffffffffffffffffffffffffff89168652909252918320825160058054949650919492169288908110611e5557fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b158015611eca57600080fd5b505afa158015611ede573d6000803e3d6000fd5b505050506040513d6020811015611ef457600080fd5b5051602085015190915067ffffffffffffffff1643118015611f1557508015155b15611fa9576000611f3d856020015167ffffffffffffffff16436124da90919063ffffffff16565b90506000600754611f6b876040015167ffffffffffffffff1661139e6008548661236990919063ffffffff16565b81611f7257fe5b049050611fa483611f8e8364e8d4a5100063ffffffff61236916565b81611f9557fe5b8691900463ffffffff61265716565b935050505b611fe0610b638460010154611fd464e8d4a5100061088e87896000015461236990919063ffffffff16565b9063ffffffff61245b16565b979650505050505050565b6002600154141561205d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001553233148061207f57503360009081526002602052604090205460ff165b61208857600080fd5b61209183611230565b612099612b40565b600484815481106120a657fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff700100000000000000000000000000000000830481168486015278010000000000000000000000000000000000000000000000009092049091168285015288855260068352838520338652909252918320825181549395509093926121559264e8d4a510009261088e92911663ffffffff61236916565b90506000612173610b6384600101548461245b90919063ffffffff16565b90506121b76121aa64e8d4a5100061088e87600001516fffffffffffffffffffffffffffffffff168a61236990919063ffffffff16565b839063ffffffff61245b16565b600184015582546121ce908763ffffffff6124da16565b835580156122ae5760035460005b818110156122ab57600381815481106121f157fe5b6000918252602080832090910154604080517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015260248201899052915191909216936340c10f1993604480850194919392918390030190829087803b15801561227757600080fd5b505af115801561228b573d6000803e3d6000fd5b505050506040513d60208110156122a157600080fd5b50506001016121dc565b50505b6122c0858760058a815481106108dd57fe5b60408051878152905173ffffffffffffffffffffffffffffffffffffffff871691899133917f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec2132919081900360200190a4604080518281529051889133917f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549181900360200190a35050600180555050505050565b60026020526000908152604090205460ff1681565b600082612378575060006123df565b8282028284828161238557fe5b04146123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612ba86021913960400191505060405180910390fd5b90505b92915050565b80600081121561245657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b919050565b60008183038183128015906124705750838113155b80612485575060008312801561248557508381135b6123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612bc96024913960400191505060405180910390fd5b60008282111561254b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261171a9084906127db565b60008082121561264f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b5090565b3390565b6000828201838110156123dc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008282018183128015906126e05750838112155b806126f557506000831280156126f557508381125b6123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612b616021913960400191505060405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526115e99085905b606061283d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166128b39092919063ffffffff16565b80519091501561171a5780806020019051602081101561285c57600080fd5b505161171a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612bed602a913960400191505060405180910390fd5b60606128c284846000856128cc565b90505b9392505050565b606082471015612927576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612b826026913960400191505060405180910390fd5b61293085612a7c565b61299b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612a0557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016129c8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612a67576040519150601f19603f3d011682016040523d82523d6000602084013e612a6c565b606091505b5091509150611fe0828286612a82565b3b151590565b60608315612a915750816128c5565b825115612aa15782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612b05578181015183820152602001612aed565b50505050905090810190601f168015612b325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051606081018252600080825260208201819052918101919091529056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e080aaf29459c47fba792a71babbeb69cec19ba24ea3d7c810401880f2289f8164736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/draft/MasterChefV2.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/draft/MasterChefV2.json.ts"], function (require, exports, eth_contract_7, MasterChefV2_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MasterChefV2 = void 0;
    class MasterChefV2 extends eth_contract_7.Contract {
        constructor(wallet, address) {
            super(wallet, address, MasterChefV2_json_1.default.abi, MasterChefV2_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([this.wallet.utils.toString(params.rewardsPerBlock), this.wallet.utils.toString(params.startBlock), this.wallet.utils.toString(params.endBlock)], options);
        }
        parseAuthChangedEvent(receipt) {
            return this.parseEvents(receipt, "AuthChanged").map(e => this.decodeAuthChangedEvent(e));
        }
        decodeAuthChangedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                auth: result.auth,
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_7.BigNumber(result.pid),
                amount: new eth_contract_7.BigNumber(result.amount),
                to: result.to,
                _event: event
            };
        }
        parseEmergencyWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
        }
        decodeEmergencyWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_7.BigNumber(result.pid),
                amount: new eth_contract_7.BigNumber(result.amount),
                to: result.to,
                _event: event
            };
        }
        parseHarvestEvent(receipt) {
            return this.parseEvents(receipt, "Harvest").map(e => this.decodeHarvestEvent(e));
        }
        decodeHarvestEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_7.BigNumber(result.pid),
                amount: new eth_contract_7.BigNumber(result.amount),
                _event: event
            };
        }
        parseLogInitEvent(receipt) {
            return this.parseEvents(receipt, "LogInit").map(e => this.decodeLogInitEvent(e));
        }
        decodeLogInitEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseLogPoolAdditionEvent(receipt) {
            return this.parseEvents(receipt, "LogPoolAddition").map(e => this.decodeLogPoolAdditionEvent(e));
        }
        decodeLogPoolAdditionEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_7.BigNumber(result.pid),
                allocPoint: new eth_contract_7.BigNumber(result.allocPoint),
                lpToken: result.lpToken,
                _event: event
            };
        }
        parseLogSetPoolEvent(receipt) {
            return this.parseEvents(receipt, "LogSetPool").map(e => this.decodeLogSetPoolEvent(e));
        }
        decodeLogSetPoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_7.BigNumber(result.pid),
                allocPoint: new eth_contract_7.BigNumber(result.allocPoint),
                _event: event
            };
        }
        parseLogUpdatePoolEvent(receipt) {
            return this.parseEvents(receipt, "LogUpdatePool").map(e => this.decodeLogUpdatePoolEvent(e));
        }
        decodeLogUpdatePoolEvent(event) {
            let result = event.data;
            return {
                pid: new eth_contract_7.BigNumber(result.pid),
                lastRewardBlock: new eth_contract_7.BigNumber(result.lastRewardBlock),
                lpSupply: new eth_contract_7.BigNumber(result.lpSupply),
                accRewardsPerShare: new eth_contract_7.BigNumber(result.accRewardsPerShare),
                _event: event
            };
        }
        parseWithdrawEvent(receipt) {
            return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
        }
        decodeWithdrawEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                pid: new eth_contract_7.BigNumber(result.pid),
                amount: new eth_contract_7.BigNumber(result.amount),
                to: result.to,
                _event: event
            };
        }
        assign() {
            let endBlock_call = async (options) => {
                let result = await this.call('endBlock', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.endBlock = endBlock_call;
            let lpToken_call = async (param1, options) => {
                let result = await this.call('lpToken', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.lpToken = lpToken_call;
            let owners_call = async (param1, options) => {
                let result = await this.call('owners', [param1], options);
                return result;
            };
            this.owners = owners_call;
            let pendingRewardsParams = (params) => [this.wallet.utils.toString(params.pid), params.user];
            let pendingRewards_call = async (params, options) => {
                let result = await this.call('pendingRewards', pendingRewardsParams(params), options);
                return new eth_contract_7.BigNumber(result);
            };
            this.pendingRewards = pendingRewards_call;
            let poolInfo_call = async (param1, options) => {
                let result = await this.call('poolInfo', [this.wallet.utils.toString(param1)], options);
                return {
                    accRewardsPerShare: new eth_contract_7.BigNumber(result.accRewardsPerShare),
                    lastRewardBlock: new eth_contract_7.BigNumber(result.lastRewardBlock),
                    allocPoint: new eth_contract_7.BigNumber(result.allocPoint)
                };
            };
            this.poolInfo = poolInfo_call;
            let poolLength_call = async (options) => {
                let result = await this.call('poolLength', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.poolLength = poolLength_call;
            let rewardToken_call = async (param1, options) => {
                let result = await this.call('rewardToken', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.rewardToken = rewardToken_call;
            let rewardsPerBlock_call = async (options) => {
                let result = await this.call('rewardsPerBlock', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.rewardsPerBlock = rewardsPerBlock_call;
            let startBlock_call = async (options) => {
                let result = await this.call('startBlock', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.startBlock = startBlock_call;
            let totalAllocPoint_call = async (options) => {
                let result = await this.call('totalAllocPoint', [], options);
                return new eth_contract_7.BigNumber(result);
            };
            this.totalAllocPoint = totalAllocPoint_call;
            let userInfoParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let userInfo_call = async (params, options) => {
                let result = await this.call('userInfo', userInfoParams(params), options);
                return {
                    amount: new eth_contract_7.BigNumber(result.amount),
                    rewardDebt: new eth_contract_7.BigNumber(result.rewardDebt)
                };
            };
            this.userInfo = userInfo_call;
            let whitelisted_call = async (param1, options) => {
                let result = await this.call('whitelisted', [param1], options);
                return result;
            };
            this.whitelisted = whitelisted_call;
            let addParams = (params) => [this.wallet.utils.toString(params.allocPoint), params.lpToken];
            let add_send = async (params, options) => {
                let result = await this.send('add', addParams(params), options);
                return result;
            };
            let add_call = async (params, options) => {
                let result = await this.call('add', addParams(params), options);
                return;
            };
            this.add = Object.assign(add_send, {
                call: add_call
            });
            let addRewards_send = async (rewards, options) => {
                let result = await this.send('addRewards', [rewards], options);
                return result;
            };
            let addRewards_call = async (rewards, options) => {
                let result = await this.call('addRewards', [rewards], options);
                return;
            };
            this.addRewards = Object.assign(addRewards_send, {
                call: addRewards_call
            });
            let deny_send = async (account, options) => {
                let result = await this.send('deny', [account], options);
                return result;
            };
            let deny_call = async (account, options) => {
                let result = await this.call('deny', [account], options);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let depositParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount), params.to];
            let deposit_send = async (params, options) => {
                let result = await this.send('deposit', depositParams(params), options);
                return result;
            };
            let deposit_call = async (params, options) => {
                let result = await this.call('deposit', depositParams(params), options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
            let emergencyWithdrawParams = (params) => [this.wallet.utils.toString(params.pid), params.to];
            let emergencyWithdraw_send = async (params, options) => {
                let result = await this.send('emergencyWithdraw', emergencyWithdrawParams(params), options);
                return result;
            };
            let emergencyWithdraw_call = async (params, options) => {
                let result = await this.call('emergencyWithdraw', emergencyWithdrawParams(params), options);
                return;
            };
            this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
                call: emergencyWithdraw_call
            });
            let harvestParams = (params) => [this.wallet.utils.toString(params.pid), params.to];
            let harvest_send = async (params, options) => {
                let result = await this.send('harvest', harvestParams(params), options);
                return result;
            };
            let harvest_call = async (params, options) => {
                let result = await this.call('harvest', harvestParams(params), options);
                return;
            };
            this.harvest = Object.assign(harvest_send, {
                call: harvest_call
            });
            let massUpdatePools_send = async (pids, options) => {
                let result = await this.send('massUpdatePools', [this.wallet.utils.toString(pids)], options);
                return result;
            };
            let massUpdatePools_call = async (pids, options) => {
                let result = await this.call('massUpdatePools', [this.wallet.utils.toString(pids)], options);
                return;
            };
            this.massUpdatePools = Object.assign(massUpdatePools_send, {
                call: massUpdatePools_call
            });
            let rely_send = async (account, options) => {
                let result = await this.send('rely', [account], options);
                return result;
            };
            let rely_call = async (account, options) => {
                let result = await this.call('rely', [account], options);
                return;
            };
            this.rely = Object.assign(rely_send, {
                call: rely_call
            });
            let setParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.allocPoint)];
            let set_send = async (params, options) => {
                let result = await this.send('set', setParams(params), options);
                return result;
            };
            let set_call = async (params, options) => {
                let result = await this.call('set', setParams(params), options);
                return;
            };
            this.set = Object.assign(set_send, {
                call: set_call
            });
            let setWhiteListParams = (params) => [params.who, params.allowed];
            let setWhiteList_send = async (params, options) => {
                let result = await this.send('setWhiteList', setWhiteListParams(params), options);
                return result;
            };
            let setWhiteList_call = async (params, options) => {
                let result = await this.call('setWhiteList', setWhiteListParams(params), options);
                return;
            };
            this.setWhiteList = Object.assign(setWhiteList_send, {
                call: setWhiteList_call
            });
            let updatePool_send = async (pid, options) => {
                let result = await this.send('updatePool', [this.wallet.utils.toString(pid)], options);
                return result;
            };
            let updatePool_call = async (pid, options) => {
                let result = await this.call('updatePool', [this.wallet.utils.toString(pid)], options);
                return;
            };
            this.updatePool = Object.assign(updatePool_send, {
                call: updatePool_call
            });
            let withdrawParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount), params.to];
            let withdraw_send = async (params, options) => {
                let result = await this.send('withdraw', withdrawParams(params), options);
                return result;
            };
            let withdraw_call = async (params, options) => {
                let result = await this.call('withdraw', withdrawParams(params), options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
            let withdrawAndHarvestParams = (params) => [this.wallet.utils.toString(params.pid), this.wallet.utils.toString(params.amount), params.to];
            let withdrawAndHarvest_send = async (params, options) => {
                let result = await this.send('withdrawAndHarvest', withdrawAndHarvestParams(params), options);
                return result;
            };
            let withdrawAndHarvest_call = async (params, options) => {
                let result = await this.call('withdrawAndHarvest', withdrawAndHarvestParams(params), options);
                return;
            };
            this.withdrawAndHarvest = Object.assign(withdrawAndHarvest_send, {
                call: withdrawAndHarvest_call
            });
        }
    }
    exports.MasterChefV2 = MasterChefV2;
    MasterChefV2._abi = MasterChefV2_json_1.default.abi;
});
define("@scom/farming-contract/contracts/test/MockERC20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/farming-contract/contracts/test/MockERC20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "uint256", "name": "_initialSupply", "type": "uint256" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b506040516200122738038062001227833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208281015192909101518551929450925084918691620001c591600391850190620003c8565b508051620001db906004906020840190620003c8565b50506005805460ff1916601290811790915560ff83161490506200020d576200020d816001600160e01b036200023316565b811562000229576200022933836001600160e01b036200024916565b505050506200046d565b6005805460ff191660ff92909216919091179055565b6001600160a01b038216620002a5576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002bc600083836001600160e01b036200036116565b620002d8816002546200036660201b620006de1790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200030b918390620006de62000366821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620003c1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200040b57805160ff19168380011785556200043b565b828001600101855582156200043b579182015b828111156200043b5782518255916020019190600101906200041e565b50620004499291506200044d565b5090565b6200046a91905b8082111562000449576000815560010162000454565b90565b610daa806200047d6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806340c10f1911610081578063a457c2d71161005b578063a457c2d7146102cd578063a9059cbb14610306578063dd62ed3e1461033f576100d4565b806340c10f191461025757806370a082311461029257806395d89b41146102c5576100d4565b806323b872dd116100b257806323b872dd146101bd578063313ce56714610200578063395093511461021e576100d4565b806306fdde03146100d9578063095ea7b31461015657806318160ddd146101a3575b600080fd5b6100e161037a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011b578181015183820152602001610103565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018f6004803603604081101561016c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561042e565b604080519115158252519081900360200190f35b6101ab61044b565b60408051918252519081900360200190f35b61018f600480360360608110156101d357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610451565b6102086104f8565b6040805160ff9092168252519081900360200190f35b61018f6004803603604081101561023457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610501565b6102906004803603604081101561026d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610562565b005b6101ab600480360360208110156102a857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610570565b6100e1610598565b61018f600480360360408110156102e357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610617565b61018f6004803603604081101561031c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610692565b6101ab6004803603604081101561035557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166106a6565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061044261043b610759565b848461075d565b50600192915050565b60025490565b600061045e8484846108a4565b6104ee8461046a610759565b6104e985604051806060016040528060288152602001610cdf6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906104b5610759565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610a8016565b61075d565b5060019392505050565b60055460ff1690565b600061044261050e610759565b846104e9856001600061051f610759565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6106de16565b61056c8282610b31565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104245780601f106103f957610100808354040283529160200191610424565b6000610442610624610759565b846104e985604051806060016040528060258152602001610d50602591396001600061064e610759565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a8016565b600061044261069f610759565b84846108a4565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561075257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166107c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610d2c6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610835576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610c976022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610910576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610d076025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661097c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610c746023913960400191505060405180910390fd5b610987838383610c6e565b6109d781604051806060016040528060268152602001610cb96026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff610a8016565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610a19908263ffffffff6106de16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aee578181015183820152602001610ad6565b50505050905090810190601f168015610b1b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610bb357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610bbf60008383610c6e565b600254610bd2908263ffffffff6106de16565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610c0b908263ffffffff6106de16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212203fa141b6f2c58894ec4d28ca32d27a193e00f607c64f7359f5440cdc1f4c658564736f6c634300060b0033"
    };
});
define("@scom/farming-contract/contracts/test/MockERC20.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/farming-contract/contracts/test/MockERC20.json.ts"], function (require, exports, eth_contract_8, MockERC20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockERC20 = void 0;
    class MockERC20 extends eth_contract_8.Contract {
        constructor(wallet, address) {
            super(wallet, address, MockERC20_json_1.default.abi, MockERC20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.symbol, params.name, this.wallet.utils.toString(params.initialSupply), this.wallet.utils.toString(params.decimals)], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_8.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_8.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_8.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.decimals = decimals_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_8.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.value)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    exports.MockERC20 = MockERC20;
    MockERC20._abi = MockERC20_json_1.default.abi;
});
define("@scom/farming-contract/contracts/index.ts", ["require", "exports", "@scom/farming-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", "@scom/farming-contract/contracts/Farming.ts", "@scom/farming-contract/contracts/MasterChef.ts", "@scom/farming-contract/contracts/Redeeming.ts", "@scom/farming-contract/contracts/VestingToken.ts", "@scom/farming-contract/contracts/draft/AutoVestingToken.ts", "@scom/farming-contract/contracts/draft/MasterChefV2.ts", "@scom/farming-contract/contracts/test/MockERC20.ts"], function (require, exports, ERC20_1, Farming_1, MasterChef_1, Redeeming_1, VestingToken_1, AutoVestingToken_1, MasterChefV2_1, MockERC20_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockERC20 = exports.MasterChefV2 = exports.AutoVestingToken = exports.VestingToken = exports.Redeeming = exports.MasterChef = exports.Farming = exports.ERC20 = void 0;
    Object.defineProperty(exports, "ERC20", { enumerable: true, get: function () { return ERC20_1.ERC20; } });
    Object.defineProperty(exports, "Farming", { enumerable: true, get: function () { return Farming_1.Farming; } });
    Object.defineProperty(exports, "MasterChef", { enumerable: true, get: function () { return MasterChef_1.MasterChef; } });
    Object.defineProperty(exports, "Redeeming", { enumerable: true, get: function () { return Redeeming_1.Redeeming; } });
    Object.defineProperty(exports, "VestingToken", { enumerable: true, get: function () { return VestingToken_1.VestingToken; } });
    Object.defineProperty(exports, "AutoVestingToken", { enumerable: true, get: function () { return AutoVestingToken_1.AutoVestingToken; } });
    Object.defineProperty(exports, "MasterChefV2", { enumerable: true, get: function () { return MasterChefV2_1.MasterChefV2; } });
    Object.defineProperty(exports, "MockERC20", { enumerable: true, get: function () { return MockERC20_1.MockERC20; } });
});
define("@scom/farming-contract", ["require", "exports", "@scom/farming-contract/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contracts = void 0;
    ///<amd-module name='@scom/farming-contract'/> 
    exports.Contracts = Contracts;
});
