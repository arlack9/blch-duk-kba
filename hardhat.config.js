/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  require('@nomicfoundation/hardhat-toolbox');
  
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
