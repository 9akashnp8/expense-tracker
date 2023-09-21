import { Request, Response } from "express";
import { supabase } from "../../common/supabase.js";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";

export async function listLabel(req: Request, res: Response) {
    const { data, error } = await supabase.from("label").select();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getLabel(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const { data, error } = await supabase.from("label").select().eq("id", id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createLabel(req: Request<{ id: string }>, res: Response) {
    const { body } = req;
    const { error } = await supabase.from("label").insert(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateLabel(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await supabase.from("label").update(body).eq("id", id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteLabel(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await supabase.from("label").delete().eq("id", id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
