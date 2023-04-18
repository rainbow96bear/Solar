import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index";
import db from "../models/index";

const app: Express = express();

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

// 1.Express를 열 때 createLiquidityPool하는 코드

app.use("/api", routes);
app.listen(8080, () => {
  console.log("Server Opened");
});
