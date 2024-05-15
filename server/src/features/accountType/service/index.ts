import { supabase } from "../../common/supabase.js";
import { AppDataSource } from "../../../data-source.js";

import {
    CreateAccountTypePayload,
    UpdateAccountTypePayload,
} from "../types.js";
import { AccountType } from "../../../entity/Account.js";

export async function listAccountType() {
    const accountTypes = await AppDataSource
        .manager
        .find(AccountType)
    return accountTypes
}

export async function getAccountType(id: string) {
    const accountType = await AppDataSource
        .manager
        .findOneBy(AccountType, { id: +id })
    return accountType
}

export async function createAccountType(body: CreateAccountTypePayload) {
    const accountType = await AppDataSource
        .manager
        .insert(AccountType, body)
    return accountType
}

export async function updateAccountType(
    id: string,
    body: UpdateAccountTypePayload,
) {
    const updateResult = await AppDataSource
        .manager
        .update(AccountType, { id: id }, body)
    return updateResult
}

export async function deleteAccountType(id: string) {
    const deleteResult = await AppDataSource
        .manager
        .delete(AccountType, { id: id })
    return deleteResult
}
