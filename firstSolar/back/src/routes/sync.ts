import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/apiUse", async (req, res) => {
  try {
    
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
