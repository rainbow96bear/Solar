import { Router } from "express";

import defi from "./defi";
import user from "./user";
import sync from "./sync";

const router = Router();

router.use("/defi", defi);
router.use("/user", user);
router.use("/sync", sync);

export default router;
