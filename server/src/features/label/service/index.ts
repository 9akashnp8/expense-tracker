import { supabase } from "../../common/supabase.js";
import { AppDataSource } from "../../../data-source.js";
import { Label } from "../../../entity/Label.js";
import { CreateLabelPayload, UpdateLabelPayload } from "../types.js";

export async function listLabel() {
    const labels = await AppDataSource
        .manager
        .find(Label)
    return labels
}

export async function getLabel(id: string) {
    const label = await AppDataSource
        .manager
        .findOneBy(Label, { id: +id })
    return label
}

export async function createLabel(body: CreateLabelPayload) {
    const label = await AppDataSource
        .manager
        .insert(Label, body)
    return label
}

export async function updateLabel(id: string, body: UpdateLabelPayload) {
    const updateResult = await AppDataSource
        .manager
        .update(Label, { id: +id }, body)
    return updateResult
}

export async function deleteLabel(id: string) {
    const deleteResult = await AppDataSource
        .manager
        .delete(Label, { id: +id })
    return deleteResult
}
