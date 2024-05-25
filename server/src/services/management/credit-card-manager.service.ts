import { AppDataSource } from "../../data-source.js";
import { CreditCardManager } from "../../entity/CreditCardManager.js";
import {
  CreateCreditCardSetting,
  UpdateCreditCardSetting,
} from "../../types/management/credit-card-manager.types.js";

export async function listCreditCardSettings() {
  const cardSettings = await AppDataSource
    .manager
    .createQueryBuilder(CreditCardManager, "credit_card_manager")
    .select([
      "cc_setting.id as id",
      "cc_setting.created_date as created_date",
      "cc_setting.card as card",
      "cc_setting.desired_utilization_ratio as desired_utilization_ratio",
      "cc_setting.credit_limit as credit_limit",
      "cc_setting.reminder_date as reminder_date",
    ])
    .addSelect(
      "ROUND((SUM(txn.amount)/cc_setting.credit_limit) * 100, 2)",
      "current_utilization_ratio"
    )
    .addSelect(
      `json_build_object(
        'id', acc.id,
        'name', acc.name
      )`,
      "card"
    )
    .from("credit_card_manager", "cc_setting")
    .innerJoin("cc_setting.card", "acc")
    .innerJoin("transaction", "txn", "acc.id = txn.account")
    .groupBy("cc_setting.id, acc.id")
    .getRawMany()

  return cardSettings
}

export async function getCreditCardSetting(id: string) {
  const cardSetting = await AppDataSource
    .manager
    .createQueryBuilder(CreditCardManager, "credit_card_manager")
    .setFindOptions({ where: { id: +id }})
    .select([
      "cc_setting.id as id",
      "cc_setting.created_date as created_date",
      "cc_setting.card as card",
      "cc_setting.desired_utilization_ratio as desired_utilization_ratio",
      "cc_setting.credit_limit as credit_limit",
      "cc_setting.reminder_date as reminder_date",
    ])
    .addSelect(
      "ROUND((SUM(txn.amount)/cc_setting.credit_limit) * 100, 2)",
      "current_utilization_ratio"
    )
    .addSelect(
      `json_build_object(
        'id', acc.id,
        'name', acc.name
      )`,
      "card"
    )
    .from("credit_card_manager", "cc_setting")
    .innerJoin("cc_setting.card", "acc")
    .innerJoin("transaction", "txn", "acc.id = txn.account")
    .groupBy("cc_setting.id, acc.id")
    .getRawOne()

  return cardSetting
}

export async function createCreditCardSetting(body: CreateCreditCardSetting) {
  const insertResult = await AppDataSource
    .manager
    .insert(CreditCardManager, body)

  const createdId = insertResult.identifiers[0]?.id
  const cardSetting = await getCreditCardSetting(createdId)
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
