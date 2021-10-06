// const ConvertLib = artifacts.require("ConvertLib");
const NFT = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(NFT);
  // const nft = NFT.deployed();
  // nft.min(accounts[0]);
};
