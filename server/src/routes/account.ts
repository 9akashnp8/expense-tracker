import express, { Request, Response} from 'express';
import { supabase } from '../lib/supabase.js';

export const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const { data, error } = await supabase
        .from('account')
        .select()

    res.json(data)
})