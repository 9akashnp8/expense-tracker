import { Request, Response } from "express";
import {
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createAccount,
    updateAccount,
} from "../service/index.js";
import { logger as rootLogger } from "../../common/utils/logger.js";

const logger = rootLogger.child({ feature: "account" });

export async function listAccountsController(req: Request, res: Response) {
    const { data, error } = await listAccounts();

    if (error) {
        logger.error({
            message: "error when querying accounts",
            error: error,
        });
        return createFailureResponse(req, res, 500);
    }
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getAccountController(req: Request, res: Response) {
    const { id } = req.params; // TODO: ensure id is number
    const { data, error } = await getAccount(id);

    if (error) {
        logger.error({
            message: `error when querying account with id: ${id}`,
            error: error,
        });
        return createFailureResponse(req, res, 500);
    } else if (!data?.length) {
        logger.error({ message: `account with id: ${id} not found` });
        return createFailureResponse(req, res, 404, "not-found");
    }
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createAccountController(req: Request, res: Response) {
    const body: Account = req.body;
    const { error } = await createAccount(body);

    if (error) {
        logger.error({
            message: "error when creating account",
            requestPayload: body,
            error: error,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateAccountController(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    const { error } = await updateAccount(id, body);

    if (error) {
        logger.error({
            message: `error when updating account: ${id}`,
            requestPayload: body,
            error: error,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 204);
}

export async function deleteAccountController(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await deleteAccount(id);

    if (error) {
        logger.error({
            message: `error when deleting account: ${id}`,
            error: error,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 204);
}
