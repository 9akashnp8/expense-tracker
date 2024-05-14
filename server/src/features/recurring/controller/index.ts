import type { Request, Response } from 'express';
import { ParamsDictionary } from "express-serve-static-core";

import {
  createSuccessResponse,
  createFailureResponse,
} from '../../common/utils/response.js'
import {
  listRecurringConfigs,
  createRecurringConfig,
  getRecurringStats,
} from '../services/index.js'
import type { CreateRecurringConfigPayload } from '../types.js';


export async function listRecurringConfigsController(req: Request, res: Response) {
  const recurringConfigs = await listRecurringConfigs()

  if (!recurringConfigs) {
    return createFailureResponse(req, res, 500, "")
  }

  return createSuccessResponse(req, res, 200, "", recurringConfigs)
}

export async function createRecurringConfigController(
  req: Request<ParamsDictionary, Response, CreateRecurringConfigPayload>,
  res: Response
) {
  const { body } = req

  const recurringConfig = await createRecurringConfig(body)

  if (!recurringConfig) return createFailureResponse(req, res, 500, "")
  return createSuccessResponse(req, res, 200, "Recurring Config Created")
}

export async function getRecurringStatsController(req: Request, res: Response) {
  const { data, error } = await getRecurringStats()

  if (error) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 200, "", data)
}
