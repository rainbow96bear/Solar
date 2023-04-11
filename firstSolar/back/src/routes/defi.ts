import { Router, Request, Response } from "express";
import axios from "axios";

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
  kava: 0x63,
  moonbeam: 1285,
  moonriver: 1285,
  optimism: 10,
  polygon: 137,
  metis: 43,
  arbitrum: 42161,
};

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
  dailyTvlRate: number;
}

router.get("/", async (req: Request, res: Response<LPData[]>) => {
  try {
    const vaultsData = (await axios.get(`https://api.beefy.finance/vaults`))
      .data;
    const activeLpList = vaultsData.filter((lp) => lp.status === "active");

    const data = await Promise.all(
      activeLpList.map(async (lp) => {
        const lpId = lp.id;
        const oracleId = lp.oracleId;
        let lpChain = MAIN_NET[lp.chain];

        const [tvlData, apyData, yesterdayTVL] = await Promise.all([
          axios
            .get(`https://api.beefy.finance/tvl?${oracleId}`)
            .then((res) => res.data[lpChain]?.[lpId] ?? 0),
          axios
            .get(`https://api.beefy.finance/apy?${oracleId}`)
            .then((res) => res.data[lpId] ?? 0),
          axios
            .get(`https://api.beefy.finance/tvl?${oracleId}&day=1`)
            .then((res) => res.data[lpChain]?.[lpId] ?? 0),
        ]);

        return {
          ...lp,
          tvl: tvlData,
          apy: apyData,
          dailyTvlRate: (tvlData / yesterdayTVL - 1) * 100,
        };
      })
    );
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send();
  }
});

export default router;
