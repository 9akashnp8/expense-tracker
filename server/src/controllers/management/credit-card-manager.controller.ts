import { ParamsDictionary } from "express-serve-static-core";
import { createFailureResponse, createSuccessResponse } from "../../features/common/utils/response.js";
import {
  listCreditCardSettings,
  getCreditCardSetting,
  createCreditCardSetting,
  updateCreditCardSetting,
  deleteCreditCardSetting,
} from "../../services/management/credit-card-manager.service.js";

import { Request, Response } from "express";
import { CreateCreditCardSetting, UpdateCreditCardSetting } from "../../types/management/credit-card-manager.types.js";

export async function listCreditCardSettingsController(req: Request, res: Response) {
  const cardSettings = await listCreditCardSettings()

  if (!cardSettings) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 200, "", cardSettings)
}

export async function getCreditCardSettingsController(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params
  const cardSetting = await getCreditCardSetting(id)
  if (!cardSetting) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 200, "", cardSetting)
}

export async function createCreditCardSettingController(
  req: Request<ParamsDictionary, Response, CreateCreditCardSetting>,
  res: Response
) {
  const { body } = req
  const cardSetting = await createCreditCardSetting(body)
  if (!cardSetting) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 201, "", cardSetting)
}

export async function updateCreditCardSettingController(
  req: Request<{ id: string }, Response, UpdateCreditCardSetting>,
  res: Response
) {
  const { id } = req.params
  const { body } = req
  const updateResult = await updateCreditCardSetting(id, body)
  if (updateResult.affected == 0) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 204)
}

export async function deleteCreditCardSettingController(
  req: Request<{ id: string }>,
  res: Response
) {
  const { id } = req.params
  const deleteResult = await deleteCreditCardSetting(id)
  if (deleteResult.affected == 0) return createFailureResponse(req, res, 500)
  return createSuccessResponse(req, res, 204)
}
