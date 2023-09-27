export type Transaction = {
    id: number;
    created_at: string;
    item: string;
    amount: number;
    txn_date_time: string;
    category: number;
    account: number;
    label: number;
    notes: string;
    is_expense: boolean;
};

export type CreateTransactionPayload = {
    item: string;
    amount: number;
    txn_date_time: string;
    category: number;
    account: number;
    label?: number;
    notes?: string;
    is_expense: boolean;
};

export type UpdateTransactionPayload = {
    item?: string;
    amount?: number;
    txn_date_time?: string;
    category?: number;
    account?: number;
    label?: number;
    notes?: string;
    is_expense: boolean;
};
