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
  mainNetLogo?: string;
  platformLogo?: string;
  tokens?: Array<string>;
}

const router = Router();

export const mainNet = {
  ethereum: 1,
  optimism: 10,
  metis: 43,
  aurora: 53,
  bsc: 56,
  kava: 99,
  fuse: 122,
  heco: 128,
  polygon: 137,
  fantom: 250,
  moonbeam: 1285,
  moonriver: 1285,
  canto: 3030,
  cronos: 36661,
  arbitrum: 42161,
  celo: 42220,
  avax: 43114,
  emerald: 246529,
};
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

router.get("/", async (req: Request, res: Response<LPData[]>) => {
  retries = 0;

  const totalLplListUp = async () => {
    try {
      const now = new Date();
      const yesterday = new Date(now.getTime() - ONE_DAY_MS);

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) => lp.status === "active");

      const data = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

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
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
          };
        })
      );

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
  const networkListUp = async () => {
    try {
      const { network, dex } = req.body;
      const now = new Date();
      const yesterday = new Date(now.getTime() - ONE_DAY_MS);

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) =>
        network
          ? lp.status === "active" && lp.chain === network
          : dex
          ? lp.status === "active" && lp.platformId === dex
          : lp.status === "active"
      );

      const data = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

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
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
          };
        })
      );

      res.send(data);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await networkListUp();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await networkListUp();
});

export default router;
