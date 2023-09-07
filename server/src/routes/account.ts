import express from 'express';

import { getAccounts } from '../controllers/account/index.js';

export const router = express.Router()

router.get('/', getAccounts)