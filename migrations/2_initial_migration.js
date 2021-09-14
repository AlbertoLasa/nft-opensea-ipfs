const Nfts = artifacts.require("NftEjm");

module.exports = function (deployer) {
  deployer.deploy(Nfts, 'HEROES', 'NFTS');
};
