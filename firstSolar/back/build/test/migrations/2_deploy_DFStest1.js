const DFStest1 = artifacts.require("DFStest1");
module.exports = function (deployer) {
    deployer.deploy(DFStest1, "BNB", "ETH", "100000");
};
