import { supabase } from "../../common/supabase.js";

import { CreateCategoryPayload, UpdateCategoryPayload } from "../types.js";

export async function listCategory() {
    const { data, error } = await supabase.from("category").select();

    return { data, error };
}

export async function getCategory(id: string) {
    const { data, error } = await supabase
        .from("category")
        .select()
        .eq("id", id);

    return { data, error };
}

export async function createCategory(body: CreateCategoryPayload) {
    const { error } = await supabase.from("category").insert(body);

    return { error };
}

export async function updateCategory(id: string, body: UpdateCategoryPayload) {
    const { error } = await supabase.from("category").update(body).eq("id", id);

    return { error };
}

export async function deleteCategory(id: string) {
    const { error } = await supabase.from("category").delete().eq("id", id);

    return { error };
}
