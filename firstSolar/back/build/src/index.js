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
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import db from "../models/index.js";
import initDB from "./insertPool/index.js";
const app = express();
dotenv.config();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connectToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield db.sequelize.sync({ force: false });
      yield initDB();
      console.log("db connected");
    } catch (err) {
      console.error(err);
    }
  });
connectToDB();
app.use("/api", routes);
app.listen(8080, () => {
  console.log("Server Opened");
});
