import { Router } from "express";

import defi from "./defi";
import user from "./user";
import sync from "./sync";
import Dex from "./Dex";

const router = Router();

router.use("/Dex", Dex);
router.use("/defi", defi);
router.use("/user", user);
router.use("/sync", sync);

export default router;
