import { Router, Request, Response } from "express";
import axios from "axios";
import db from "../../models/index";
import dotenv from "dotenv";
import { BigNumber } from "@ethersproject/bignumber";
import { Op } from "sequelize";

import Pool from "../../models/pool";
import { mainNet } from "../setting";
import {
  deployed,
  deployedDFS,
  deployedETH,
  deployedDFSETH,
  deployedUSDT,
  deployedDFSUSDT,
  deployedBNB,
  deployedDFSBNB,
} from "../deployList";

interface LPData {
  id: string;
  chain: number;
  name: string;
  oracleId: string;
  status: string;
  platform: string;
  symbol: string;
  tvl: number;
  apy: number;
  dailyTvlRate?: number;
  network: string;
  mainNetLogo?: string;
  platformLogo?: string;
  tokens?: Array<string>;
  tokenAddress?: string;
}

interface detailLp {
  addLiquidityUrl: string;
  apy: number;
  assets: Array<string>;
  buyTokenUrl: string;
  chain: string;
  createdAt: number;
  dailyTvlRate: number | null;
  earnContractAddress: string;
  earnedToken: string;
  earnedTokenAddress: string;
  id: string;
  lastHarvest: number;
  mainNetLogo: string;
  name: string;
  network: string;
  oracle: string;
  oracleId: string;
  platformId: string;
  platformLogo: string;
  pricePerFullShare: string;
  removeLiquidityUrl: string;
  risks: Array<string>;
  status: string;
  strategy: string;
  strategyTypeId: string;
  token: string;
  tokenAddress: string;
  tokenAmmId: string;
  tokenDecimals: number;
  tokenProviderId: string;
  tvl: number;
  fee: number;
  firstTokenBalance: number;
  secondTokenBalance: number;
}

const router = Router();

dotenv.config();

const ONE_DAY_MS: number = 24 * 60 * 60 * 1000;
const MAX_RETRIES: number = 3;
const RETRY_DELAY: number = 1000;
let retries: number = 0;

const getTvlData = async (
  lpId: string,
  oracleId: string,
  lpChain: number,
  date?: number
) => {
  const url = date
    ? `https://api.beefy.finance/tvl?${encodeURIComponent(
        oracleId
      )}&date=${date}`
    : `https://api.beefy.finance/tvl?${encodeURIComponent(oracleId)}`;
  return (await axios.get(url)).data[lpChain]?.[lpId] ?? 0;
};

let obj: { from?: string; to?: string; data?: string } = {
  from: "",
  to: "",
  data: "",
};

let getPool: Pool[];

router.get("/", async (req: Request, res: Response<LPData[]>) => {
  retries = 0;
  const pageIndex: number = parseInt(req.query.pageIndex as string);
  const totalLplListUp = async () => {
    try {
      const now: Date = new Date();
      const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);

      getPool = await db.Pool.findAll();

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) => lp.status === "active");

      const returnLpList = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate: number =
            ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

          return {
            id: lpId,
            name: lp.name,
            platformId: lp.platformId,
            network: lp.network,
            oracleId: oracleId,
            status: lp.status,
            symbol: lp.symbol,
            tvl: tvlNow,
            apy:
              (await axios.get(`https://api.beefy.finance/apy?${oracleId}`))
                .data[lpId] ?? 0,
            dailyTvlRate,
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
            tokenAddress: lp.tokenAddress,
          };
        })
      );
      let totalLpList = [...getPool, ...returnLpList];
      const renewalLpList = totalLpList.slice(
        (pageIndex - 1) * 10,
        pageIndex * 10
      );
      const data: any = {
        poolListData: renewalLpList,
        poolListDataLength: totalLpList.length,
      };
      res.send(data);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await totalLplListUp();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await totalLplListUp();
});

