// server
import express from "express";
import db from "../../models/index";
import axios from "axios";

// mypage sync
import Web3 from "web3";
import { AbiItem } from "web3-utils";
const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);
import { abi as DFSAbi } from "../../contracts/artifacts/Token.json";
import { abi as DfsEthPoolAbi } from "../../contracts/artifacts/LiquidityPool.json";
import { abi as DexlAbi } from "../../contracts/artifacts/Dex.json";
import { type } from "os";

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

router.get("/mypage", async (req, res) => {
  try {
    // 요청에서 유저 주소 가져오기
    const userAddress = req.body.account;
    const MyPageList = [];

    const DexContract = new web3.eth.Contract(
      DexlAbi as AbiItem[],
      process.env.DEX
    );

    // let getLpBalance = contract.methods.getLPBalance().encodeABI();
    // let getPid = await DexContract.methods.getPid(process.env.DFS_ETH).call();

    let poolInfo = await DexContract.methods.getpoolInfo().call();

    for (let i = 0; i < poolInfo.length; i++) {
      let userInfo = await DexContract.methods.userInfo(i, userAddress).call();

      MyPageList.push({ pid: i, amount: userInfo.amount });
    }

    for (let i = 0; i < MyPageList.length; i++) {
      // 0번째 DFS_ETH
      // 1번째 DFS_USDT
      // 2번째 DFS_BNB
      // console.log(MyPageList[i].amount);
      // if (MyPageList[i].amount) {
      //   switch(MyPageList[i].pid){
      //     case 0: db.,
      //     case 1:,
      //     case 2:,
      //   }
      // }
    }

    res.end();
  } catch (error) {
    console.log(error);
  }
});

export default router;
