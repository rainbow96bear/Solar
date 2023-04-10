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

const formatNumber = (num: number) => {
  const digits = Math.floor(Math.log10(num)) + 1;
  if (digits <= 3) {
    return num.toFixed(0);
  } else if (digits <= 6) {
    return (num / 1000).toFixed(2) + "K";
  } else {
    return (num / 1000000).toFixed(2) + "M";
  }
};

router.get("/", async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const vaultsData = (await axios.get(`https://api.beefy.finance/vaults`))
      .data;
    const activeLpList = vaultsData.filter((lp) => lp.status === "active");

    const data = await Promise.all(
      activeLpList.map(async (lp) => {
        const lpId = lp.id;
        const oracleId = lp.oracleId;
        let lpChain = MAIN_NET[lp.chain];

        const [tvlData, apyData] = await Promise.all([
          axios
            .get(`https://api.beefy.finance/tvl?${oracleId}`)
            .then((res) => res.data[lpChain]?.[lpId] ?? 0),
          axios
            .get(`https://api.beefy.finance/apy?${oracleId}`)
            .then((res) => res.data[lpId] ?? 0),
        ]);

        return {
          ...lp,
          tvl: formatNumber(tvlData),
          apy: apyData,
        };
      })
    );
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send();
  }
});

router.get("/testing", async (req: Request, res: Response) => {
  try {
    const query = `
  query {
    liquidityPools {
      totalValueLockedUSD
      id
      cumulativeVolumeUSD
      inputTokens {
        id
        name
        symbol
      }
      name
      symbol
      outputTokenSupply
    }
  }
`;
    // API_KEY = e4184b2d92093bcb3e22c30ae67b58ea
    const result = (
      await axios.post(
        "https://gateway.thegraph.com/api/e4184b2d92093bcb3e22c30ae67b58ea/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7",
        {
          query,
        }
      )
    ).data;

    res.send(result);
  } catch (error) {
    console.error(error);
    res.send();
  }
});

export default router;
