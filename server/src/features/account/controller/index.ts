import { Request, Response} from 'express';
import { createSuccessResponse, createFailureResponse } from '../../common/utils/response.js';
import {
    listAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount
} from '../service/index.js';
import { Account } from '../types.js';


export async function listAccountsController(req: Request, res: Response) {
    const { data, error } = await listAccounts();

    if (error) return createFailureResponse(req, res, 500)
    return createSuccessResponse(req, res, 200, "", data)
}

export async function getAccountController(req: Request, res: Response) {
    const { id } = req.params // TODO: ensure id is number
    const { data, error } = await getAccount(id)

    if (error) return createFailureResponse(req, res, 500)
    else if (!data?.length) return createFailureResponse(req, res, 404, "not-found")
    return createSuccessResponse(req, res, 200, "", data)
}

export async function createAccountController(req: Request, res: Response) {
    const body: Account = req.body
    const { error } = await createAccount(body)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 201, "", body)
}

export async function updateAccountController(req: Request, res: Response) {
    const { id } = req.params
    const body = req.body
    const { error } = await updateAccount(id, body)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 204)
}

export async function deleteAccountController(req: Request, res: Response) {
    const { id } = req.params
    const { error } = await deleteAccount(id)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 204)
}