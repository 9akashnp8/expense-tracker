import { supabase } from "../../common/supabase.js";

import {
    CreateAccountTypePayload,
    UpdateAccountTypePayload,
} from "../types.js";

export async function listAccountType() {
    const { data, error } = await supabase.from("account_type").select();

    return { data, error };
}

export async function getAccountType(id: string) {
    const { data, error } = await supabase
        .from("account_type")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createAccountType(body: CreateAccountTypePayload) {
    const { error } = await supabase.from("account_type").insert(body);

    return { error };
}

export async function updateAccountType(
    id: string,
    body: UpdateAccountTypePayload,
) {
    const { error } = await supabase
        .from("account_type")
        .update(body)
        .eq("id", id);

    return { error };
}

export async function deleteAccountType(id: string) {
    const { error } = await supabase.from("account_type").delete().eq("id", id);

    return { error };
}
