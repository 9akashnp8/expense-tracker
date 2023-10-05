import { supabase } from "../../common/supabase.js";

import { AccountCreatePayload, AccountUpdatePayload } from "../types.js";

export async function listAccounts() {
    const { data, error } = await supabase.from("account").select();

    return { data, error };
}

export async function getAccount(id: string | number) {
    const { data, error } = await supabase
        .from("account")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createAccount(body: AccountCreatePayload) {
    // TODO: Change this
    const { error } = await supabase.from("account").insert(body);

    return { error };
}

export async function updateAccount(
    id: string | number,
    body: AccountUpdatePayload,
) {
    const { error } = await supabase.from("account").update(body).eq("id", id);

    return { error };
}

export async function deleteAccount(id: number) {
    const { error } = await supabase.from("account").delete().eq("id", id);

    return { error };
}
