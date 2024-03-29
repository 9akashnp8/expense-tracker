import { supabase } from "../../common/supabase.js";
import { getAccount, updateAccount } from "../../account/service/index.js";
import { calcRemainingBalance } from "../utils/functions.js";
import {
    CreateTransactionPayload,
    UpdateTransactionPayload,
} from "../types.js";
import { logger as rootLogger } from "../../common/utils/logger.js";

const logger = rootLogger.child({ feature: "transaction" });

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
    const { data: account, error: accError } = await getAccount(body.account);
    if (accError) {
        logger.error({
            error: accError,
            message: "Something went wrong when querying account",
        });
        return { error: accError };
    }

    const originalBalance = account![0].latest_balance!;
    const remainingAccBalance = calcRemainingBalance(
        originalBalance,
        body.amount,
        body.is_expense,
    );

    const { error } = await supabase.from("transaction").insert(body);
    if (error) {
        logger.error({
            error,
            message: "Something went wrong when inserting transaction record",
        });
        return { error };
    }

    const { error: accUpdateError } = await updateAccount(body.account, {
        latest_balance: remainingAccBalance,
    });
    if (accUpdateError) {
        logger.error({
            error: accUpdateError,
            message: "Something went wrong when updating account balance",
        });
    }
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
