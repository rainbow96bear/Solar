import { Router } from "express";

import Dex from "./Dex";
const router = Router();

router.use("/Dex", Dex);

export default router;
