import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/apiUse", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.send("실패");
  }
});
export default router;
