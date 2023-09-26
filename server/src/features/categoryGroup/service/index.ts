import { supabase } from "../../common/supabase.js";

import {
    CreateCategoryGroupPayload,
    UpdateCategoryGroupPayload,
} from "../types.js";

export async function listCategoryGroup() {
    const { data, error } = await supabase.from("category_group").select();

    return { data, error };
}

export async function getCategoryGroup(id: string) {
    const { data, error } = await supabase
        .from("category_group")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createCategoryGroup(body: CreateCategoryGroupPayload) {
    const { error } = await supabase.from("category_group").insert(body);

    return { error };
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
