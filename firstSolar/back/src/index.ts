import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/index";
import db from "../models/index";

import {
  deployed,
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "./deployList";
const app: Express = express();

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectToDB = async () => {
  try {
    await db.sequelize.sync({ force: false });

    const result = await deployed.methods.getpoolInfo().call();

    const DFSETH = await deployedDFSETH.methods.reserve1().call();
    const eth = await deployedDFSETH.methods.reserve2().call();

    const DFSUSDT = await deployedDFSUSDT.methods.reserve1().call();
    const usdt = await deployedDFSUSDT.methods.reserve2().call();

    const DFSBNB = await deployedDFSBNB.methods.reserve1().call();
    const bnb = await deployedDFSBNB.methods.reserve2().call();

    for (let i = 0; i < result.length; i++) {
      const temp = await db.Pool.findOne({
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
        db.Pool.create({
          tokenAddress: result[i][0],
          firstToken: result[i][1].split("-")[0],
          secondToken: result[i][1].split("-")[1],
          name: result[i][1],
          platformId: "solar",
          platformLogo: "./imgs/platform/solar.jpg",
          network: "bsc",
          mainNetLogo: `/imgs/mainNet/bsc.jpg`,
          apy: 0,
          tvl: 0,
          oracleId: result[i][1],
          fee,
          firstTokenBalance,
          secondTokenBalance,
        });
      }
    }
    console.log("db connected & self-pool inserted");
  } catch (err) {
    console.error(err);
  }
};

connectToDB();

app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server Opened");
});
