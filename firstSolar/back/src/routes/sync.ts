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

import { abi as DexlAbi } from "../../contracts/artifacts/Dex.json";
import price from "../priceList";
import { type } from "os";
import { send } from "process";

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

router.get("/mypage", async (req, res) => {
  try {
    // 요청에서 유저 주소 가져오기
    const userAddress = req.body.account;
    const MyPageList = [];
    const filterPool = [];

    const DexContract = new web3.eth.Contract(
      DexlAbi as AbiItem[],
      process.env.DEX
    );

    // let getLpBalance = contract.methods.getLPBalance().encodeABI();
    // let getPid = await DexContract.methods.getPid(process.env.DFS_ETH).call();

    let poolInfo = await DexContract.methods.getpoolInfo().call();

    for (let i = 0; i < poolInfo.length; i++) {
      console.log("PoolInfo 부분");
      let userInfo = await DexContract.methods.userInfo(i, userAddress).call();
      MyPageList.push({ pid: i, amount: userInfo.amount });
    }

    for (let i = 0; i < MyPageList.length; i++) {
      // 0번째 DFS_ETH
      // 1번째 DFS_USDT
      // 2번째 DFS_BNB
      console.log(typeof MyPageList[i].pid);
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

router.post("/swap", async (req, res) => {
  const BtnUSDT = await db.Price.findOne({
    where: {
      tokenSymbol: req.body.data,
    },
  });
  res.send(BtnUSDT);
});
router.post("/filterSwap", async (req, res) => {
  console.log(req.body);
  const BtnUSDT = await db.Price.findOne({
    where: {
      tokenSymbol: req.body.data,
    },
  });
  res.send(BtnUSDT.tokenPrice);
});
router.get("/dateSync", async (req, res) => {
  try {
    const timeSync = async () => {
      console.log("실행됨 1");
      const updateTime = await db.Price.findAll();
      const nowTime = new Date();

      updateTime.forEach(async (pool) => {
        console.log("실행됨 2");

        const lastUpdateTime = new Date(pool.dataValues.updatedAt);
        // DB에서 불러온 각 Pool 인스턴스의 업데이트 시간을 가져와 'lastUpdateTime' 변수에 할당

        const timeDiffInMs = nowTime.getTime() - lastUpdateTime.getTime();
        // 현재 시간과 'lastUpdateTime'의 차이(밀리초)를 계산하여 'timeDiffInMs' 변수에 할당

        const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
        // 'timeDiffInMs'를 시간 단위로 변환하여 'timeDiffInHours' 변수에 할당

        // 'timeDiffInHours'가 24시간을 초과 하는지 여부에 따라 메세지 출력

        const DbList = await db.Price.findAll();

        if (DbList.length <= 0) {
          console.log("실행됨 3");

          // 24시간이 지났고, db에 값이 없을때
          let priceDataList = await price();
          for (let i = 0; i < priceDataList.length; i++) {
            console.log("실행됨 4");

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
        } else {
          console.log("실행됨 5");

          if (timeDiffInHours > 24) {
            console.log("24시간 이상 지났습니다.");
            let priceDataList = await price();
            let priceDB = await db.Price.findAll();
            for (let i = 0; i < priceDataList.length; i++) {
              console.log("실행됨 6");

              await db.Price.update(
                {
                  ConvertToUSDT: priceDB[i].convertUSDT,
                  ConvertToETH: priceDB[i].convertETH,
                  ConvertToBNB: priceDB[i].convertBNB,
                  tokenPrice: priceDB[i].tokenPrice,
                },
                {
                  where: {
                    tokenSymbol: priceDataList[i].symbolData,
                    tokenId: priceDataList[i].IdData,
                    tokenSlug: priceDataList[i].slugData,
                  },
                }
              );
            }
            priceDB = await db.Price.findAll();
            console.log(priceDB);
            return;
          } else {
            let priceDB = await db.Price.findAll();
            // console.log("priceDB", priceDB);
            // console.log("24시간 이내입니다.");
            return;
          }

          // 24시간이 지났고, db에 지난 값들이 있을때
        }
      });
    };
    timeSync();
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
    setInterval(() => {
      timeSync();
    }, 60 * 1000);

    // 첫 번째 업데이트는 다음 업데이트 시간까지 남은 시간 후에 실행
    setTimeout(() => {
      timeSync();
    }, timeUntilNextUpdate);

    res.end();
  } catch (error) {
    console.log(error);
  }
});
export default router;
