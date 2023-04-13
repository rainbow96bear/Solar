import { Router, Request, Response } from "express";
import axios from "axios";

interface LPData {
  id: string;
  chain: number;
  name: string;
  oracleId: string;
  address?: string;
  status: string;
  platform?: string;
  symbol: string;
  decimals?: number;
  vaultSymbol?: string;
  vaultDecimals?: number;
  tvl: number;
  apy: number;
  dailyTvlRate?: number;
}

const router = Router();

export const MAIN_NET = {
  aurora: 53,
  avax: 43114,
  bsc: 56,
  canto: 3030,
  celo: 42220,
  cronos: 36661,
  emerald: 246529,
  ethereum: 1,
  fantom: 250,
  fuse: 122,
  heco: 128,
  kava: 99,
  moonbeam: 1285,
  moonriver: 1285,
  optimism: 10,
  polygon: 137,
  metis: 43,
  arbitrum: 42161,
};
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

router.get("/", async (req: Request, res: Response<LPData[]>) => {
  try {
    const now = new Date();
    const yesterday = new Date(now.getTime() - ONE_DAY_MS);

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
      const response = await axios.get(url);
      return response.data[lpChain]?.[lpId] ?? 0;
    };

    const activeLpList = (
      await axios.get(`https://api.beefy.finance/vaults`)
    ).data.filter((lp: any) => lp.status === "active");
    res.send(activeLpList);
    // const data = await Promise.all(
    //   activeLpList.map(async (lp: any) => {
    //     const lpId = lp.id;
    //     const oracleId = lp.oracleId;
    //     const lpChain = MAIN_NET[lp.chain];

    //     const [tvlNow, tvlYesterday] = await Promise.all([
    //       getTvlData(lpId, oracleId, lpChain),
    //       getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
    //     ]);

    //     const dailyTvlRate = ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

    //     return {
    //       ...lp,
    //       tvl: tvlNow,
    //       apy:
    //         (await axios.get(`https://api.beefy.finance/apy?${oracleId}`)).data[
    //           lpId
    //         ] ?? 0,
    //       dailyTvlRate,
    //     };
    //   })
    // );

    // res.send(data);
  } catch (error) {
    console.error(error);
    res.send();
  }
});

export default router;
