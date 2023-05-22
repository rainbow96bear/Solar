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
import { BigNumber } from "@ethersproject/bignumber";
import {
  deployedDFS,
  deployedETH,
  deployedUSDT,
  deployedBNB,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index.js";
const router = Router();
router.post("/swapApprove", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const filterToken = () =>
        __awaiter(void 0, void 0, void 0, function* () {
          switch (req.body.tokenName) {
            case "dfs":
              return deployedDFS;
            case "eth":
              return deployedETH;
            case "usdt":
              return deployedUSDT;
            case "bnb":
              return deployedBNB;
            default:
              throw new Error("Invalid token");
          }
        });
      const result = yield filterToken();
      const amount = BigNumber.from(
        Math.floor(req.body.amount * Math.pow(10, 18)).toString()
      );
      let approve = yield result.methods
        .approve(req.body.poolAddress, amount)
        .encodeABI();
      res.send({
        from: req.body.account,
        to: result.options.address,
        data: approve,
      });
    } catch (error) {
      console.log(error);
      res.end();
    }
  })
);
router.post("/swapTransaction", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const filterPool = () =>
        __awaiter(void 0, void 0, void 0, function* () {
          let target = req.body.convertToken;
          if (req.body.tokenName.toLowerCase() == "dfs") {
            if ("eth" == target) {
              const swapTokenAddress = deployedDFS.options.address;
              return { pool: deployedDFSETH, swapTokenAddress };
            } else if ("bnb" == target) {
              const swapTokenAddress = deployedDFS.options.address;
              return { pool: deployedDFSBNB, swapTokenAddress };
            } else if ("usdt" == target) {
              const swapTokenAddress = deployedDFS.options.address;
              return { pool: deployedDFSUSDT, swapTokenAddress };
            } else {
              throw new Error("Invalid Error");
            }
          } else {
            if (req.body.tokenName.toLowerCase() == "eth") {
              if ("dfs" == target) {
                const swapTokenAddress = deployedETH.options.address;
                return { pool: deployedDFSETH, swapTokenAddress };
              } else {
                throw new Error("Invalid Error");
              }
            } else if (req.body.tokenName.toLowerCase() == "usdt") {
              if ("dfs" == target) {
                const swapTokenAddress = deployedUSDT.options.address;
                return { pool: deployedDFSUSDT, swapTokenAddress };
              } else {
                throw new Error("Invalid Error");
              }
            } else if (req.body.tokenName.toLowerCase() == "bnb") {
              if ("dfs" == target) {
                const swapTokenAddress = deployedBNB.options.address;
                return { pool: deployedDFSBNB, swapTokenAddress };
              } else {
                throw new Error("Invalid Error");
              }
            } else {
              res.status(400).send("Invalid token");
            }
          }
        });
      const result = yield filterPool();
      const amount = BigNumber.from(
        Math.floor(req.body.amount * Math.pow(10, 18)).toString()
      );
      const tokenSwap = result.pool.methods
        .swapTokens(result.swapTokenAddress, amount)
        .encodeABI();
      res.send({
        from: req.body.account,
        to: result.pool.options.address,
        data: tokenSwap,
      });
    } catch (error) {
      console.log(error);
      res.send();
    }
  })
);
router.post("/swapBalance", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const myTokenBalance = [];
      const target = yield req.body.account;
      function getBalance(contract, target) {
        return __awaiter(this, void 0, void 0, function* () {
          const balance = yield contract.methods.balanceOf(target).call();
          return Math.floor(balance / Math.pow(10, 18)).toString();
        });
      }
      const dfs = yield getBalance(deployedDFS, target);
      const eth = yield getBalance(deployedETH, target);
      const usdt = yield getBalance(deployedUSDT, target);
      const bnb = yield getBalance(deployedBNB, target);
      myTokenBalance.push({
        dfs,
        eth,
        usdt,
        bnb,
      });
      res.send(myTokenBalance);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  })
);
export default router;
