import { supabase } from '../../common/supabase.js'
import type { CreateRecurringConfigPayload } from '../types.js';
import { RecurringTransactionConfig } from '../../../entity/RecurringTransactionConfig.js';
import { AppDataSource } from '../../../data-source.js';

export async function listRecurringConfigs() {
  const recurringConfigs = await AppDataSource
    .manager
    .find(
      RecurringTransactionConfig,
      { relations: ['from_account', 'to_account', 'category'], order: { 'amount': 'DESC' } }
    )
  return recurringConfigs
}

export async function getRecurringConfig(config_id: string | number) {
  const recurringConfig = await AppDataSource
    .manager
    .findOneBy(RecurringTransactionConfig, { id: +config_id})
  return recurringConfig
}

export async function createRecurringConfig(payload: CreateRecurringConfigPayload) {
  const recurringConfig = await AppDataSource
    .manager
    .insert(RecurringTransactionConfig, payload)

  return recurringConfig
}

export async function getRecurringStats() {
  const stats = AppDataSource
    .manager
    .createQueryBuilder(RecurringTransactionConfig, "recurring_config")
    .select("recurring_config.transaction_type", "transaction_type")
    .addSelect(`SUM(
      CASE
        WHEN recurring_config.cycle = 'yearly' THEN ROUND((recurring_config.amount / 12), 2)
        ELSE recurring_config.amount
      END)`, "total_amount")
    .groupBy("recurring_config.transaction_type")
    .getRawMany();
  return stats
}
