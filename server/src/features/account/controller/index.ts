import { Request, Response} from 'express';
import { supabase } from '../../common/supabase.js';
import { createSuccessResponse, createFailureResponse } from '../../common/utils/response.js';


export async function listAccounts(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('account')
        .select()

    if (error) return createFailureResponse(req, res, 500)
    return createSuccessResponse(req, res, 200, "", data)
}

export async function getAccount(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const { data, error } = await supabase
        .from('account')
        .select()
        .eq('id', id)

    if (error) return createFailureResponse(req, res, 500)
    else if (!data?.length) return createFailureResponse(req, res, 404, "not-found")
    return createSuccessResponse(req, res, 200, "", data)
}

export async function createAccount(req: Request<{ id: string}>, res: Response) {
    const body = req.body
    const { error } = await supabase
        .from('account')
        .insert(body)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 201, "", body)
}

export async function updateAccount(req: Request, res: Response) {
    const { id } = req.params
    const body = req.body
    const { error } = await supabase
        .from('account')
        .update(body)
        .eq('id', id)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 204)
}

export async function deleteAccount(req: Request, res: Response) {
    const { id } = req.params
    const { error } = await supabase
        .from('account')
        .delete()
        .eq('id', id)

    if (error) return createFailureResponse(req, res, 500, "", error)
    return createSuccessResponse(req, res, 204)
}