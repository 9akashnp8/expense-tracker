import { supabase } from '../../common/supabase.js'
import type { CreateRecurringConfigPayload } from '../types.js';

export async function listRecurringConfigs() {
  const { data, error } = await supabase.from("recurring").select();

  return { data, error}
}

export async function getRecurringConfig(config_id: string | number) {
  const { data, error } = await supabase.from("recurring").select().eq("id", config_id)

  return { data, error }
}

export async function createRecurringConfig(payload: CreateRecurringConfigPayload) {
  const { error } = await supabase.from("recurring").insert(payload);

  return { error}
}

export async function getRecurringStats() {
  const { data, error } = await supabase.rpc("get_recurring_stats")

  return { data, error }
}
