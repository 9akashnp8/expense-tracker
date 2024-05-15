import { supabase } from "../../common/supabase.js";
import { AppDataSource } from "../../../data-source.js";

import { AccountCreatePayload, AccountUpdatePayload } from "../types.js";
import { Account } from "../../../entity/Account.js";

export async function listAccounts() {
    const accounts = await AppDataSource
        .manager
        .find(Account)
    return accounts
}

export async function getAccount(id: string | number) {
    const account = await AppDataSource
        .manager
        .findOneBy(Account, { id: +id })
    return account
}

export async function createAccount(body: AccountCreatePayload) {
    const account = await AppDataSource
        .manager
        .insert(Account, body)
    return account
}

export async function updateAccount(
    id: string | number,
    body: AccountUpdatePayload,
) {
    const updateResult = await AppDataSource
        .manager
        .update(Account, { id: +id }, body)
    return updateResult;
}

export async function deleteAccount(id: number) {
    const deleteResult = await AppDataSource
        .manager
        .delete(Account, { id: +id })
    return deleteResult
}
