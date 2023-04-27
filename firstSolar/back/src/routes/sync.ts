// server
import { Router, Request, Response } from "express";
import db from "../../models/index";
import Pool from "../../models/pool";
import Price from "../../models/price";
// mypage sync
import {
  deployed,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index";
import price from "../price/priceList";
import swapPriceSync from "../price/swapPriceSync";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const DbList: Price[] = await db.Price.findAll();
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

router.post("/mypage", async (req: Request, res: Response) => {
  try {
    const userAddress = req.body.account;
    const filterPool: Pool[] = [];

    let poolInfo = await deployed.methods.getPoolInfo().call();

    for (let i = 0; i < poolInfo.length; i++) {
      let balance = 0;
      let pool: Pool | null = null;

      if (poolInfo[i][0] == process.env.DFS_ETH) {
        balance = await deployedDFSETH.methods.balanceOf(userAddress).call();
        if (balance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
      } else if (poolInfo[i][0] == process.env.DFS_USDT) {
        balance = await deployedDFSUSDT.methods.balanceOf(userAddress).call();
        if (balance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
      } else if (poolInfo[i][0] == process.env.DFS_BNB) {
        balance = await deployedDFSBNB.methods.balanceOf(userAddress).call();
        if (balance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
      }

      if (pool) {
        pool.dataValues.balance = balance; // balance를 객체 원소에 추가
        filterPool.push(pool);
      }
    }

    res.send(filterPool);
  } catch (error) {
    console.log(error);
  }
});

router.get("/datesync", async (req: Request, res: Response) => {
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
