import express from "express";

const router = express.Router();
import { createCrossword, playCrossword} from "../controllers/crossword.js";

router.post("/", createCrossword);
router.post("/play", playCrossword)

export default router;
