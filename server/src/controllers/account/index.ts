import { Request, Response} from 'express';
import { supabase } from '../../lib/supabase.js';


export async function getAccounts(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('account')
        .select()

    res.json(data)
}