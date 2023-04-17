import express from "express";
import axios from "axios";
import { BalancerSDK, BalancerSdkConfig, Network } from "@balancer-labs/sdk";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const runApp = async () => {
    try {
      const tokenData = (
        await axios.get("https://api-v3.bancor.network/tokens")
      ).data;
      const tokenValue: any[] = Object.values(tokenData);
      const tokenValueWithoutOuterArray: any[] = tokenValue[0];

      const filterToken: Array<{ dltId: string; symbol: string; rate: any }> =
        tokenValueWithoutOuterArray.map(({ dltId, symbol, rate }) => ({
          dltId,
          symbol,
          rate,
        })) as Array<{ dltId: string; symbol: string; rate: any }>;
      const filterPrice = [];

      for (let i = 0; i < filterToken.length; i++) {
        if (+filterToken[i]["rate"]["bnt" || "eth" || "eur" || "usd"] > 0) {
          filterPrice.push(filterToken[i]);
        }
      }

      res.send(filterPrice);
    } catch (error) {
      console.log(error);
      res.end();
    }
  };
  runApp();
});
export default router;
