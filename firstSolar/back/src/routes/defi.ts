import { Router, Request, Response } from "express";
import axios from "axios";

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
const ONE_DAY_MS: number = 24 * 60 * 60 * 1000;
const MAX_RETRIES: number = 3;
const RETRY_DELAY: number = 1000;

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
  // return response.data[lpChain]?.[lpId] ?? 0;
};
router.get("/", async (req: Request, res: Response<LPData[]>) => {
  let retries: number = 0;

  const fetchData = async () => {
    try {
      const now = new Date();
      const yesterday = new Date(now.getTime() - ONE_DAY_MS);

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) => lp.status === "active");

      const data = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId = lp.id;
          const oracleId = lp.oracleId;
          const lpChain = MAIN_NET[lp.chain];

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate = ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

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
          };
        })
      );

      res.send(data);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await fetchData();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await fetchData();
});

export default router;
