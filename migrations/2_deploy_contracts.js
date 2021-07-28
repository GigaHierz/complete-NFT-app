const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("NFT");

module.exports = function (deployer) {
  await deployer.deploy(ConvertLib);
  const nft = await NFT.deployed();
  await nft.min(accounts[0]);
};
