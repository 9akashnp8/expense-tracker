import { Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";

export async function getAccountType(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('account_type')
        .select()

    res.json(data)
    
}