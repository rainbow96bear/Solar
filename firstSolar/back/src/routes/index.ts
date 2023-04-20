import { Router } from "express";

import defi from "./defi";
import user from "./user";
import sync from "./sync";
import swap from "./swap";

const router = Router();

router.use("/defi", defi);
router.use("/user", user);
router.use("/sync", sync);
router.use("/swap", swap);

export default router;
