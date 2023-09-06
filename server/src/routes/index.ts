import express, { Router } from 'express';

import { router as accountRouter } from "./account.js";
import { router as transactionRouter } from "./transaction.js";
import { router as accountTypeRouter } from './accountType.js';
import { router as categoryGroupRouter } from './categoryGroup.js';
import { router as categoryRouter } from './category.js';
import { router as labelRouter } from './label.js';

export const router: Router = express.Router()

router.use('/account', accountRouter)
router.use('/transaction', transactionRouter)
router.use('/accountType', accountTypeRouter)
router.use('/categoryGroup', categoryGroupRouter)
router.use('/category', categoryRouter)
router.use('/label', labelRouter)