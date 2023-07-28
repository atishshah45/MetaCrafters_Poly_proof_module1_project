require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-ethers");
//require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [ process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [ process.env.PRIVATE_KEY],
    },
  },
};
