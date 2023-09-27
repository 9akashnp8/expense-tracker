export type Label = {
    id: number;
    created_at: string;
    name: string;
};

export type CreateLabelPayload = {
    name: string;
};

export type UpdateLabelPayload = {
    name?: string;
};
