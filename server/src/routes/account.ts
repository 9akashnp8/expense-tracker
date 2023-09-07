import express from 'express';

import { getAccounts } from '../controllers/account';

export const router = express.Router()

router.get('/', getAccounts)