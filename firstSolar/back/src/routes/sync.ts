import express from "express";
import { BlockVisionProvider, BvNetwork } from "blockvision.js";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/apiUse", async (req, res) => {
  try {
    const bv = new BlockVisionProvider(BvNetwork.POL_TESTNET);
    // let tempData = await bv
    //   .getERC20Transfers({
    //     toAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    //     // fromBlock: 12000000,
    //     // toBlock: 12000010,
    //     pageSize: 1,
    //   })
    //   .then((transfers) => {
    //     console.log(transfers);
    //   });
    // console.log(tempData);
    // let tempData = await bv.getBalance(
    //   "0xa984DD0ddFf49dC2D164648A5E865F0275B0C6f1"
    // );
    let tempData = await bv.getAccountDeFiPortfolio({
      protocol: "0x",
      accountAddress: "0xe1bdcd3b70e077d2d66adcbe78be3941f0bf380b",
    });
    // .then(console.log);
    console.log(tempData);
    res.send(tempData);
  } catch (error) {
    console.error(error);
    res.send("실패");
  }
});
export default router;

// import { BlockVisionProvider, BvNetwork } from "blockvision.js";

// Optional parameters, but default to eth-mainnet and default api-key.
// const bv = new BlockVisionProvider(BvNetwork.ETH_MAINNET);

// Access standard Ethers.js JSON-RPC node request
// bv.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1').then(console.log)

// import { BlockVisionProvider, BvNetwork } from 'blockvision.js'

// // Optional parameters, but default to eth-mainnet and default api-key.
// const bv = new BlockVisionProvider(BvNetwork.POL_MAINNET)

// // Access standard Ethers.js JSON-RPC node request
// bv.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1').then(console.log)
