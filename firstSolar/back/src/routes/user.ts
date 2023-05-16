import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { deployedDFSETH, deployedDFSUSDT, deployedDFSBNB } from "../deployList";

dotenv.config();

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
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
});

router.post("/logout", async (req: Request, res: Response) => {
  try {
    const walletKind: string = req.body.walletKind;
    const address: string = req.body.address;
    const cookieName = walletKind + ":" + address;

    res.cookie(cookieName, "", { expires: new Date(0) });
    res.end();
  } catch (error) {
    console.error(error);
    res.end();
  }
});

router.post("/lpBalance", async (req: Request, res: Response) => {
  const { account, symbol }: { account: string; symbol: string } = req.body;
  let balance: number;

  switch (symbol) {
    case "DFS-ETH":
      balance = await deployedDFSETH.methods.userLiquidity(account).call();
    case "DFS-BNB":
      balance = await deployedDFSBNB.methods.userLiquidity(account).call();
    case "DFS-USDT":
      balance = await deployedDFSUSDT.methods.userLiquidity(account).call();
    default:
      break;
  }

  res.send(balance);
});

export default router;
