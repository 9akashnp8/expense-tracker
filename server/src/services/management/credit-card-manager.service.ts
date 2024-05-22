import { AppDataSource } from "../../data-source.js";
import { CreditCardManager } from "../../entity/CreditCardManager.js";
import {
  CreateCreditCardSetting,
  UpdateCreditCardSetting,
} from "../../types/management/credit-card-manager.types.js";

export async function listCreditCardSettings() {
  const cardSettings = await AppDataSource
    .manager
    .find(CreditCardManager)
  return cardSettings
}

export async function getCreditCardSetting(id: string) {
  const cardSetting = await AppDataSource
    .manager
    .findOneBy(CreditCardManager, { id: +id })
  return cardSetting
}

export async function createCreditCardSetting(body: CreateCreditCardSetting) {
  const cardSetting = await AppDataSource
    .manager
    .insert(CreditCardManager, body)
  return cardSetting
}

export async function updateCreditCardSetting(id: string, body: UpdateCreditCardSetting) {
  const updateResult = await AppDataSource
    .manager
    .update(CreditCardManager, { id: +id }, body)
  return updateResult
}

export async function deleteCreditCardSetting(id: string) {
  const deleteResult = await AppDataSource
    .manager
    .delete(CreditCardManager, { id: +id })
  return deleteResult
}
