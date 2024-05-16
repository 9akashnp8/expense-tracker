import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { CreateLabelPayload, UpdateLabelPayload } from "../types.js";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createLabel,
    deleteLabel,
    getLabel,
    listLabel,
    updateLabel,
} from "../service/index.js";

export async function listLabelController(req: Request, res: Response) {
    const labels = await listLabel();

    if (!labels) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", labels);
}

export async function getLabelController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const label = await getLabel(id);

    if (!label)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", label);
}

export async function createLabelController(
    req: Request<ParamsDictionary, Response, CreateLabelPayload>,
    res: Response,
) {
    const { body } = req;
    const label = await createLabel(body);

    if (!label) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 201, "", label);
}

export async function updateLabelController(
    req: Request<{ id: string }, Response, UpdateLabelPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const updateResult = await updateLabel(id, body);

    if (updateResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}

export async function deleteLabelController(req: Request, res: Response) {
    const { id } = req.params;
    const deleteResult = await deleteLabel(id);

    if (deleteResult.affected == 0) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 204);
}
