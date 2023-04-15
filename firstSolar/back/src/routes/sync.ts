import express from "express";
import axios from "axios";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { mainNet } from "./defi";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Moralis.start({
//   apiKey: "uYftfj0EOyThUZbG9TGDyuFa52N3Y9IS0177QWrIWTNI8wMWxJlyRGLCu7oQIS1f",
// });

router.get("/", (req, res) => {
  const runApp = async () => {
    try {
      let coinListData = (
        await axios.get("https://api.coingecko.com/api/v3/coins/list")
      ).data;
      let coinMarkets = (
        await axios.get("https://api.coingecko.com/api/v3/coins/markets")
      ).data;
      res.send(coinListData);
      // let lpsData = (await axios.get("https://api.beefy.finance/lps")).data;

      // let keyArray = Object.keys(lpsData);
      // let valusArray = Object.values(lpsData);
      // let indexArray = [];
      // let filterArray = [];
      // let fixArr = [];

      // for (let i = 0; i < valusArray.length; i++) {

      //   if ((valusArray[i] as number) > 1) {
      //     indexArray.push(i);
      //     filterArray.push(valusArray[i]);
      //   }
      // }

      // for (let i = 0; i < indexArray.length; i++) {
      //   let filterKeyIndex = keyArray[indexArray[i]];

      //   fixArr.push({ id: filterKeyIndex, price: filterArray[i] });
      // }

      // const activeLpList = (
      //   await axios.get(`https://api.beefy.finance/vaults`)
      // ).data.filter((lp: any) => lp.status === "active");

      // const tempFinishData = [];
      // for (let i = 0; i < fixArr.length; i++) {
      //   const filterData = activeLpList.filter((lp) => lp.id == fixArr[i].id);
      //   if (filterData.length) tempFinishData.push(...filterData);
      // }

      // let fantomData = tempFinishData.filter(
      //   (lp) =>
      //     lp.network == "fantom" ||
      //     lp.network == "ethereum" ||
      //     lp.network == "polygon" ||
      //     lp.network == "bsc" ||
      //     lp.network == "avalanche" ||
      //     lp.network == "fuji" ||
      //     lp.network == "cronos" ||
      //     lp.network == "palm" ||
      //     lp.network == "arbitrum"
      // );

      // const address = "0x9A8b2601760814019B7E6eE0052E25f1C623D1E6";
      // const chain = EvmChain.POLYGON;
      // const response = await Moralis.EvmApi.token.getTokenPrice({
      //   address,
      //   chain,
      // });
      // console.log(response.toJSON());
      // response
    } catch (error) {
      console.log(error);
      res.end();
    }
  };
  runApp();
});
export default router;
