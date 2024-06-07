import {
  dashboardGenAIInsightsController,
} from "../../controllers/analytics/gen-ai.controller.js";

import express from "express";

export const router = express.Router()

router.get("/ai-insights", dashboardGenAIInsightsController)
