import { Router } from "express";
import defi from "./defi.js";
import user from "./user.js";
import sync from "./sync.js";
import swap from "./swap.js";
const router = Router();
router.use("/defi", defi);
router.use("/user", user);
router.use("/sync", sync);
router.use("/swap", swap);
export default router;
