import { supabase } from '../../common/supabase.js'
import type { CreateRecurringConfigPayload } from '../types.js';
import { RecurringTransactionConfig } from '../../../entity/RecurringTransactionConfig.js';
import { AppDataSource } from '../../../data-source.js';

export async function listRecurringConfigs() {
  const recurringConfigs = await AppDataSource
    .manager
    .find(RecurringTransactionConfig)
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
    .create(RecurringTransactionConfig, payload)

  return recurringConfig
}

export async function getRecurringStats() {
  const { data, error } = await supabase.rpc("get_recurring_stats")
  return { data, error }
}
