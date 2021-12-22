import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import {getdashboard} from "../controllers/dashboard.js";
import {getnewsfeed} from "../controllers/newsfeed.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/dashboard",getdashboard);
router.get('/newsfeed',getnewsfeed);



export default router;