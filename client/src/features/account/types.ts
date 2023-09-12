import { IResponse } from "../core/types"

export type Account = {
    created_at: string,
    default_currency: string,
    id: number,
    latest_balance: number,
    name: string,
    opening_date: string,
    starting_balance: string,
    type: number
}

export interface IAccountResponse extends IResponse {
    data: Account[]
}