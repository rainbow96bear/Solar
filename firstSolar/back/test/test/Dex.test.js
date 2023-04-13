const Dex = artifacts.require("Dex");

contract("Dex", (accounts) => {
  console.log(accounts);

  let test;

  describe("Test Contract", () => {
    it("deploy", async () => {
      test = await Dex.deployed();
      console.log(test);
    });

    it("getpoolInfo", async () => {
      console.log(await test.getpoolInfo.call());
    });

    it("getLPBalance", async () => {
      console.log(await getLPBalance(0).call());
    });
  });
});
