import { AppDataSource } from "../../../data-source.js";

import { CreateCategoryPayload, UpdateCategoryPayload } from "../types.js";
import { Category } from "../../../entity/Category.js";

export async function listCategory() {
    const categories = await AppDataSource
        .manager
        .find(Category, { relations: ['group'] })
    return categories;
}

export async function getCategory(id: string) {
    const category = await AppDataSource
        .manager
        .findOneBy(Category, { id: +id })
    return category
}

export async function createCategory(body: CreateCategoryPayload) {
    const category = await AppDataSource
        .manager
        .insert(Category,  body)
    return category
}

export async function updateCategory(id: string, body: UpdateCategoryPayload) {
    const updateResult = await AppDataSource
        .manager
        .update(Category, {id: +id}, body)
    return updateResult
}

export async function deleteCategory(id: string) {
    const deleteResult = await AppDataSource
        .manager
        .delete(Category, { id: +id})
    return deleteResult
}
