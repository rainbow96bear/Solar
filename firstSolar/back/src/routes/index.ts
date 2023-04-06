import { Router } from "express";

import defi from "./defi";
import sync from "./sync";

const router = Router();

router.use("/defi", defi);
router.use("/sync", sync);

export default router;
