import { AccountCreateSchema, AccountUpdateSchema } from "./schemas.js";
import { z } from "zod";

export type Account = {
    default_currency: string;
    latest_balance: number;
    name: string;
    opening_date: string;
    starting_balance: number;
    type: number;
};

export type AccountCreatePayload = z.infer<typeof AccountCreateSchema>;

export type AccountUpdatePayload = z.infer<typeof AccountUpdateSchema>;
