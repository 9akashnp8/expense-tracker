export type Category = {
  budget: number | null;
  created_at: string;
  group: number;
  id: number;
  is_budgeted: boolean;
  name: string;
};

export type CategoryListAPIRes = {
  status: string;
  message?: string;
  data?: Category[];
};
