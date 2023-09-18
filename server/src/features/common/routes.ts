import express, { Router } from 'express';

import { router as accountRouter } from "../account/routes.js";
import { router as transactionRouter } from "../transaction/routes.js";
import { router as accountTypeRouter } from '../accountType/routes.js';
import { router as categoryGroupRouter } from '../categoryGroup/routes.js';
import { router as categoryRouter } from '../category/routes.js';
import { router as labelRouter } from '../label/routes.js';

export const router: Router = express.Router()
router.use(express.json())

router.use('/account', accountRouter)
router.use('/transaction', transactionRouter)
router.use('/accountType', accountTypeRouter)
router.use('/categoryGroup', categoryGroupRouter)
router.use('/category', categoryRouter)
router.use('/label', labelRouter)