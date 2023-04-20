// server
import express from "express";
import db from "../../models/index";
import axios from "axios";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
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

    // USDT

    let USDT = Object.values(USDTPrice.data);
    let USDTdata = USDT[0];
    let USDTprice = Object.values(USDTdata[0]["quote"]);
    let NowUSDTprice = USDTprice[0]["price"];

    // USDT DB

    let USDTIdData = USDTdata[0]["id"];
    let USDTSymbolData = USDTdata[0]["symbol"];
    let USDTSlugData = USDTdata[0]["slug"];

    // ETH
    let ETH = Object.values(ETHPrice.data);
    let ETHdata = ETH[0];
    let ETHprice = Object.values(ETHdata[0]["quote"]);
    let NowETHprice = ETHprice[0]["price"];

    // ETH DB
    let ETHIdData = ETHdata[0]["id"];
    let ETHSymbolData = ETHdata[0]["symbol"];
    let ETHSlugData = ETHdata[0]["slug"];

    // BNB
    let BNB = Object.values(BNBPrice.data);
    let BNBdata = BNB[0];
    let BNBprice = Object.values(BNBdata[0]["quote"]);
    let NowBNBprice = BNBprice[0]["price"];

    // BNB DB
    let BNBIdData = BNBdata[0]["id"];
    let BNBSymbolData = BNBdata[0]["symbol"];
    let BNBSlugData = BNBdata[0]["slug"];

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

    const DBConnet: any = [];
    DBConnet.push({
      IdData: USDTIdData,
      symbolData: USDTSymbolData,
      slugData: USDTSlugData,
      convertUSDT: 1,
      convertETH: USDTtoETH,
      convertBNB: USDTtoBNB,
      tokenPrice: NowUSDTprice,
    });
    DBConnet.push({
      IdData: ETHIdData,
      symbolData: ETHSymbolData,
      slugData: ETHSlugData,
      convertUSDT: ETHtoUSDT,
      convertETH: 1,
      convertBNB: ETHtoBNB,
      tokenPrice: NowETHprice,
    });
    DBConnet.push({
      IdData: BNBIdData,
      symbolData: BNBSymbolData,
      slugData: BNBSlugData,
      convertUSDT: BNBtoUSDT,
      convertETH: BNBtoETH,
      convertBNB: 1,
      tokenPrice: NowBNBprice,
    });

    const SyncDB = async () => {
      const DbList = await db.Price.findAll();
      // console.log("test", test.length);
      if (DbList.length <= 0) {
        for (let i = 0; i < DBConnet.length; i++) {
          await db.Price.create({
            tokenSymbol: DBConnet[i].symbolData,
            tokenId: DBConnet[i].IdData,
            tokenSlug: DBConnet[i].slugData,
            ConvertToUSDT: DBConnet[i].convertUSDT,
            ConvertToETH: DBConnet[i].convertETH,
            ConvertToBNB: DBConnet[i].convertBNB,
            tokenPrice: DBConnet[i].tokenPrice,
          });
        }
      }
    };
    SyncDB();

    res.end();
    console.log("insert Data OK");
  } catch (error) {
    console.log(error);
    res.end();
  }
});

export default router;
