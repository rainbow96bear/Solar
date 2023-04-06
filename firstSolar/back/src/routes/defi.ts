import { Router, Request, Response } from "express";
import { BlockVisionProvider, BvNetwork } from "blockvision.js";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const bv = new BlockVisionProvider(BvNetwork.ETH_MAINNET);

  const accountDefi = await bv.getAccountDeFiPortfolio({
    accountAddress: "0xccf7d009115f8ee80f11f75b18fb51cbaf831e63",
  });

  const topCollect = await bv.getNFTTopCollections({});

  res.send({ accountDefi, topCollect });
});

export default router;
