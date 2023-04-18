import express from "express";
import axios from "axios";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const runApp = async () => {
    try {
      const BNBPrice = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              symbol: "BNB",
            },
          }
        )
      ).data;

      const ETHPrice = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              symbol: "ETH",
            },
          }
        )
      ).data;

      const USDTPrice = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              symbol: "USDT",
            },
          }
        )
      ).data;

      const bnbPriceToUSDT: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "BNB",
              convert: "USDT",
            },
          }
        )
      ).data;

      const bnbPriceToETH: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "BNB",
              convert: "ETH",
            },
          }
        )
      ).data;

      const ETHPriceToBNB: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "ETH",
              convert: "BNB",
            },
          }
        )
      ).data;

      const EthPriceToUSDT: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "ETH",
              convert: "USDT",
            },
          }
        )
      ).data;

      const usdtPriceToETH: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "USDT",
              convert: "ETH",
            },
          }
        )
      ).data;

      const usdtPriceToBNB: Response = (
        await axios.get(
          "https://pro-api.coinmarketcap.com/v2/tools/price-conversion",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
              amount: 10,
              symbol: "USDT",
              convert: "BNB",
            },
          }
        )
      ).data;

      // USDT , ETH , BNB price
      let USDT = Object.values(USDTPrice.data);
      let USDTdata = USDT[0];
      let USDTprice = Object.values(USDTdata[0]["quote"]);
      let NowUSDTprice = USDTprice[0]["price"];

      let ETH = Object.values(ETHPrice.data);
      let ETHdata = ETH[0];
      let ETHprice = Object.values(ETHdata[0]["quote"]);
      let NowETHprice = ETHprice[0]["price"];

      let BNB = Object.values(BNBPrice.data);
      let BNBdata = BNB[0];
      let BNBprice = Object.values(BNBdata[0]["quote"]);
      let NowBNBprice = BNBprice[0]["price"];

      // swap
      const BNBSwapUSDT: any = Object.values(bnbPriceToUSDT)[1];
      const BNBtoUSDT = BNBSwapUSDT[0].quote.USDT.price;

      const BNBSwapETH: any = Object.values(bnbPriceToETH)[1];
      const BNBtoETH = BNBSwapETH[0].quote.ETH.price;

      const ETHSwapBNB: any = Object.values(ETHPriceToBNB)[1];
      const ETHtoBNB = ETHSwapBNB[0].quote.BNB.price;

      const ETHSwapUSDT: any = Object.values(EthPriceToUSDT)[1];
      const ETHtoUSDT = ETHSwapUSDT[0].quote.USDT.price;

      const USDTwapETH: any = Object.values(usdtPriceToETH)[1];
      const USDTtoETH = USDTwapETH[0].quote.ETH.price;

      const USDTwapBNB: any = Object.values(usdtPriceToBNB)[1];
      const USDTtoBNB = USDTwapBNB[0].quote.BNB.price;

      res.send({
        NowUSDTprice,
        NowETHprice,
        NowBNBprice,
        BNBtoUSDT,
        BNBtoETH,
        ETHtoBNB,
        ETHtoUSDT,
        USDTtoETH,
        USDTtoBNB,
      });
    } catch (error) {
      console.log(error);
      res.end();
    }
  };
  runApp();
});
export default router;
