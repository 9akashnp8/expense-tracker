import { Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";

export async function getTransaction(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('transaction')
        .select()

    res.json(data)
    
}