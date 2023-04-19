import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

import routes from "./routes/index";
import db from "../models/index";

import { abi as DexAbi } from "../contracts/artifacts/Dex.json";

const app: Express = express();

dotenv.config();

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectToDB = async () => {
  try {
    await db.sequelize.sync({ force: false });

    const deployed = new web3.eth.Contract(
      DexAbi as AbiItem[],
      process.env.DEX
    );
    const result = await deployed.methods.getpoolInfo().call();
    for (let i = 0; i < result.length; i++) {
      const temp = await db.Pool.findOne({
        where: {
          tokenAddress: result[i][0],
        },
      });
      if (!temp)
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
        });
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
