import { supabase } from "../../common/supabase.js";
import { getAccount, updateAccount } from "../../account/service/index.js";
import { calcRemainingBalance } from "../utils/functions.js";
import {
    CreateTransactionPayload,
    UpdateTransactionPayload,
} from "../types.js";
import { logger as rootLogger } from "../../common/utils/logger.js";
import { AppDataSource } from "../../../data-source.js";
import { Transaction } from "../../../entity/Transaction.js";

import { format } from "date-fns";

const logger = rootLogger.child({ feature: "transaction" });

export async function listTransaction() {
    const transactions = await AppDataSource
        .manager
        .find(
            Transaction,
            // { relations: [ "account", "category", "label" ]}
        )
    return transactions
}

export async function getTransaction(id: string) {
    const transaction = await AppDataSource
        .manager
        .findOne(
            Transaction,
            { where: { id: +id }, relations: [ "account", "category", "label" ]}
        )
    return transaction
}

export async function createTransaction(body: CreateTransactionPayload) {
    // Get initial account balance
    const account = await getAccount(body.account);
    if (!account) {
        logger.error({
            message: "Something went wrong when querying account",
        });
        return { error: "account-not-found" };
    }

    // Calculate remaining balance
    const originalBalance = account.latest_balance!;
    const remainingAccBalance = calcRemainingBalance(
        originalBalance,
        body.amount,
        body.is_expense,
    );

    // Single Transaction to Create Transaction record and update
    // respective Account records balance.
    try {
        await AppDataSource.manager.transaction(async (entityManager) => {
            await entityManager.insert(Transaction, body)
            await updateAccount(body.account, {
                latest_balance: remainingAccBalance,
            });
        })
    } catch (error) {
        logger.error({
            message: `Something went wrong when creating txn: ${error}`
        })
        return { error: error }
    }
    return {}
}

export async function updateTransaction(
    id: string,
    body: UpdateTransactionPayload,
) {
    const updateResult = await AppDataSource
        .manager
        .update(Transaction, { id: +id }, body)
    return updateResult
}

export async function deleteTransaction(id: string) {
    const deleteResult = await AppDataSource
        .manager
        .delete(Transaction, { id: +id })
    return deleteResult
}

export async function getTxnGroupedByCategory() {
    const { data, error } = await supabase.rpc('get_category_transaction_count')


    if (error) {
        logger.error({
            error,
            message: "Something went wrong when updating account balance",
        });
    }

    return { chart: "categorySplit", data, error }
}

export async function txnGroupedByDate() {
    const { data, error } = await supabase.rpc('get_day_wise_count')


    if (error) {
        logger.error({
            error,
            message: "Something went wrong when updating account balance",
        });
    }

    const result = []
    const weekBeforeDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    for (let i = 0; i <= 7; i++) {
        let date = new Date(weekBeforeDate.setDate(weekBeforeDate.getDate() + 1))
        const x = data?.filter((item: any) => {
            const d = new Date(item.txn_date_time)
            return (
                d.getFullYear() === date.getFullYear() &&
                d.getMonth() === date.getMonth() &&
                d.getDate() === date.getDate()
            )
        }) 
        result.push({
            "txn_date_time": format(date, "do 'of' MMMM"),
            "count": x && (x[0]?.count || 0)
        })
    }

    return { chart: "weeklySplit", data: result, error }
}

export async function getMonthlyTxnTotalAmount(month_param: number) {
    const { data, error } = await supabase.rpc('get_total_amount_by_month', {month_param: month_param})


    if (error) {
        logger.error({
            error,
            message: "Something went wrong when updating account balance",
        });
    }

    return { chart: "monthlySummary", data, error }
}