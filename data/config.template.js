module.exports = {
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  deployer: {
    address: '',
    privateKey: ''
  },
  deploymentOptionsArray: {
    vestingTokenOptions: {
      name: "OpenSwap Farming Token",
      symbol: "OFT",
      startReleaseBlock: 19833200,
      endReleaseBlock: 20833200,
      cap: "999999999999",
      vestingRatio: "1"
    },
    masterChefOptions: {
      rewardsPerBlock: "0.25",
      startBlock: 19229200,
      endBlock: 19833200,
      bonusEndBlock: 19229200
    },
    redeemingOptions: {
      rewardPerVesting: [1],
      reward: [''], 
      convertingRatio: ["1"],
      admin: ''
    },
    poolOptions: {
      allocPoint: "100",
      lpToken: '', 
      withUpdate: true
    }
  }
}