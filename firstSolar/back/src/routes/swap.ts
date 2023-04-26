import express from "express";
import Web3 from "web3";

// Swap
import { BigNumber } from "@ethersproject/bignumber";
import { AbiItem } from "web3-utils";
import { abi as DFSAbi } from "../../contracts/artifacts/Token.json";
import { abi as DfsEthPoolAbi } from "../../contracts/artifacts/LiquidityPool.json";

import {
  deployedDFS,
  deployedETH,
  deployedUSDT,
  deployedBNB,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index";
// MainNet
const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/swapApprove", async (req, res) => {
  try {
    const filterToken = async () => {
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
    };

    const result = await filterToken();

    const amount = BigNumber.from(
      Math.floor(req.body.amount * 10 ** 18).toString()
    );
    // 해당 풀 어드레스
    let approve = await result.methods
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
});

router.post("/swapTransaction", async (req, res) => {
  try {
    const filterPool = async () => {
      let target = req.body.convertToken;

      if (req.body.tokenName.toLowerCase() == "dfs") {
        if ("eth" == target) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else if ("bnb" == target) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSBNB, swapTokenAddress };
          //
        } else if ("usdt" == target) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSUSDT, swapTokenAddress };
          //
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
    };
    const result = await filterPool();

    const amount = BigNumber.from(
      Math.floor(req.body.amount * 10 ** 18).toString()
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
});

router.post("/swapBalance", async (req, res) => {
  try {
    const myTokenBalance = [];
    const target = await req.body.account;

    async function getBalance(contract: any, target: string) {
      const balance = await contract.methods.balanceOf(target).call();
      return Math.floor(balance / 10 ** 18).toString();
    }

    const dfs = await getBalance(deployedDFS, target);
    const eth = await getBalance(deployedETH, target);
    const usdt = await getBalance(deployedUSDT, target);
    const bnb = await getBalance(deployedBNB, target);

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
});

export default router;
