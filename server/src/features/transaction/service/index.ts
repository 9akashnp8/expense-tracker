import { supabase } from "../../common/supabase.js";

import {
    CreateTransactionPayload,
    UpdateTransactionPayload,
} from "../types.js";

export async function listTransaction() {
    const { data, error } = await supabase.from("transaction").select();

    return { data, error };
}

export async function getTransaction(id: string) {
    const { data, error } = await supabase
        .from("transaction")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createTransaction(body: CreateTransactionPayload) {
    const { error } = await supabase.from("transaction").insert(body);

    return { error };
}

export async function updateTransaction(
    id: string,
    body: UpdateTransactionPayload,
) {
    const { error } = await supabase
        .from("transaction")
        .update(body)
        .eq("id", id);

    return { error };
}

export async function deleteTransaction(id: string) {
    const { error } = await supabase.from("transaction").delete().eq("id", id);

    return { error };
}
