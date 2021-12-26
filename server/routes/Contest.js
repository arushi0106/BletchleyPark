import express from "express";
import { getContest, getAllContest } from "../controllers/contest.js";

const router = express.Router();

router.get("/all",getAllContest);
router.get("/", getContest);

export default router;
