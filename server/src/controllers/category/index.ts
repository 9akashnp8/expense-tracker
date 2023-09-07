import { Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";

export async function getCategory(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('category')
        .select()

    res.json(data)
    
}