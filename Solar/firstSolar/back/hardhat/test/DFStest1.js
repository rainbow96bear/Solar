const { ethers } = require("hardhat");
const { expect } = require("chai");

// const MyContract = await ethers.getContractFactory("MyContract");
// const myContract = await MyContract.deploy();

describe("DFStest1", function () {
  let DFStest1Contract;

  beforeEach(async function () {
    // 배포된 스마트 컨트랙트 인스턴스를 불러옵니다.
    const address = "0x7764581d00309F7bc1e5f13feefea927B8Ead2BB";
    DFStest1Contract = await ethers.getContractAt("DFStest1", address);

    // 이후에 필요한 초기화 작업 등을 수행합니다.
    // ...
  });

  it("should do something", async function () {
    // console.log("MyContract deployed to:", DFStest1Contract.address);
    // 테스트를 수행하고 결과를 검증합니다.
    // ...
    console.log(DFStest1Contract);
  });

  it("should return the correct symbol", async function () {
    const symbol = await DFStest1Contract.symbol();
    console.log(symbol);
    expect(symbol).to.equal("BNB");
  });
  it("balanceOf", async function () {
    const balanceOf = await DFStest1Contract.balanceOf(
      "0x81E7909f56a71ccEAaC2Cbd6d05E84C639Cca868"
    );
    console.log(balanceOf);
  });
  it("transfer", async function () {
    // await DFStest1Contract.transfer(
    //   "0x81E7909f56a71ccEAaC2Cbd6d05E84C639Cca868",
    //   "10000000000000000000"
    // );
    // console.log(await DFStest1Contract.totalSupply());
  });
});
