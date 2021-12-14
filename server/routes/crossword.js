import express from "express";

const router = express.Router();
import { createCrossword } from "../controllers/crossword.js";

router.post("/", createCrossword);

export default router;
