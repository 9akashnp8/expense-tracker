import { AppDataSource } from "../../../data-source.js";
import { CategoryGroup } from "../../../entity/Category.js";
import { supabase } from "../../common/supabase.js";

import {
    CreateCategoryGroupPayload,
    UpdateCategoryGroupPayload,
} from "../types.js";

const categoryGroupRepository = AppDataSource.getRepository(CategoryGroup)

export async function listCategoryGroup() {
    const categoryGroups = await categoryGroupRepository.find()

    return categoryGroups;
}

export async function getCategoryGroup(id: string) {
    const { data, error } = await supabase
        .from("category_group")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createCategoryGroup(body: CreateCategoryGroupPayload) {
    const categoryGroup = new CategoryGroup()
    categoryGroup.name = body.name
    categoryGroup.is_expense = body.is_expense || null
    categoryGroup.is_budgeted = body.is_budgeted || null
    categoryGroup.budget_type = body.budget_type || null
    categoryGroup.budget = body.budget || null

    let record = undefined

    try {
        record = await categoryGroupRepository.save(categoryGroup)
    } catch(err: any) {
        console.error(`Something went wrong during creating category group: ${err}`)
    }

    return record
}

export async function updateCategoryGroup(
    id: string,
    body: UpdateCategoryGroupPayload,
) {
    const { error } = await supabase
        .from("category_group")
        .update(body)
        .eq("id", id);

    return { error };
}

export async function deleteCategoryGroup(id: string) {
    const { error } = await supabase
        .from("category_group")
        .delete()
        .eq("id", id);

    return { error };
}
