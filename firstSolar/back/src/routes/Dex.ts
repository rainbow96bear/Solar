import { Router, Request, Response } from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { BigNumber } from "@ethersproject/bignumber";

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);
// 2ca09ab04a7c44dcb6f886deeba97502
// const web3 = new Web3(
//   "wss://polygon-mumbai.infura.io/ws/v3/417c70b502174e5cb15ef580dae6b3d8"
// );

import { abi as DexAbi } from "../../contracts/artifacts/Dex.json";
import { abi as LiquiditypoolAbi } from "../../contracts/artifacts/LiquidityPool.json";
// import { abi as testAbi } from "../contracts/artifacts/test.json";

dotenv.config();

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  // console.log(typeof req.body.token1);
  const deployed = new web3.eth.Contract(
    DexAbi as AbiItem[],
    process.env.DEX_CA
  );
  // console.log(deployed);
  // const tokenamount1 = BigNumber.from(Math.floor(0.09 * 10 ** 18).toString());

  let getpoolInfo = await deployed.methods
    .getLiquidityPool(process.env.DFSToken_CA, process.env.OtherToken_CA)
    .call();

  console.log(getpoolInfo);

  // const lpDeployed = new web3.eth.Contract(
  //   LiquiditypoolAbi as AbiItem[],
  //   process.env.DFSLP_CA
  // );
  // console.log(deployed);
  // console.log(lpDeployed);

  // const tokenamount1 = BigNumber.from(
  //   Math.floor(req.body.token1 * 10 ** 18).toString()
  // );
  // // 1000000000000000000

  // const tokenamount2 = BigNumber.from(
  //   Math.floor(req.body.token2 * 10 ** 18).toString()
  // );
  // const amount = web3.utils.toWei("1", "ether");
  // const bigNumber = web3.utils.toBN(1234567890);
  // console.log(amount);
  // console.log(bigNumber);
  // console.log(deployed);

  // let getpoolInfo = await deployed.methods.getpoolInfo().call();
  // console.log(typeof getpoolInfo, getpoolInfo);

  // let addLiquidity = await lpDeployed.methods
  //   .addLiquidity(tokenamount1, tokenamount2)
  //   .encodeABI();

  // console.log(addLiquidity);
  // let DFS = await deployed.methods.owner().call();
  // console.log(DFS);
  // res.send(getpoolInfo);
  // res.send(getpoolInfo);
  res.end();
});

router.post("/approve", async (req: Request, res: Response) => {
  // console.log(typeof req.body.token1);
  // const deployed = new web3.eth.Contract(
  //   DexAbi as AbiItem[],
  //   process.env.Dex_CA
  // );
  // const lpDeployed = new web3.eth.Contract(
  //   LiquiditypoolAbi as AbiItem[],
  //   process.env.DFSLP_CA
  // );
  // console.log(deployed);
  // console.log(lpDeployed);

  const amount = BigNumber.from(
    Math.floor(req.body.amount * 10 ** 18).toString()
  );
  // 1000000000000000000

  // const tokenamount2 = BigNumber.from(
  //   Math.floor(req.body.token2 * 10 ** 18).toString()
  // );
  // const amount = web3.utils.toWei("1", "ether");
  // const bigNumber = web3.utils.toBN(1234567890);
  // console.log(amount);
  // console.log(bigNumber);

  // let approve = await lpDeployed.methods
  //   .approve(process.env.Dex_CA, amount)
  //   .encodeABI();

  // console.log(approve);
  // // let DFS = await deployed.methods.owner().call();
  // // console.log(DFS);
  // res.send(approve);
  res.end();
});

export default router;
