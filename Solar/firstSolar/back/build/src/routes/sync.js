var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { Router } from "express";
import db from "../../models/index.js";
import {
  deployed,
  deployedDFS,
  deployedETH,
  deployedUSDT,
  deployedBNB,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index.js";
import price from "../price/priceList.js";
import swapPriceSync from "../price/swapPriceSync.js";
const router = Router();
router.get("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const DbList = yield db.Price.findAll();
      if (DbList.length <= 0) {
        let priceDataList = yield price();
        for (let i = 0; i < priceDataList.length; i++) {
          yield db.Price.create({
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
  })
);
router.post("/mypage", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const userAddress = req.body.account;
      const filterPool = [];
      let poolInfo = yield deployed.methods.getPoolInfo().call();
      for (let i = 0; i < poolInfo.length; i++) {
        let LPTokenBalance = 0;
        let DFSTokenBalance = 0;
        let OtherTokenBalance = 0;
        let pool = null;
        let lpPidNumber = 0;
        if (poolInfo[i][0] == process.env.DFS_ETH) {
          LPTokenBalance = yield deployedDFSETH.methods
            .balanceOf(userAddress)
            .call();
          if (LPTokenBalance > 0) {
            pool = yield db.Pool.findOne({
              where: { tokenAddress: poolInfo[i][0] },
            });
          }
          DFSTokenBalance = yield deployedDFS.methods
            .balanceOf(userAddress)
            .call();
          OtherTokenBalance = yield deployedETH.methods
            .balanceOf(userAddress)
            .call();
          lpPidNumber = i;
        } else if (poolInfo[i][0] == process.env.DFS_USDT) {
          LPTokenBalance = yield deployedDFSUSDT.methods
            .balanceOf(userAddress)
            .call();
          if (LPTokenBalance > 0) {
            pool = yield db.Pool.findOne({
              where: { tokenAddress: poolInfo[i][0] },
            });
          }
          DFSTokenBalance = yield deployedDFS.methods
            .balanceOf(userAddress)
            .call();
          OtherTokenBalance = yield deployedUSDT.methods
            .balanceOf(userAddress)
            .call();
          lpPidNumber = i;
        } else if (poolInfo[i][0] == process.env.DFS_BNB) {
          LPTokenBalance = yield deployedDFSBNB.methods
            .balanceOf(userAddress)
            .call();
          if (LPTokenBalance > 0) {
            pool = yield db.Pool.findOne({
              where: { tokenAddress: poolInfo[i][0] },
            });
          }
          DFSTokenBalance = yield deployedDFS.methods
            .balanceOf(userAddress)
            .call();
          OtherTokenBalance = yield deployedBNB.methods
            .balanceOf(userAddress)
            .call();
          lpPidNumber = i;
        }
        if (pool) {
          pool.dataValues.DFSTokenBalance = DFSTokenBalance;
          pool.dataValues.OtherTokenBalance = OtherTokenBalance;
          pool.dataValues.LPTokenBalance = LPTokenBalance;
          pool.dataValues.lpPidNumber = lpPidNumber;
          filterPool.push(pool);
        }
      }
      res.send(filterPool);
    } catch (error) {
      console.log(error);
    }
  })
);
router.get("/datesync", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const sync = yield swapPriceSync();
      res.send(sync);
      const now = new Date();
      const nextUpdate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        9
      );
      const timeUntilNextUpdate = nextUpdate.getTime() - now.getTime();
      setInterval(
        () =>
          __awaiter(void 0, void 0, void 0, function* () {
            const repeatedSync = yield swapPriceSync();
            console.log("repeatedSync", repeatedSync);
          }),
        24 * 60 * 60 * 1000
      );
      setTimeout(
        () =>
          __awaiter(void 0, void 0, void 0, function* () {
            const firstUpdateSync = yield swapPriceSync();
            console.log("firstUpdateSync", firstUpdateSync);
          }),
        timeUntilNextUpdate
      );
    } catch (error) {
      console.log(error);
    }
  })
);
export default router;
