import { Request, Response } from "express-serve-static-core";
import { getAiInsights } from "../../services/management/analytics/gen-ai.service.js";
import { createSuccessResponse } from "../../features/common/utils/response.js";
import { getCategoryWiseSpend } from "../../services/management/analytics/dashboard-analytics.service.js";

const BASE_PROMPT = `
Analyze my spending by category and generate
insights based on the same. Keep the insights simple
and limit the response to single paragraph.

Here is the data:
{}

Insights:

`
export async function dashboardGenAIInsightsController(req: Request, res: Response) {
  const categorySpend = await getCategoryWiseSpend()
  const prompt = BASE_PROMPT.replace("{}", JSON.stringify(categorySpend))
  const insight = await getAiInsights(prompt)
  return createSuccessResponse(req, res, 200, "", insight)
}