router.post("/filter", async (req: Request, res: Response<LPData[]>) => {
  retries = 0;
  const fileterListUp = async () => {
    try {
      const {
        network,
        dex,
        pageIndex,
      }: { network: string; dex: string; pageIndex: number } = req.body;
      const now: Date = new Date();
      const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) =>
        network
          ? lp.status === "active" && lp.chain === network
          : dex
          ? lp.status === "active" && lp.platformId === dex
          : lp.status === "active"
      );
      let filterLpList: Array<detailLp | Pool>;

      const returnLpList = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate: number =
            ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

          return {
            id: lpId,
            name: lp.name,
            platformId: lp.platformId,
            network: lp.network,
            oracleId: oracleId,
            status: lp.status,
            symbol: lp.symbol,
            tvl: tvlNow,
            apy:
              (await axios.get(`https://api.beefy.finance/apy?${oracleId}`))
                .data[lpId] ?? 0,
            dailyTvlRate,
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
            tokenAddress: lp.tokenAddress,
          };
        })
      );

      if (network) {
        getPool = await db.Pool.findAll({ where: { network } });
        filterLpList = [...getPool, ...returnLpList];
      } else filterLpList = [...returnLpList];
      const renewalLpList = filterLpList.slice(
        (pageIndex - 1) * 10,
        pageIndex * 10
      );
      const data: any = {
        poolListData: renewalLpList,
        poolListDataLength: filterLpList.length,
      };
      res.send(data);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await fileterListUp();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await fileterListUp();
});
router.post("/check", async (req: Request, res: Response) => {
  const { inputAPI } = req.body;
  try {
    if (!inputAPI) return res.status(403).send({ msg: "No Message" });
    (await axios.get(`https://api.beefy.finance/${inputAPI}`)).data;
    res.status(200).send({ msg: `${inputAPI} is Exist API` });
  } catch (err) {
    res.status(201).send({ msg: `${inputAPI} is No Exist API` });
  }
});

