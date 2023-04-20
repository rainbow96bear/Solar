import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// const web3 = new Web3("http://ganache.test.errorcode.help:8545");

const router = Router();

router.post("/login", async (req, res) => {
  console.log("req.body.cookie : ", req.body.cookie);
  console.log("req.body.account : ", req.body.account);
  if (req.body.cookie) {
    // 이미 쿠키가 있다면 로그인 상태이니 이 라우터에 들어와서는 안된다.
    res.send({ msg: "이미 로그인한 상태입니다." });
    // req.body.account = req.body.cookie.split("=")[0];
  }
  console.log("login");
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
});

export default router;
