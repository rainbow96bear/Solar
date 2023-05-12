// server
import { Router, Request, Response } from "express";
import db from "../../models/index";
import Pool from "../../models/pool";
import Price from "../../models/price";
// mypage sync
import {
  deployed,
  deployedDFS,
  deployedETH,
  deployedUSDT,
  deployedBNB,
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
      let LPTokenBalance: number = 0;
      let DFSTokenBalance: number = 0;
      let OtherTokenBalance: number = 0;
      let pool: Pool | null = null;
      let lpPidNumber: number = 0;
      let getAutoCompoundStatus: boolean;

      if (poolInfo[i][0] == process.env.DFS_ETH) {
        LPTokenBalance = await deployedDFSETH.methods
          .balanceOf(userAddress)
          .call();
        if (LPTokenBalance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
        DFSTokenBalance = await deployedDFS.methods
          .balanceOf(userAddress)
          .call();
        OtherTokenBalance = await deployedETH.methods
          .balanceOf(userAddress)
          .call();
        lpPidNumber = i;
        const pid: number = await deployed.methods
          .getPid(process.env.DFS_ETH)
          .call();
        const tempData = await deployed.methods
          .userInfo(pid, userAddress)
          .call();
        getAutoCompoundStatus = tempData.checkAutoCompounding;
      } else if (poolInfo[i][0] == process.env.DFS_USDT) {
        LPTokenBalance = await deployedDFSUSDT.methods
          .balanceOf(userAddress)
          .call();
        if (LPTokenBalance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
        DFSTokenBalance = await deployedDFS.methods
          .balanceOf(userAddress)
          .call();
        OtherTokenBalance = await deployedUSDT.methods
          .balanceOf(userAddress)
          .call();
        lpPidNumber = i;
        const pid: number = await deployed.methods
          .getPid(process.env.DFS_USDT)
          .call();
        const tempData = await deployed.methods
          .userInfo(pid, userAddress)
          .call();
        getAutoCompoundStatus = tempData.checkAutoCompounding;
      } else if (poolInfo[i][0] == process.env.DFS_BNB) {
        LPTokenBalance = await deployedDFSBNB.methods
          .balanceOf(userAddress)
          .call();
        if (LPTokenBalance > 0) {
          pool = await db.Pool.findOne({
            where: { tokenAddress: poolInfo[i][0] },
          });
        }
        DFSTokenBalance = await deployedDFS.methods
          .balanceOf(userAddress)
          .call();
        OtherTokenBalance = await deployedBNB.methods
          .balanceOf(userAddress)
          .call();
        lpPidNumber = i;
        const pid: number = await deployed.methods
          .getPid(process.env.DFS_BNB)
          .call();
        const tempData = await deployed.methods
          .userInfo(pid, userAddress)
          .call();
        getAutoCompoundStatus = tempData.checkAutoCompounding;
      }

      if (pool) {
        pool.dataValues.DFSTokenBalance = DFSTokenBalance;
        pool.dataValues.OtherTokenBalance = OtherTokenBalance;
        pool.dataValues.LPTokenBalance = LPTokenBalance; // balance를 객체 원소에 추가
        pool.dataValues.lpPidNumber = lpPidNumber;
        pool.dataValues.getAutoCompoundStatus = getAutoCompoundStatus;
        filterPool.push(pool);
      }
    }

    res.send(filterPool);
  } catch (error) {
    console.log(error);
    res.send();
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
    res.send();
  }
});

router.get("/lastDayOfMonth", async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const getLastDayOfMonth = (year: number, month: number): Date => {
      const nextMonth = month + 1;
      const nextMonthFirstDay = new Date(year, nextMonth, 1);
      const lastDayOfMonth: Date = new Date(nextMonthFirstDay.getTime() - 1);
      return lastDayOfMonth;
    };

    const lastDayOfMonth = getLastDayOfMonth(year, month);

    if (today == lastDayOfMonth.getDate()) {
      const distribution = await deployed.methods.allDistribution().encodeABI();

      res.send({
        status: 200,
        data: {
          from: req.body.account,
          to: process.env.DEX,
          data: distribution,
        },
      });
    } else {
      res.send({ status: 404, data: "Today is not the last day" });
    }
  } catch (error) {
    console.log(error);
    res.send();
  }
});
export default router;
