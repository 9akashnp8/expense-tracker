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
    const accountTypes = await listAccountType();

    if (!accountTypes) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", accountTypes);
}

export async function getAccountTypeController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const accountType = await getAccountType(id);

    if (!accountType)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", accountType);
}

export async function createAccountTypeController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { body } = req;
    const accountType = await createAccountType(body);

    if (!accountType) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 201, "", accountType);
}

export async function updateAccountTypeController(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const updateResult = await updateAccountType(id, body);

    if (updateResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}

export async function deleteAccountTypeController(req: Request, res: Response) {
    const { id } = req.params;
    const deleteResult = await deleteAccountType(id);

    if (deleteResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}
