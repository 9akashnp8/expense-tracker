import { supabase } from '../../common/supabase.js'

export async function listRecurringConfigs() {
  const { data, error } = await supabase.from("recurring").select();

  return { data, error}
}

export async function getRecurringConfig(config_id: string | number) {
  const { data, error } = await supabase.from("recurring").select().eq("id", config_id)

  return { data, error }
} 
