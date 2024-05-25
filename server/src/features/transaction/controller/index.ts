import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { format } from "date-fns";
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
    txnGroupedByDate,
    getMonthlyTxnTotalAmount,
} from "../service/index.js";
import {
    CreateTransactionPayload,
    UpdateTransactionPayload,
} from "../types.js";

export async function listTransactionController(req: Request, res: Response) {
    const transactions = await listTransaction();

    if (!transactions) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", transactions);
}

export async function getTransactionController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const transaction = await getTransaction(id);

    if (!transaction)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", transaction);
}

export async function createTransactionController(
    req: Request<ParamsDictionary, Response, CreateTransactionPayload>,
    res: Response,
) {
    const { body } = req;
    const { error } = await createTransaction(body);

    if (error) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 201);
}

export async function updateTransactionController(
    req: Request<{ id: string }, Response, UpdateTransactionPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const updateResult = await updateTransaction(id, body);

    if (updateResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}

export async function deleteTransactionController(req: Request, res: Response) {
    const { id } = req.params;
    const deleteResult = await deleteTransaction(id);

    if (deleteResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}

export async function txnChartController(req: Request<{}, {}, {}, {requestFor: string}>, res: Response) {
    const requestFor = req.query.requestFor
    const parsedRequestFor: Array<any> = JSON.parse(requestFor)

    let data = {}
    let promises: Array<any> = []
    parsedRequestFor.forEach((requestFor) => {
        switch (requestFor.chart) {
            case "monthlySummary":
                const month = requestFor.data
                promises.push(getMonthlyTxnTotalAmount(month!))
            case "weeklySplit":
                promises.push(txnGroupedByDate())
            case "categorySplit":
                promises.push(getTxnGroupedByCategory())
        }
    })

    const responses = await Promise.all(promises)
    responses.forEach((response) => {
        data = { [response.chart]: response.data, ...data}
    })

    return createSuccessResponse(req, res, 200, "", data)
}
