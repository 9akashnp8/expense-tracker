import express, { Router } from "express";

import { router as accountRouter } from "./features/account/routes.js";
import { router as transactionRouter } from "./features/transaction/routes.js";
import { router as accountTypeRouter } from "./features/accountType/routes.js";
import { router as categoryGroupRouter } from "./features/categoryGroup/routes.js";
import { router as categoryRouter } from "./features/category/routes.js";
import { router as labelRouter } from "./features/label/routes.js";

export const router: Router = express.Router()
router.use(express.json())

router.use("/accounts", accountRouter)
router.use("/transactions", transactionRouter)
router.use("/account-types", accountTypeRouter)
router.use("/category-groups", categoryGroupRouter)
router.use("/categories", categoryRouter)
router.use("/labels", labelRouter)