export type Category = {
    id: number;
    created_at: string;
    name: string;
    group: number;
    is_budgeted: boolean;
    budget: string;
};

export type CreateCategoryPayload = {
    name: string;
    group: number;
    is_budgeted: boolean;
    budget?: number;
};

export type UpdateCategoryPayload = {
    name?: string;
    group?: number;
    is_budgeted?: boolean;
    budget?: number;
};
