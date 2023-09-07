import { Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";

export async function getCategoryGroup(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('category_group')
        .select()

    res.json(data)
    
}