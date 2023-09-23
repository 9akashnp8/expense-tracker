import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createAccountType,
    deleteAccountType,
    getAccountType,
    listAccountType,
    updateAccountType,
} from "../service/index.js";
import { Request, Response } from "express";

export async function listAccountTypeController(req: Request, res: Response) {
    const { data, error } = await listAccountType();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getAccountTypeController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await getAccountType(id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createAccountTypeController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { body } = req;
    const { error } = await createAccountType(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateAccountTypeController(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await updateAccountType(id, body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteAccountTypeController(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await deleteAccountType(id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
