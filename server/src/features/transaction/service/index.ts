import { supabase } from "../../common/supabase.js";
import { getAccount, updateAccount } from "../../account/service/index.js";

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
    if (error) return { error };

    const { data: account, error: accError } = await getAccount(body.account);
    if (accError) return { error: accError };

    const operation = body.is_expense ? 1 : -1;
    const remainingAccountBalance =
        account![0].latest_balance! - body.amount * operation;
    const { error: accUpdateError } = await updateAccount(body.account, {
        latest_balance: remainingAccountBalance,
    });
    return { error: accUpdateError };
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
