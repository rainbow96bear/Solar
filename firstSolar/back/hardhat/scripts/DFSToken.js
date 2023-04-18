async function main() {
  // 스마트 컨트랙트 컴파일
  const DFSToken = await ethers.getContractFactory("DFSToken");
  const _name = "DFS";
  const _symbol = "DFS";
  const _amount = "100000";

  const DFSTokenContract = await DFSToken.deploy(_name, _symbol, _amount);

  // 스마트 컨트랙트 배포
  await DFSTokenContract.deployed();
  console.log("MyContract deployed to:", DFSTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
