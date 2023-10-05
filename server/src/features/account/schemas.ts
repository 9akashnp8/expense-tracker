import { z } from "zod";

export const AccountCreateSchema = z.object({
    name: z.string(),
    type: z.number(),
    opening_date: z.string(),
    starting_balance: z.number().optional(),
    latest_balance: z.number(),
    default_currency: z.string(),
});

export const AccountUpdateSchema = z.object({
    name: z.string().optional(),
    type: z.number().optional(),
    opening_date: z.string().optional(),
    starting_balance6: z.number().optional(),
    latest_balance: z.number().optional(),
    default_currency: z.string().optional(),
});
