import { Contracts } from "../src";
import { BigNumber, Utils, Wallet, Erc20 } from "@ijstech/eth-wallet";
import * as Config from '../data/config';

let rpcUrl = Config.rpcUrl
let account = Config.deployer;

async function deploy() {
  let { vestingTokenOptions, masterChefOptions, redeemingOptions, poolOptions } = Config.deploymentOptionsArray;
  let wallet = new Wallet(rpcUrl, account);
  let vestingToken = new Contracts.VestingToken(wallet);
  let vestingTokenAddress = await vestingToken.deploy({
    name: vestingTokenOptions.name,
    symbol: vestingTokenOptions.symbol,
    startReleaseBlock: vestingTokenOptions.startReleaseBlock,
    endReleaseBlock: vestingTokenOptions.endReleaseBlock,
    cap: Utils.toDecimals(vestingTokenOptions.cap),
    vestingRatio: Utils.toDecimals(vestingTokenOptions.vestingRatio)
  })
  console.log('vestingTokenAddress', vestingTokenAddress)
  let masterChef = new Contracts.MasterChef(wallet);
  let masterChefAddress = await masterChef.deploy({
    rewardToken: [vestingTokenAddress],
    rewardsPerBlock: Utils.toDecimals(masterChefOptions.rewardsPerBlock),
    startBlock: masterChefOptions.startBlock,
    endBlock: masterChefOptions.endBlock,
    bonusEndBlock: masterChefOptions.bonusEndBlock
  })
  console.log('masterChefAddress', masterChefAddress)
  let redeeming = new Contracts.Redeeming(wallet);
  let redeemingAddress = await redeeming.deploy({
    farming: masterChefAddress,
    vesting: [vestingTokenAddress],
    rewardPerVesting: redeemingOptions.rewardPerVesting,
    reward: redeemingOptions.reward,
    convertingRatio: redeemingOptions.convertingRatio.map(v => Utils.toDecimals(v)),
    admin: redeemingOptions.admin
  });
  console.log('redeemingAddress', redeemingAddress)
  await vestingToken.setFarming(masterChefAddress);
  await vestingToken.setRedeeming(redeemingAddress);

  await masterChef.add({
    allocPoint: Utils.toDecimals(poolOptions.allocPoint),
    lpToken: poolOptions.lpToken,
    withUpdate: poolOptions.withUpdate
  })
}

deploy();