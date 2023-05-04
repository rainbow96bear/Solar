import Web3 from "web3";
import dotenv from "dotenv";
dotenv.config();
import Dex from "../../contracts/artifacts/Dex.json" assert { "type": "json" };
import DFSToken from "../../contracts/artifacts/DFSToken.json" assert { "type": "json" };
import Token from "../../contracts/artifacts/Token.json" assert { "type": "json" };
import LiquidityPool from "../../contracts/artifacts/LiquidityPool.json" assert { "type": "json" };

const DexAbi = Dex.abi;
const DFSTokenAbi = DFSToken.abi;
const TokenAbi = Token.abi;
const LiquidityPoolAbi = LiquidityPool.abi;

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);
export const deployed = new web3.eth.Contract(DexAbi, process.env.DEX);
export const deployedDFS = new web3.eth.Contract(DFSTokenAbi, process.env.DFS);
export const deployedETH = new web3.eth.Contract(TokenAbi, process.env.ETH);
export const deployedDFSETH = new web3.eth.Contract(
  LiquidityPoolAbi,
  process.env.DFS_ETH
);
export const deployedUSDT = new web3.eth.Contract(TokenAbi, process.env.USDT);
export const deployedDFSUSDT = new web3.eth.Contract(
  LiquidityPoolAbi,
  process.env.DFS_USDT
);
export const deployedBNB = new web3.eth.Contract(TokenAbi, process.env.BNB);
export const deployedDFSBNB = new web3.eth.Contract(
  LiquidityPoolAbi,
  process.env.DFS_BNB
);
