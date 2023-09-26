export type CategoryGroup = {
    id: number;
    created_at: string;
    name: string;
    is_expense: boolean;
    is_budgeted: boolean;
    budget_type: string;
    budget: number;
};

export type CreateCategoryGroupPayload = {
    name: string;
    is_expense?: boolean;
    is_budgeted?: boolean;
    budget_type?: string;
    budget?: number;
};

export type UpdateCategoryGroupPayload = {
    name?: string;
    is_expense?: boolean;
    is_budgeted?: boolean;
    budget_type?: string;
    budget?: number;
};
