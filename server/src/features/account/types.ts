export type Account = {
    default_currency: string,
    latest_balance: number,
    name: string,
    opening_date: string,
    starting_balance: number,
    type: number
}

export type AccountUpdatePayload = {
    default_currency?: string,
    latest_balance?: number,
    name?: string,
    opening_date?: string,
    starting_balance?: number,
    type?: number
}