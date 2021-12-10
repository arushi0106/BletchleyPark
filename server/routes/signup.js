import express from 'express';

const router = express.Router();
import { getsignup } from '../controllers/signup.js'

router.get('/', getsignup);

export default router;