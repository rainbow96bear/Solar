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
import axios from "axios";
import db from "../../models/index.js";
import dotenv from "dotenv";
import { BigNumber } from "@ethersproject/bignumber";
import { Op } from "sequelize";
import { mainNet } from "../setting/index.js";
import {
  deployed,
  deployedDFS,
  deployedETH,
  deployedDFSETH,
  deployedUSDT,
  deployedDFSUSDT,
  deployedBNB,
  deployedDFSBNB,
} from "../deployList/index.js";
const router = Router();
dotenv.config();
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
let retries = 0;
const getTvlData = (lpId, oracleId, lpChain, date) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const url = date
      ? `https://api.beefy.finance/tvl?${encodeURIComponent(
          oracleId
        )}&date=${date}`
      : `https://api.beefy.finance/tvl?${encodeURIComponent(oracleId)}`;
    return (_b =
      (_a = (yield axios.get(url)).data[lpChain]) === null || _a === void 0
        ? void 0
        : _a[lpId]) !== null && _b !== void 0
      ? _b
      : 0;
  });
let obj = {
  from: "",
  to: "",
  data: "",
};
let getPool;
router.get("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    retries = 0;
    const pageIndex = parseInt(req.query.pageIndex);
    const totalLplListUp = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        try {
          const now = new Date();
          const yesterday = new Date(now.getTime() - ONE_DAY_MS);
          getPool = yield db.Pool.findAll();
          const activeLpList = (yield axios.get(
            `https://api.beefy.finance/vaults`
          )).data.filter((lp) => lp.status === "active");
          let totalLpLength = activeLpList.length + getPool.length;
          let totalLpList;
          if (pageIndex == 1) {
            const returnLpList = yield Promise.all(
              activeLpList
                .slice((pageIndex - 1) * 10 + getPool.length, pageIndex * 10)
                .map((lp) =>
                  __awaiter(void 0, void 0, void 0, function* () {
                    var _c;
                    const lpId = lp.id;
                    const oracleId = lp.oracleId;
                    const lpChain = mainNet[lp.chain];
                    const tokens = lp.assets;
                    const [tvlNow, tvlYesterday] = yield Promise.all([
                      getTvlData(lpId, oracleId, lpChain),
                      getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
                    ]);
                    const dailyTvlRate =
                      ((tvlNow - tvlYesterday) / tvlYesterday) * 100;
                    return {
                      id: lpId,
                      name: lp.name,
                      platformId: lp.platformId,
                      network: lp.network,
                      oracleId: oracleId,
                      status: lp.status,
                      symbol: lp.symbol,
                      tvl: tvlNow,
                      apy:
                        (_c = (yield axios.get(
                          `https://api.beefy.finance/apy?${oracleId}`
                        )).data[lpId]) !== null && _c !== void 0
                          ? _c
                          : 0,
                      dailyTvlRate,
                      mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
                      platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
                      tokens,
                      tokenAddress: lp.tokenAddress,
                    };
                  })
                )
            );
            totalLpList = [...getPool, ...returnLpList];
          } else {
            const returnLpList = yield Promise.all(
              activeLpList
                .slice((pageIndex - 1) * 10, pageIndex * 10)
                .map((lp) =>
                  __awaiter(void 0, void 0, void 0, function* () {
                    var _d;
                    const lpId = lp.id;
                    const oracleId = lp.oracleId;
                    const lpChain = mainNet[lp.chain];
                    const tokens = lp.assets;
                    const [tvlNow, tvlYesterday] = yield Promise.all([
                      getTvlData(lpId, oracleId, lpChain),
                      getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
                    ]);
                    const dailyTvlRate =
                      ((tvlNow - tvlYesterday) / tvlYesterday) * 100;
                    return {
                      id: lpId,
                      name: lp.name,
                      platformId: lp.platformId,
                      network: lp.network,
                      oracleId: oracleId,
                      status: lp.status,
                      symbol: lp.symbol,
                      tvl: tvlNow,
                      apy:
                        (_d = (yield axios.get(
                          `https://api.beefy.finance/apy?${oracleId}`
                        )).data[lpId]) !== null && _d !== void 0
                          ? _d
                          : 0,
                      dailyTvlRate,
                      mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
                      platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
                      tokens,
                      tokenAddress: lp.tokenAddress,
                    };
                  })
                )
            );
            totalLpList = [...returnLpList];
          }
          const data = {
            poolListData: totalLpList,
            poolListDataLength: totalLpLength,
          };
          res.send(data);
        } catch (error) {
          if (retries < MAX_RETRIES) {
            retries++;
            yield new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
            yield totalLplListUp();
          } else {
            console.error(error);
            res.send();
          }
        }
      });
    yield totalLplListUp();
  })
);
router.post("/filter", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    retries = 0;
    const fileterListUp = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        try {
          const { network, dex, pageIndex } = req.body;
          const now = new Date();
          const yesterday = new Date(now.getTime() - ONE_DAY_MS);
          const activeLpList = (yield axios.get(
            `https://api.beefy.finance/vaults`
          )).data.filter((lp) =>
            network
              ? lp.status === "active" && lp.chain === network
              : dex
              ? lp.status === "active" && lp.platformId === dex
              : lp.status === "active"
          );
          let filterLpList;
          const returnLpList = yield Promise.all(
            activeLpList.map((lp) =>
              __awaiter(void 0, void 0, void 0, function* () {
                var _e;
                const lpId = lp.id;
                const oracleId = lp.oracleId;
                const lpChain = mainNet[lp.chain];
                const tokens = lp.assets;
                const [tvlNow, tvlYesterday] = yield Promise.all([
                  getTvlData(lpId, oracleId, lpChain),
                  getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
                ]);
                const dailyTvlRate =
                  ((tvlNow - tvlYesterday) / tvlYesterday) * 100;
                return {
                  id: lpId,
                  name: lp.name,
                  platformId: lp.platformId,
                  network: lp.network,
                  oracleId: oracleId,
                  status: lp.status,
                  symbol: lp.symbol,
                  tvl: tvlNow,
                  apy:
                    (_e = (yield axios.get(
                      `https://api.beefy.finance/apy?${oracleId}`
                    )).data[lpId]) !== null && _e !== void 0
                      ? _e
                      : 0,
                  dailyTvlRate,
                  mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
                  platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
                  tokens,
                  tokenAddress: lp.tokenAddress,
                };
              })
            )
          );
          if (network) {
            getPool = yield db.Pool.findAll({ where: { network } });
            filterLpList = [...getPool, ...returnLpList];
          } else filterLpList = [...returnLpList];
          const renewalLpList = filterLpList.slice(
            (pageIndex - 1) * 10,
            pageIndex * 10
          );
          const data = {
            poolListData: renewalLpList,
            poolListDataLength: filterLpList.length,
          };
          res.send(data);
        } catch (error) {
          if (retries < MAX_RETRIES) {
            retries++;
            yield new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
            yield fileterListUp();
          } else {
            console.error(error);
            res.send();
          }
        }
      });
    yield fileterListUp();
  })
);
router.post("/check", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { inputAPI } = req.body;
    try {
      if (!inputAPI) return res.status(403).send({ msg: "No Message" });
      (yield axios.get(`https://api.beefy.finance/${inputAPI}`)).data;
      res.status(200).send({ msg: `${inputAPI} is Exist API` });
    } catch (err) {
      res.status(201).send({ msg: `${inputAPI} is No Exist API` });
    }
  })
);
router.post("/detail", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
      const now = new Date();
      const yesterday = new Date(now.getTime() - ONE_DAY_MS);
      const detailList = (yield axios.get(
        `https://api.beefy.finance/vaults`
      )).data.filter((lp) => lp.status == "active" && lp.oracleId == id);
      let data;
      if (!detailList.length)
        data = yield db.Pool.findAll({ where: { oracleId: id } });
      else {
        data = yield Promise.all(
          detailList.map((lp) =>
            __awaiter(void 0, void 0, void 0, function* () {
              var _f, _g, _h, _j, _k, _l;
              const lpId = lp.id;
              const oracleId = lp.oracleId;
              const lpChain = mainNet[lp.chain];
              const [tvlNow, tvlYesterday] = yield Promise.all([
                getTvlData(lpId, oracleId, lpChain),
                getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
              ]);
              const dailyTvlRate =
                ((tvlNow - tvlYesterday) / tvlYesterday) * 100;
              return Object.assign(Object.assign({}, lp), {
                tvl: tvlNow,
                apy:
                  (_f = (yield axios.get(
                    `https://api.beefy.finance/apy?${oracleId}`
                  )).data[lpId]) !== null && _f !== void 0
                    ? _f
                    : 0,
                dailyTvlRate,
                mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
                platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
                fee:
                  (_g = (yield axios.get(`https://api.beefy.finance/fees`))
                    .data[lpId].performance.call) !== null && _g !== void 0
                    ? _g
                    : 0,
                firstTokenBalance:
                  (_j =
                    (_h = (yield axios.get(
                      `https://api.beefy.finance/lps/breakdown`
                    )).data[lpId]) === null || _h === void 0
                      ? void 0
                      : _h.balances[0]) !== null && _j !== void 0
                    ? _j
                    : 0,
                secondTokenBalance:
                  (_l =
                    (_k = (yield axios.get(
                      `https://api.beefy.finance/lps/breakdown`
                    )).data[lpId]) === null || _k === void 0
                      ? void 0
                      : _k.balances[1]) !== null && _l !== void 0
                    ? _l
                    : 0,
              });
            })
          )
        );
      }
      res.send(data);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/approveDFS", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, approveDFSAmount, lpSymbol } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(approveDFSAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        obj.from = account;
        obj.to = process.env.DFS;
        obj.data = yield deployedDFS.methods
          .approve(process.env.DFS_ETH, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        obj.from = account;
        obj.to = process.env.DFS;
        obj.data = yield deployedBNB.methods
          .approve(process.env.DFS_BNB, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        obj.from = account;
        obj.to = process.env.DFS;
        obj.data = yield deployedUSDT.methods
          .approve(process.env.DFS_USDT, tokenPrice1)
          .encodeABI();
      }
      res.send(obj);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  })
);
router.post("/approveOtherToken", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, approveOtherAmount, lpSymbol } = req.body;
      const tokenPrice2 = BigNumber.from(
        Math.floor(approveOtherAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        obj.from = account;
        obj.to = process.env.ETH;
        obj.data = yield deployedETH.methods
          .approve(process.env.DFS_ETH, tokenPrice2)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        obj.from = account;
        obj.to = process.env.BNB;
        obj.data = yield deployedBNB.methods
          .approve(process.env.DFS_BNB, tokenPrice2)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        obj.from = account;
        obj.to = process.env.USDT;
        obj.data = yield deployedUSDT.methods
          .approve(process.env.DFS_USDT, tokenPrice2)
          .encodeABI();
      }
      res.send(obj);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  })
);
router.post("/addLiquidity", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, token1, token2, lpSymbol } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(token1 * Math.pow(10, 18)).toString()
      );
      const tokenPrice2 = BigNumber.from(
        Math.floor(token2 * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        obj.from = account;
        obj.to = process.env.DFS_ETH;
        obj.data = yield deployedDFSETH.methods
          .addLiquidity(tokenPrice1, tokenPrice2)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        obj.from = account;
        obj.to = process.env.DFS_BNB;
        obj.data = yield deployedDFSBNB.methods
          .addLiquidity(tokenPrice1, tokenPrice2)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        obj.from = account;
        obj.to = process.env.DFS_USDT;
        obj.data = yield deployedDFSUSDT.methods
          .addLiquidity(tokenPrice1, tokenPrice2)
          .encodeABI();
      }
      res.send(obj);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/approveLp", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, approveDepositAmount, lpSymbol } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(approveDepositAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        obj.from = account;
        obj.to = process.env.DFS_ETH;
        obj.data = yield deployedDFSETH.methods
          .approve(process.env.DEX, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        obj.from = account;
        obj.to = process.env.DFS_BNB;
        obj.data = yield deployedDFSBNB.methods
          .approve(process.env.DEX, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        obj.from = account;
        obj.to = process.env.DFS_USDT;
        obj.data = yield deployedDFSUSDT.methods
          .approve(process.env.DEX, tokenPrice1)
          .encodeABI();
      }
      res.send(obj);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/deposit", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, depositAmount, lpSymbol } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(depositAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_ETH).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods.deposit(pid, tokenPrice1).encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_BNB).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods.deposit(pid, tokenPrice1).encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_USDT).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods.deposit(pid, tokenPrice1).encodeABI();
      }
      res.send(obj);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/withdraw", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, withdrawAmount, lpSymbol } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(withdrawAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_ETH).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods
          .withdraw(pid, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_BNB).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods
          .withdraw(pid, tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        const pid = yield deployed.methods.getPid(process.env.DFS_USDT).call();
        obj.from = account;
        obj.to = process.env.DEX;
        obj.data = yield deployed.methods
          .withdraw(pid, tokenPrice1)
          .encodeABI();
      }
      res.send(obj);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/removeLiquidity", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { account, lpSymbol, removeAmount } = req.body;
      const tokenPrice1 = BigNumber.from(
        Math.floor(removeAmount * Math.pow(10, 18)).toString()
      );
      if (lpSymbol.includes("ETH")) {
        obj.from = account;
        obj.to = process.env.DFS_ETH;
        obj.data = yield deployedDFSETH.methods
          .removeLiquidity(tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("BNB")) {
        obj.from = account;
        obj.to = process.env.DFS_BNB;
        obj.data = yield deployedDFSBNB.methods
          .removeLiquidity(tokenPrice1)
          .encodeABI();
      } else if (lpSymbol.includes("USDT")) {
        obj.from = account;
        obj.to = process.env.DFS_USDT;
        obj.data = yield deployedDFSUSDT.methods
          .removeLiquidity(tokenPrice1)
          .encodeABI();
      }
      res.send(obj);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/search", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { search, pageIndex } = req.body;
      let list = [];
      if (search) {
        const [poolList, activeLpList] = yield Promise.all([
          db.Pool.findAll({
            where: {
              [Op.or]: [
                { name: { [Op.like]: `%${search}%` } },
                { tokenAddress: { [Op.like]: `%${search}%` } },
              ],
            },
          }),
          axios.get(`https://api.beefy.finance/vaults`),
        ]);
        const activeList =
          activeLpList === null || activeLpList === void 0
            ? void 0
            : activeLpList.data.filter((lp) => {
                var _a, _b;
                return (
                  lp.status === "active" &&
                  (((_a = lp.name) === null || _a === void 0
                    ? void 0
                    : _a.toLowerCase().includes(search.toLowerCase())) ||
                    ((_b = lp.tokenAddress) === null || _b === void 0
                      ? void 0
                      : _b.toLowerCase().includes(search.toLowerCase())))
                );
              });
        list = [...poolList, ...activeList];
      } else {
        const [poolList, activeLpList] = yield Promise.all([
          db.Pool.findAll(),
          axios.get(`https://api.beefy.finance/vaults`),
        ]);
        const activeList =
          activeLpList === null || activeLpList === void 0
            ? void 0
            : activeLpList.data.filter((lp) => lp.status === "active");
        list = [...poolList, ...activeList];
      }
      const paginationMyLpList = list.slice(
        (pageIndex - 1) * 10,
        pageIndex * 10
      );
      const data = {
        poolListData: paginationMyLpList,
        poolListDataLength: list.length,
      };
      res.send(data);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
router.post("/updatePool", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { tokenAddress } = req.body;
      const pool = yield db.Pool.findOne({
        where: { tokenAddress },
      });
      if (!pool) {
        throw new Error(
          `Pool with address ${tokenAddress} not found in the database`
        );
      }
      let firstTokenBalance = pool.firstTokenBalance;
      let secondTokenBalance = pool.secondTokenBalance;
      let reserve1;
      let reserve2;
      switch (pool.secondToken) {
        case "ETH":
          reserve1 = yield deployedDFSETH.methods.reserve1().call();
          reserve2 = yield deployedDFSETH.methods.reserve2().call();
          break;
        case "USDT":
          reserve1 = yield deployedDFSUSDT.methods.reserve1().call();
          reserve2 = yield deployedDFSUSDT.methods.reserve2().call();
          break;
        case "BNB":
          reserve1 = yield deployedDFSBNB.methods.reserve1().call();
          reserve2 = yield deployedDFSBNB.methods.reserve2().call();
          break;
        default:
          break;
      }
      if (reserve1 != firstTokenBalance || reserve2 != secondTokenBalance) {
        const tvl = Number(reserve1) + Number(reserve2);
        yield pool.update({
          firstTokenBalance: reserve1,
          secondTokenBalance: reserve2,
          tvl,
        });
      }
      res.end();
    } catch (err) {
      console.log(err);
      res.status(500).send("update error");
    }
  })
);
router.post("/getLPBalance", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { pid, account } = req.body;
      const stakingBalance = yield deployed.methods
        .getLPBalance(pid)
        .call({ from: account });
      res.send(stakingBalance);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })
);
export default router;
