import express from 'express';

const router = express.Router();
import { getCreateForm } from '../controllers/CreateForm.js'

router.post('/', getCreateForm);

export default router;