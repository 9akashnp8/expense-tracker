import {
  getCategoryWiseSpendController,
  getLastWeekSpendController,
  getMonthlySpendController,
} from "../../controllers/analytics/dashboard-analytics.controller.js";

import express from "express";

export const router = express.Router()

router.get("/monthly-spend", getMonthlySpendController)
router.get("/last-week-spend", getLastWeekSpendController)
router.get("/category-spend", getCategoryWiseSpendController)
