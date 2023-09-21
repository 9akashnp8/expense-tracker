import { Request, Response } from "express";
import { supabase } from "../../common/supabase.js";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";

export async function listTransaction(req: Request, res: Response) {
    const { data, error } = await supabase.from("transaction").select();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getTransaction(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await supabase
        .from("transaction")
        .select()
        .eq("id", id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createTransaction(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { body } = req;
    const { error } = await supabase.from("transaction").insert(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateTransaction(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await supabase
        .from("transaction")
        .update(body)
        .eq("id", id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteTransaction(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await supabase.from("transaction").delete().eq("id", id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
