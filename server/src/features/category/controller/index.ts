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
    const categories = await listCategory();

    if (!categories) return createFailureResponse(req, res, 500);
    return createSuccessResponse(req, res, 200, "", categories);
}

export async function getCategoryController(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params;
    const category = await getCategory(id);

    if (!category)
        return createFailureResponse(req, res, 404, "not-found");
    return createSuccessResponse(req, res, 200, "", category);
}

export async function createCategoryController(
    req: Request<ParamsDictionary, Response, CreateCategoryPayload>,
    res: Response,
) {
    const { body } = req;
    const category = await createCategory(body);

    if (!category) return createFailureResponse(req, res, 500, "");
    return createSuccessResponse(req, res, 201, "", category);
}

export async function updateCategoryController(
    req: Request<{ id: string }, Response, UpdateCategoryPayload>,
    res: Response,
) {
    const { id } = req.params;
    const { body } = req;
    const updateResult = await updateCategory(id, body);

    if (updateResult.affected == 0) {
        return createFailureResponse(req, res, 500, "no-rows-affected");
    }
    return createSuccessResponse(req, res, 204);
}

export async function deleteCategoryController(req: Request, res: Response) {
    const { id } = req.params;
    const deleteResult = await deleteCategory(id);

    if (deleteResult.affected == 0) {
        return createFailureResponse(req, res, 500, "no-rows-affected");
    }
    return createSuccessResponse(req, res, 204);
}
