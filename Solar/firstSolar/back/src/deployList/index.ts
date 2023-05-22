import { AbiItem } from "web3-utils";
import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

import { abi as DexAbi } from "../../contracts/artifacts/Dex.json";
import { abi as DFSTokenAbi } from "../../contracts/artifacts/DFSToken.json";
import { abi as TokenAbi } from "../../contracts/artifacts/Token.json";
import { abi as LiquidityPoolAbi } from "../../contracts/artifacts/LiquidityPool.json";

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);

export const deployed = new web3.eth.Contract(
  DexAbi as AbiItem[],
  process.env.DEX
);
export const deployedDFS = new web3.eth.Contract(
  DFSTokenAbi as AbiItem[],
  process.env.DFS
);
export const deployedETH = new web3.eth.Contract(
  TokenAbi as AbiItem[],
  process.env.ETH
);
export const deployedDFSETH = new web3.eth.Contract(
  LiquidityPoolAbi as AbiItem[],
  process.env.DFS_ETH
);

export const deployedUSDT = new web3.eth.Contract(
  TokenAbi as AbiItem[],
  process.env.USDT
);
export const deployedDFSUSDT = new web3.eth.Contract(
  LiquidityPoolAbi as AbiItem[],
  process.env.DFS_USDT
);

export const deployedBNB = new web3.eth.Contract(
  TokenAbi as AbiItem[],
  process.env.BNB
);
export const deployedDFSBNB = new web3.eth.Contract(
  LiquidityPoolAbi as AbiItem[],
  process.env.DFS_BNB
);
