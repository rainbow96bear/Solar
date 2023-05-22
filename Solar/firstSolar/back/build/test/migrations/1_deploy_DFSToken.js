const DFSToken = artifacts.require("DFSToken");
module.exports = function (deployer) {
    deployer.deploy(DFSToken, "DFSToken", "DFS", "100000");
};
