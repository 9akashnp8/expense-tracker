import { Request, Response } from "express";
import {
    createFailureResponse,
    createSuccessResponse,
} from "../../common/utils/response.js";
import {
    createCategory,
    deleteCategory,
    getCategory,
    listCategory,
    updateCategory,
} from "../service/index.js";
import { CreateCategoryPayload, UpdateCategoryPayload } from "../types.js";
import { ParamsDictionary } from "express-serve-static-core";

export async function listCategoryController(req: Request, res: Response) {
    const { data, error } = await listCategory();

    if (error) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", data);
}

export async function getCategoryController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const { data, error } = await getCategory(id);

    if (error) return createFailureResponse(req, res, 500);
    else if (!data?.length)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", data);
}

export async function createCategoryController(
    req: Request<ParamsDictionary, Response, CreateCategoryPayload>,
    res: Response,
) {
    const { body } = req;
    const { error } = await createCategory(body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 201, "", body);
}

export async function updateCategoryController(
    req: Request<{ id: string }, Response, UpdateCategoryPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const { error } = await updateCategory(id, body);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}

export async function deleteCategoryController(req: Request, res: Response) {
    const { id } = req.params;
    const { error } = await deleteCategory(id);

    if (error) return createFailureResponse(req, res, 500, "", error);
    return createSuccessResponse(req, res, 204);
}
