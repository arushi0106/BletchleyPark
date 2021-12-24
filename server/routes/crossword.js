import express from "express";

const router = express.Router();
import {
  createCrossword,
  playCrossword,
  submitCrossword,
} from "../controllers/crossword.js";

router.post("/", createCrossword);
router.post("/play", playCrossword);
router.post("/play/submit", submitCrossword);

export default router;
