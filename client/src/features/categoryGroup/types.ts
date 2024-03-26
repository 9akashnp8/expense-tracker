export type CategoryGroup = {
  id: number;
  name: string;
  is_expense: boolean;
  is_budgeted: boolean;
  budget_type: string;
  budget: number;
};

export type CategoryGroupListAPIRes = {
  status: string;
  message?: string;
  data?: CategoryGroup[];
};

export type CategoryGroupDetailAPIRes = {
  status: string;
  message?: string;
  data?: CategoryGroup;
};
