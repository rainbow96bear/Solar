import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/index";
import db from "../models/index";
import initDB from "./insertPool";

const app: Express = express();

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectToDB = async () => {
  try {
    await db.sequelize.sync({ force: false });
    await initDB();
    console.log("db connected");
  } catch (err) {
    console.error(err);
  }
};

connectToDB();

app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server Opened");
});