router.post("/detail", async (req: Request, res: Response<detailLp[]>) => {
  const { id } = req.body;
  try {
    const now: Date = new Date();
    const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);
    const detailList = (
      await axios.get(`https://api.beefy.finance/vaults`)
    ).data.filter((lp: any) => lp.status == "active" && lp.oracleId == id);
    let data: detailLp[];
    if (!detailList.length)
      data = await db.Pool.findAll({ where: { oracleId: id } });
    else {
      data = await Promise.all(
        detailList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate: number =
            ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

          return {
            ...lp,
            tvl: tvlNow,
            apy:
              (await axios.get(`https://api.beefy.finance/apy?${oracleId}`))
                .data[lpId] ?? 0,
            dailyTvlRate,
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            fee:
              (await axios.get(`https://api.beefy.finance/fees`)).data[lpId]
                .performance.call ?? 0,
            firstTokenBalance:
              (await axios.get(`https://api.beefy.finance/lps/breakdown`)).data[
                lpId
              ]?.balances[0] ?? 0,
            secondTokenBalance:
              (await axios.get(`https://api.beefy.finance/lps/breakdown`)).data[
                lpId
              ]?.balances[1] ?? 0,
          };
        })
      );
    }
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/approveDFS", async (req: Request, res: Response) => {
  try {
    const {
      account,
      approveDFSAmount,
      lpSymbol,
    }: { account: string; approveDFSAmount?: any; lpSymbol?: string } =
      req.body;
    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(approveDFSAmount * 10 ** 18).toString()
    );

    if (lpSymbol.includes("ETH")) {
      obj.from = account;
      obj.to = process.env.DFS;
      obj.data = await deployedDFS.methods
        .approve(process.env.DFS_ETH, tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      obj.from = account;
      obj.to = process.env.DFS;
      obj.data = await deployedBNB.methods
        .approve(process.env.DFS_BNB, tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      obj.from = account;
      obj.to = process.env.DFS;
      obj.data = await deployedUSDT.methods
        .approve(process.env.DFS_USDT, tokenPrice1)
        .encodeABI();
    }
    res.send(obj);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/approveOtherToken", async (req: Request, res: Response) => {
  try {
    const {
      account,
      approveOtherAmount,
      lpSymbol,
    }: { account: string; approveOtherAmount?: any; lpSymbol?: string } =
      req.body;
    const tokenPrice2: BigNumber = BigNumber.from(
      Math.floor(approveOtherAmount * 10 ** 18).toString()
    );
    if (lpSymbol.includes("ETH")) {
      obj.from = account;
      obj.to = process.env.ETH;
      obj.data = await deployedETH.methods
        .approve(process.env.DFS_ETH, tokenPrice2)
        .encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      obj.from = account;
      obj.to = process.env.BNB;
      obj.data = await deployedBNB.methods
        .approve(process.env.DFS_BNB, tokenPrice2)
        .encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      obj.from = account;
      obj.to = process.env.USDT;
      obj.data = await deployedUSDT.methods
        .approve(process.env.DFS_USDT, tokenPrice2)
        .encodeABI();
    }
    res.send(obj);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/addLiquidity", async (req: Request, res: Response) => {
  try {
    const {
      account,
      token1,
      token2,
      lpSymbol,
    }: { account: string; token1?: any; token2: any; lpSymbol?: string } =
      req.body;
    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(token1 * 10 ** 18).toString()
    );
    const tokenPrice2: BigNumber = BigNumber.from(
      Math.floor(token2 * 10 ** 18).toString()
    );
    if (lpSymbol.includes("ETH")) {
      obj.from = account;
      obj.to = process.env.DFS_ETH;
      obj.data = await deployedDFSETH.methods
        .addLiquidity(tokenPrice1, tokenPrice2)
        .encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      obj.from = account;
      obj.to = process.env.DFS_BNB;
      obj.data = await deployedDFSBNB.methods
        .addLiquidity(tokenPrice1, tokenPrice2)
        .encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      obj.from = account;
      obj.to = process.env.DFS_USDT;
      obj.data = await deployedDFSUSDT.methods
        .addLiquidity(tokenPrice1, tokenPrice2)
        .encodeABI();
    }
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/approveLp", async (req: Request, res: Response) => {
  try {
    const {
      account,
      approveDepositAmount,
      lpSymbol,
    }: { account: string; approveDepositAmount?: any; lpSymbol?: string } =
      req.body;
    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(approveDepositAmount * 10 ** 18).toString()
    );

    if (lpSymbol.includes("ETH")) {
      obj.from = account;
      obj.to = process.env.DFS_ETH;
      obj.data = await deployedDFSETH.methods
        .approve(process.env.DEX, tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      obj.from = account;
      obj.to = process.env.DFS_BNB;
      obj.data = await deployedDFSBNB.methods
        .approve(process.env.DEX, tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      obj.from = account;
      obj.to = process.env.DFS_USDT;
      obj.data = await deployedDFSUSDT.methods
        .approve(process.env.DEX, tokenPrice1)
        .encodeABI();
    }
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/deposit", async (req: Request, res: Response) => {
  try {
    const {
      account,
      depositAmount,
      lpSymbol,
    }: { account: string; depositAmount?: any; lpSymbol?: string } = req.body;

    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(depositAmount * 10 ** 18).toString()
    );

    if (lpSymbol.includes("ETH")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_ETH)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.deposit(pid, tokenPrice1).encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_BNB)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.deposit(pid, tokenPrice1).encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_USDT)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.deposit(pid, tokenPrice1).encodeABI();
    }
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/withdraw", async (req: Request, res: Response) => {
  try {
    const {
      account,
      withdrawAmount,
      lpSymbol,
    }: { account: string; withdrawAmount?: any; lpSymbol?: string } = req.body;

    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(withdrawAmount * 10 ** 18).toString()
    );

    if (lpSymbol.includes("ETH")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_ETH)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.withdraw(pid, tokenPrice1).encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_BNB)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.withdraw(pid, tokenPrice1).encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      const pid: number = await deployed.methods
        .getPid(process.env.DFS_USDT)
        .call();
      obj.from = account;
      obj.to = process.env.DEX;
      obj.data = await deployed.methods.withdraw(pid, tokenPrice1).encodeABI();
    }
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/removeLiquidity", async (req: Request, res: Response) => {
  try {
    const {
      account,
      lpSymbol,
      removeAmount,
    }: { account: string; lpSymbol?: string; removeAmount?: any } = req.body;
    const tokenPrice1: BigNumber = BigNumber.from(
      Math.floor(removeAmount * 10 ** 18).toString()
    );
    if (lpSymbol.includes("ETH")) {
      obj.from = account;
      obj.to = process.env.DFS_ETH;
      obj.data = await deployedDFSETH.methods
        .removeLiquidity(tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("BNB")) {
      obj.from = account;
      obj.to = process.env.DFS_BNB;
      obj.data = await deployedDFSBNB.methods
        .removeLiquidity(tokenPrice1)
        .encodeABI();
    } else if (lpSymbol.includes("USDT")) {
      obj.from = account;
      obj.to = process.env.DFS_USDT;
      obj.data = await deployedDFSUSDT.methods
        .removeLiquidity(tokenPrice1)
        .encodeABI();
    }
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/search", async (req: Request, res: Response) => {
  try {
    const { search, pageIndex }: { search: string; pageIndex: number } =
      req.body;
    let list: Array<Pool> = [];

    if (search) {
      const [poolList, activeLpList] = await Promise.all([
        db.Pool.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.like]: `%${search}%` } },
              { tokenAddress: { [Op.like]: `%${search}%` } },
            ],
          },
        }),
        axios.get(`https://api.beefy.finance/vaults`),
      ]);

      const activeList: any[] = activeLpList?.data.filter(
        (lp: any) =>
          lp.status === "active" &&
          (lp.name?.toLowerCase().includes(search.toLowerCase()) ||
            lp.tokenAddress?.toLowerCase().includes(search.toLowerCase()))
      );

      list = [...poolList, ...activeList];
    } else {
      const [poolList, activeLpList] = await Promise.all([
        db.Pool.findAll(),
        axios.get(`https://api.beefy.finance/vaults`),
      ]);

      const activeList: any[] = activeLpList?.data.filter(
        (lp: any) => lp.status === "active"
      );

      list = [...poolList, ...activeList];
    }
    const paginationMyLpList = list.slice((pageIndex - 1) * 10, pageIndex * 10);
    const data: any = {
      poolListData: paginationMyLpList,
      poolListDataLength: list.length,
    };
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/updatePool", async (req: Request, res: Response) => {
  try {
    const { tokenAddress }: { tokenAddress: string } = req.body;

    const pool = await db.Pool.findOne({
      where: { tokenAddress },
    });

    if (!pool) {
      throw new Error(
        `Pool with address ${tokenAddress} not found in the database`
      );
    }

    let firstTokenBalance = pool.firstTokenBalance;
    let secondTokenBalance = pool.secondTokenBalance;
    let reserve1: string;
    let reserve2: string;

    switch (pool.secondToken) {
      case "ETH":
        reserve1 = await deployedDFSETH.methods.reserve1().call();
        reserve2 = await deployedDFSETH.methods.reserve2().call();
        break;
      case "USDT":
        reserve1 = await deployedDFSUSDT.methods.reserve1().call();
        reserve2 = await deployedDFSUSDT.methods.reserve2().call();
        break;
      case "BNB":
        reserve1 = await deployedDFSBNB.methods.reserve1().call();
        reserve2 = await deployedDFSBNB.methods.reserve2().call();
        break;
      default:
        break;
    }

    if (reserve1 != firstTokenBalance || reserve2 != secondTokenBalance) {
      const tvl = Number(reserve1) + Number(reserve2);
      await pool.update({
        firstTokenBalance: reserve1,
        secondTokenBalance: reserve2,
        tvl,
      });
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500).send("update error");
  }
});

router.post("/getLPBalance", async (req: Request, res: Response) => {
  try {
    const { pid, account }: { pid: number; account: string } = req.body;
    const stakingBalance = await deployed.methods
      .getLPBalance(pid)
      .call({ from: account });

    res.send(stakingBalance);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
export default router;
