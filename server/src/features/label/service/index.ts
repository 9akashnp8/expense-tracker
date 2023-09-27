import { supabase } from "../../common/supabase.js";

import { CreateLabelPayload, UpdateLabelPayload } from "../types.js";

export async function listLabel() {
    const { data, error } = await supabase.from("label").select();

    return { data, error };
}

export async function getLabel(id: string) {
    const { data, error } = await supabase.from("label").select().eq("id", id);

    return { data, error };
}

export async function createLabel(body: CreateLabelPayload) {
    const { error } = await supabase.from("label").insert(body);

    return { error };
}

export async function updateLabel(id: string, body: UpdateLabelPayload) {
    const { error } = await supabase.from("label").update(body).eq("id", id);

    return { error };
}

export async function deleteLabel(id: string) {
    const { error } = await supabase.from("label").delete().eq("id", id);

    return { error };
}
