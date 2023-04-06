import express from "express";
import sync from "./sync";

const router = express.Router();
console.log("3");
router.use("/sync", sync);
export default router;
