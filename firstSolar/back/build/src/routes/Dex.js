var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import { BigNumber } from "@ethersproject/bignumber";
const web3 = new Web3("wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo");
import { abi as DexAbi } from "../../contracts/artifacts/Dex.json";
dotenv.config();
const router = Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const deployed = new web3.eth.Contract(DexAbi, process.env.DEX_CA);
    let getPoolInfo = yield deployed.methods
        .getLiquidityPool(process.env.DFSToken_CA, process.env.OtherToken_CA)
        .call();
    console.log(getPoolInfo);
    res.end();
}));
router.post("/approve", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = BigNumber.from(Math.floor(req.body.amount * Math.pow(10, 18)).toString());
    res.end();
}));
export default router;
