import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import { getdashboard } from "../controllers/dashboard.js";
import { getnewsfeed } from "../controllers/newsfeed.js";
import {getleaderboard} from "../controllers/dashboard.js"

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/dashboard/:id", getdashboard);
router.get("/dashboard/leaderboard/:crossid", getleaderboard);
router.get("/newsfeed", getnewsfeed);

export default router;
