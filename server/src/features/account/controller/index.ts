import { Request, Response } from "express";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createAccount,
    deleteAccount,
    getAccount,
    listAccounts,
    updateAccount,
} from "../service/index.js";
import { logger as rootLogger } from "../../common/utils/logger.js";
import {
    AccountCreateSchema,
    AccountUpdateRequestSchema,
    ParamSchema,
} from "../schemas.js";

const logger = rootLogger.child({ feature: "account" });

export async function listAccountsController(req: Request, res: Response) {
    const account = await listAccounts();

    if (!account) {
        logger.error({
            message: "error when querying accounts",
        });
        return createFailureResponse(req, res, 500);
    }
    return createSuccessResponse(req, res, 200, "", account);
}

export async function getAccountController(req: Request, res: Response) {
    const result = ParamSchema.safeParse(req.params?.id);
    if (!result.success) {
        const error = result.error.issues;
        logger.error({ error, message: "bad-path-param" });
        return createFailureResponse(req, res, 400, "bad-path-param", error);
    }
    const { data: id } = result;

    const account = await getAccount(id);

    if (!account) {
        logger.error({ message: `account with id: ${id} not found` });
        return createFailureResponse(req, res, 404, "not-found");
    }
    return createSuccessResponse(req, res, 200, "", account);
}

export async function createAccountController(req: Request, res: Response) {
    const result = AccountCreateSchema.safeParse(req.body);
    if (!result.success) {
        const error = result.error.issues;
        logger.error({
            error,
            message: "bad-payload",
            requestPayload: req.body,
        });
        return createFailureResponse(req, res, 400, "bad-payload", error);
    }
    const { data: body } = result;

    const account = await createAccount(body);

    if (!account) {
        logger.error({
            message: "error when creating account",
            requestPayload: body,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 201, "", account);
}

export async function updateAccountController(req: Request, res: Response) {
    const result = AccountUpdateRequestSchema.safeParse(req);
    if (!result.success) {
        const error = result.error.issues;
        logger.error({
            error,
            message: "bad-payload",
            requestPayload: req.body,
        });
        return createFailureResponse(req, res, 400, "bad-payload", error);
    }
    const { body } = result.data;
    const { id } = result.data.params;

    const updateResult = await updateAccount(id, body);

    if (updateResult.affected == 0) {
        logger.error({
            message: `error when updating account: ${id}`,
            requestPayload: body,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 204);
}

export async function deleteAccountController(req: Request, res: Response) {
    const result = ParamSchema.safeParse(req.params?.id);
    if (!result.success) {
        const error = result.error.issues;
        logger.error({ error, message: "bad-path-param" });
        return createFailureResponse(req, res, 400, "bad-path-param", error);
    }
    const { data: id } = result;

    const deleteResult = await deleteAccount(id);

    if (deleteResult.affected == 0) {
        logger.error({
            message: `error when deleting account: ${id}`,
        });
        return createFailureResponse(req, res, 500, "");
    }
    return createSuccessResponse(req, res, 204);
}
