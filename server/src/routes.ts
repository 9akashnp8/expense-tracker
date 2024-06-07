import express, { Router } from "express";

import { router as accountRouter } from "./features/account/routes.js";
import { router as transactionRouter } from "./features/transaction/routes.js";
import { router as accountTypeRouter } from "./features/accountType/routes.js";
import { router as categoryGroupRouter } from "./features/categoryGroup/routes.js";
import { router as categoryRouter } from "./features/category/routes.js";
import { router as labelRouter } from "./features/label/routes.js";
import { router as recurringRouter } from './features/recurring/routes.js'
import { router as managementRouter } from "./routes/management/credit-card-manager.routes.js";
import { router as analyticsRouter } from "./routes/analytics/dashboard-analytics.routes.js";
import { router as genAiRouter } from "./routes/analytics/gen-ai.routes.js";

export const router: Router = express.Router()
router.use(express.json())

router.use("/accounts", accountRouter)
router.use("/transactions", transactionRouter)
router.use("/account-types", accountTypeRouter)
router.use("/category-groups", categoryGroupRouter)
router.use("/categories", categoryRouter)
router.use("/labels", labelRouter)
router.use("/recurring", recurringRouter)
router.use("/management/credit-card-settings", managementRouter)
router.use("/analytics", analyticsRouter)
router.use("/analytics", analyticsRouter)
router.use("/analytics", genAiRouter)
