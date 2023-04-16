const DFSToken = artifacts.require("DFSToken");
// 컴파일 후 생성된 Json 파일명을 전달하여 스마트 컨트랙트 데이터를 가져온다. // 여기서는 bulid폴더안에 Test.json파일

module.exports = function (deployer) {
  // deployer : truffle이 제공하는 배포를위한 객체
  deployer.deploy(DFSToken, "DFSToken", "DFS", "100000");
};
