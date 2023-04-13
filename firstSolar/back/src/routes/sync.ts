import express from "express";
import axios from "axios";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const runApp = async () => {
    await Moralis.start({
      apiKey:
        "uYftfj0EOyThUZbG9TGDyuFa52N3Y9IS0177QWrIWTNI8wMWxJlyRGLCu7oQIS1f",
    });

    const historicalPrice = [];

    const address = "0x6b175474e89094c44da98b954eedeac495271d0f";

    const chain = EvmChain.ETHEREUM;
    let response;
    for (let toBlock = 16323500; toBlock < 16323550; toBlock += 10) {
      response = await Moralis.EvmApi.token.getTokenPrice({
        address,
        chain,
        toBlock,
      });

      historicalPrice.push(response?.toJSON());
      console.log(response.toJSON());
    }

    res.send(response);
  };
  runApp();
});
export default router;
