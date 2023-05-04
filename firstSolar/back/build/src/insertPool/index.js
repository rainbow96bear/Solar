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
import db from "../../models/index.js";
import {
  deployed,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index.js";
const initDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield deployed.methods.getPoolInfo().call();
      const DFSETH = yield deployedDFSETH.methods.reserve1().call();
      const eth = yield deployedDFSETH.methods.reserve2().call();
      const DFSUSDT = yield deployedDFSUSDT.methods.reserve1().call();
      const usdt = yield deployedDFSUSDT.methods.reserve2().call();
      const DFSBNB = yield deployedDFSBNB.methods.reserve1().call();
      const bnb = yield deployedDFSBNB.methods.reserve2().call();
      for (let i = 0; i < result.length; i++) {
        const temp = yield db.Pool.findOne({
          where: {
            tokenAddress: result[i][0],
          },
        });
        if (!temp) {
          let firstTokenBalance = 0;
          let secondTokenBalance = 0;
          let fee = 0.3;
          if (result[i][1].includes("ETH")) {
            firstTokenBalance = DFSETH;
            secondTokenBalance = eth;
          } else if (result[i][1].includes("USDT")) {
            firstTokenBalance = DFSUSDT;
            secondTokenBalance = usdt;
          } else if (result[i][1].includes("BNB")) {
            firstTokenBalance = DFSBNB;
            secondTokenBalance = bnb;
          }
          yield db.Pool.create({
            tokenAddress: result[i][0],
            firstToken: result[i][1].split("-")[0],
            secondToken: result[i][1].split("-")[1],
            name: result[i][1],
            platformId: "solar",
            platformLogo: "/imgs/platform/solar.jpg",
            network: "bsc",
            mainNetLogo: `/imgs/mainNet/bsc.jpg`,
            apy: 0,
            tvl: Number(firstTokenBalance) + Number(secondTokenBalance),
            oracleId: result[i][1],
            fee,
            firstTokenBalance,
            secondTokenBalance,
          });
        } else {
          let firstTokenBalance = temp.firstTokenBalance;
          let secondTokenBalance = temp.secondTokenBalance;
          if (result[i][1].includes("ETH")) {
            firstTokenBalance = DFSETH;
            secondTokenBalance = eth;
          } else if (result[i][1].includes("USDT")) {
            firstTokenBalance = DFSUSDT;
            secondTokenBalance = usdt;
          } else if (result[i][1].includes("BNB")) {
            firstTokenBalance = DFSBNB;
            secondTokenBalance = bnb;
          }
          const tvl = Number(firstTokenBalance) + Number(secondTokenBalance);
          if (
            firstTokenBalance !== temp.firstTokenBalance ||
            secondTokenBalance !== temp.secondTokenBalance ||
            tvl !== temp.tvl
          ) {
            yield temp.update({
              firstTokenBalance,
              secondTokenBalance,
              tvl,
            });
          }
        }
      }
      console.log("self-pool inserted");
    } catch (err) {
      console.log(err);
    }
  });
export default initDB;
