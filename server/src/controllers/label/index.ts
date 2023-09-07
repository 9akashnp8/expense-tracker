import { Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";

export async function getLabel(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('label')
        .select()

    res.json(data)
    
}