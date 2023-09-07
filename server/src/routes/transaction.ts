import express from 'express';

import { getTransaction } from '../controllers/transaction/index.js';

export const router = express.Router()

router.get("/", getTransaction)