async function main() {
  // 스마트 컨트랙트 컴파일
  const Dex = await ethers.getContractFactory("Dex");
  const _DFSTokenA = "0x6dFAA7703F0C6a708CaD4546E9d202fFD4262817";

  const DexContract = await Dex.deploy(_DFSTokenA);

  // 스마트 컨트랙트 배포
  await DexContract.deployed();
  console.log("MyContract deployed to:", DexContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
