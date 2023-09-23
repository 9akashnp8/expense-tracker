export type AccountType = {
    id: number;
    created_at: string;
    name: string;
    is_asset_class: boolean;
};

export type CreateAccountTypePayload = {
    name: string;
    is_asset_class?: boolean;
};

export type UpdateAccountTypePayload = {
    name?: string;
    is_asset_class?: boolean;
};
