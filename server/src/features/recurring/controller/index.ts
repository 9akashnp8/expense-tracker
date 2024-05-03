import type { Request, Response } from 'express';
import { ParamsDictionary } from "express-serve-static-core";

import {
  createSuccessResponse,
  createFailureResponse,
} from '../../common/utils/response.js'
import {
  listRecurringConfigs,
  createRecurringConfig,
} from '../services/index.js'
import type { CreateRecurringConfigPayload } from '../types.js';


export async function listRecurringConfigsController(req: Request, res: Response) {
  const { data, error } = await listRecurringConfigs()

  if (error) {
    return createFailureResponse(req, res, 500, "", {})
  }

  return createSuccessResponse(req, res, 200, "", data)
}

export async function createRecurringConfigController(
  req: Request<ParamsDictionary, Response, CreateRecurringConfigPayload>,
  res: Response
) {
  const { body } = req

  const { error } = await createRecurringConfig(body)

  if (error) return createFailureResponse(req, res, 500, "", {})
  return createSuccessResponse(req, res, 200, "Recurring Config Created", {})
}
