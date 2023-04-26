// server
import express from "express";
import db from "../../models/index";

// mypage sync
import Web3 from "web3";
import { AbiItem } from "web3-utils";
const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);

import { abi as DexlAbi } from "../../contracts/artifacts/Dex.json";
import price from "../price/priceList";
import swapPriceSync from "../price/swapPriceSync";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const DbList = await db.Price.findAll();
    if (DbList.length <= 0) {
      let priceDataList = await price();
      for (let i = 0; i < priceDataList.length; i++) {
        await db.Price.create({
          tokenSymbol: priceDataList[i].symbolData,
          tokenId: priceDataList[i].IdData,
          tokenSlug: priceDataList[i].slugData,
          ConvertToUSDT: priceDataList[i].convertUSDT,
          ConvertToETH: priceDataList[i].convertETH,
          ConvertToBNB: priceDataList[i].convertBNB,
          tokenPrice: priceDataList[i].tokenPrice,
        });
      }
    }

    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.post("/mypage", async (req, res) => {
  try {
    // 요청에서 유저 주소 가져오기

    const userAddress = req.body.account;
    const MyPageList = [];
    const filterPool = [];

    const DexContract = new web3.eth.Contract(
      DexlAbi as AbiItem[],
      process.env.DEX
    );

    let poolInfo = await DexContract.methods.getPoolInfo().call();

    for (let i = 0; i < poolInfo.length; i++) {
      let userInfo = await DexContract.methods.userInfo(i, userAddress).call();
      MyPageList.push({ pid: i, amount: userInfo.amount });
    }

    for (let i = 0; i < MyPageList.length; i++) {
      if (+MyPageList[i].amount > 0) {
        switch (MyPageList[i].pid.toString()) {
          case "0":
            filterPool.push(
              ...(await db.Pool.findAll({
                where: { id: MyPageList[i].pid + 1 },
              }))
            );
            break;
          case "1":
            filterPool.push(
              ...(await db.Pool.findAll({
                where: { id: MyPageList[i].pid + 1 },
              }))
            );
            break;
          case "2":
            filterPool.push(
              ...(await db.Pool.findAll({
                where: { id: MyPageList[i].pid + 1 },
              }))
            );
            break;
          default:
            throw new Error("Invalid token");
        }
      }
    }

    res.send(filterPool);
  } catch (error) {
    console.log(error);
  }
});

router.get("/datesync", async (req, res) => {
  try {
    const sync = await swapPriceSync();
    res.send(sync);

    const now = new Date();
    const nextUpdate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      9
    );
    // 다음 업데이트 시간까지 남은 시간(밀리초) 계산
    const timeUntilNextUpdate = nextUpdate.getTime() - now.getTime();
    // setInterval() 메서드로 주기적으로 checkUpdateTime() 함수 실행
    setInterval(async () => {
      const repeatedSync = await swapPriceSync();
      console.log("repeatedSync", repeatedSync);
    }, 24 * 60 * 60 * 1000);
    // 첫 번째 업데이트는 다음 업데이트 시간까지 남은 시간 후에 실행
    setTimeout(async () => {
      const firstUpdateSync = await swapPriceSync();
      console.log("firstUpdateSync", firstUpdateSync);
    }, timeUntilNextUpdate);
  } catch (error) {
    console.log(error);
  }
});
export default router;
