import type { Request, Response } from "express-serve-static-core";

import { createFailureResponse, createSuccessResponse } from "../../features/common/utils/response.js";
import { getCategoryWiseSpend, getLastWeekSpend, getMonthlySpend } from "../../services/management/analytics/dashboard-analytics.service.js";

export async function getMonthlySpendController(req: Request, res: Response) {
  const result = await getMonthlySpend(2)
  return createSuccessResponse(req, res, 200, "", result)
}

export async function getLastWeekSpendController(req: Request, res: Response) {
  const result = await getLastWeekSpend()
  if (!result) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 200, "", result)
}

export async function getCategoryWiseSpendController(req: Request, res: Response) {
  let result = await getCategoryWiseSpend()
  // Convert values to number for correct plotting on chart
  result = result?.map((data) => ({...data, sum: Number(data["sum"])}))
  if (!result) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 200, "", result)
}