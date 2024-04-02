import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createTransaction,
    deleteTransaction,
    getTransaction,
    listTransaction,
    updateTransaction,
    getTxnGroupedByCategory,
} from "../service/index.js";
import {
    CreateTransactionPayload,
    UpdateTransactionPayload,
} from "../types.js";

export async function listTransactionController(req: Request, res: Response) {
    const { data, error } = await listTransaction();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getTransactionController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await getTransaction(id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createTransactionController(
    req: Request<ParamsDictionary, Response, CreateTransactionPayload>,
    res: Response,
) {
    const { body } = req;
    const { error } = await createTransaction(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateTransactionController(
    req: Request<{ id: string }, Response, UpdateTransactionPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await updateTransaction(id, body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteTransactionController(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await deleteTransaction(id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function txnGroupedByCategoryController(req: Request, res: Response) {
    const { data } = await getTxnGroupedByCategory();
    return createSuccessResponse(req, res, 200, "", data)
}
