import express from "express";
import axios from "axios";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

import { mainNet } from "./defi";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
Moralis.start({
  apiKey: "uYftfj0EOyThUZbG9TGDyuFa52N3Y9IS0177QWrIWTNI8wMWxJlyRGLCu7oQIS1f",
});

router.get("/", (req, res) => {
  const runApp = async () => {
    try {
      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter(
        (lp: any) => lp.status === "active" && lp.assets.length == 2
      );

      const result = await axios.get(`https://api.beefy.finance/lps/breakdown`);
      console.log(Object.keys(result));
      console.log(result.data["curve-poly-usdr"]);

      try {
        let response = await Moralis.EvmApi.token.getTokenPrice({
          address: result.data["curve-poly-usdr"].tokens[0],
          chain: 137,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      //   activeLpList.map(async(item, index)=>{
      //     const network = item.network;
      //   const tokenAddress = item.tokenAddress
      //     let response = await Moralis.EvmApi.token.getTokenPrice({
      //       address: tokenAddress,
      //       chain : network,
      //     });

      //     console.log(response.toJSON());
      // })

      // for (let i = 0; i < activeLpList.length; i++) {
      //   let address = tempAddressData[i];
      //   let chain;

      //   if (tempNetworkData[i] == "arbitrum") {
      //     chain = EvmChain.ARBITRUM;
      //   } else if (tempNetworkData[i] == "avalanche") {
      //     chain = EvmChain.AVALANCHE;
      //   } else if (tempNetworkData[i] == "bsc") {
      //     chain = EvmChain.BSC;
      //   } else if (tempNetworkData[i] == "cronos") {
      //     chain = EvmChain.CRONOS;
      //   } else if (tempNetworkData[i] == "ethereum") {
      //     chain = EvmChain.ETHEREUM;
      //   } else if (tempNetworkData[i] == "palm") {
      //     chain = EvmChain.PALM;
      //   } else if (tempNetworkData[i] == "sepolia") {
      //     chain = EvmChain.SEPOLIA;
      //   } else if (tempNetworkData[i] == "fantom") {
      //     chain = EvmChain.FANTOM;
      //   } else if (tempNetworkData[i] == "fuji") {
      //     chain = EvmChain.FUJI;
      //   } else {
      //     chain = "";
      //   }
      //   // console.log(address);

      //   try {
      //     let response = await Moralis.EvmApi.token.getTokenPrice({
      //       address,
      //       chain,
      //     });
      //     // console.log(response);
      //     price.push(response);
      //   } catch (error) {
      //     continue;
      //   }
      // }
      res.end();
    } catch (error) {
      console.log(error);
      res.end();
    }
  };
  runApp();
});
export default router;
