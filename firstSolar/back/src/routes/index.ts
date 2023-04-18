import { Router } from "express";

import defi from "./defi";
import user from "./user";

const router = Router();

router.use("/defi", defi);
router.use("/user", user);

export default router;
