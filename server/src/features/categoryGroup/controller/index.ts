import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createCategoryGroup,
    deleteCategoryGroup,
    getCategoryGroup,
    listCategoryGroup,
    updateCategoryGroup,
} from "../service/index.js";
import {
    CreateCategoryGroupPayload,
    UpdateCategoryGroupPayload,
} from "../types.js";

export async function listCategoryGroupController(req: Request, res: Response) {
    const data = await listCategoryGroup();

    if (!data) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getCategoryGroupController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await getCategoryGroup(id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data[0]);
}

export async function createCategoryGroupController(
    req: Request<ParamsDictionary, Response, CreateCategoryGroupPayload>,
    res: Response,
) {
    const { body } = req;
    const data = await createCategoryGroup(body);

    if (!data) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 201, "", data);
}

export async function updateCategoryGroupController(
    req: Request<{ id: string }, Response, UpdateCategoryGroupPayload>,
    res: Response,
) {
    const { id } = req.params; // TODO: ensure id is number
    const { body } = req;
    const { error } = await updateCategoryGroup(id, body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteCategoryGroupController(
    req: Request,
    res: Response,
) {
    const { id } = req.params;
    const { error } = await deleteCategoryGroup(id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
