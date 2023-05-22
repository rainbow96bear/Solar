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
import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  deployedDFSETH,
  deployedDFSUSDT,
  deployedDFSBNB,
} from "../deployList/index.js";
dotenv.config();
const router = Router();
router.post("/login", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      if (req.body.cookie) {
        res.send({ msg: "이미 로그인한 상태입니다." });
      }
      if (req.body.account == undefined) {
        res.send({
          msg: "전자지갑에 로그인을 하지 않았는데 이 라우터에 요청을 보냈습니다.",
        });
      } else {
        res.cookie(
          `${req.body.walletKind}:${req.body.account}`,
          jwt.sign(
            {
              walletKind: req.body.walletKind,
              userAddress: req.body.account,
            },
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "30m", issuer: "Solar's server" }
          )
        );
        res.send({
          msg: "쿠키가 없었고 전자지갑에 로그인을 한 상태였기에 성공적으로 로그인 판정하여 쿠키를 발급하였습니다.",
        });
      }
    } catch (error) {
      console.error(error);
      res.end();
    }
  })
);
router.post("/logout", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const walletKind = req.body.walletKind;
      const address = req.body.address;
      const cookieFullName = walletKind + ":" + address;
      res.clearCookie(cookieFullName);
      res.end();
    } catch (error) {
      console.error(error);
      res.end();
    }
  })
);
router.post("/lpBalance", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { account, symbol } = req.body;
    let balance;
    switch (symbol) {
      case "DFS-ETH":
        balance = yield deployedDFSETH.methods.userLiquidity(account).call();
      case "DFS-BNB":
        balance = yield deployedDFSBNB.methods.userLiquidity(account).call();
      case "DFS-USDT":
        balance = yield deployedDFSUSDT.methods.userLiquidity(account).call();
      default:
        break;
    }
    res.send(balance);
  })
);
export default router;
