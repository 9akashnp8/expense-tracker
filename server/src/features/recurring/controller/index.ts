import type { Request, Response } from 'express';

import {
  createSuccessResponse,
  createFailureResponse,
} from '../../common/utils/response.js'
import {
  listRecurringConfigs,
  getRecurringConfig,
} from '../services/index.js'


export async function listRecurringConfigsController(req: Request, res: Response) {
  const { data, error } = await listRecurringConfigs()

  if (error) {
    return createFailureResponse(req, res, 500, "", {})
  }

  return createSuccessResponse(req, res, 200, "", data)
}
