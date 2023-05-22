async function main() {
  // 스마트 컨트랙트 컴파일
  const DFStest1 = await ethers.getContractFactory("DFStest1");
  const _name = "BNB";
  const _symbol = "BNB";
  const _amount = "10000";

  const DFStest1Contract = await DFStest1.deploy(_name, _symbol, _amount);

  // 스마트 컨트랙트 배포
  await DFStest1Contract.deployed();
  console.log("MyContract deployed to:", DFStest1Contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
