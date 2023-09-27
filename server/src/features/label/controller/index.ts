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
    const { data, error } = await listLabel();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getLabelController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await getLabel(id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createLabelController(
    req: Request<ParamsDictionary, Response, CreateLabelPayload>,
    res: Response,
) {
    const { body } = req;
    const { error } = await createLabel(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateLabelController(
    req: Request<{ id: string }, Response, UpdateLabelPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await updateLabel(id, body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteLabelController(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await deleteLabel(id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
