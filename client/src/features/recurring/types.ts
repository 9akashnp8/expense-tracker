export type RecurringConfig = {
  id: number;
  name: string;
  cycle: "weekly" | "monthly" | "yearly";
  transaction_type: string;
  from_account: number;
  to_account: number;
  amount: number;
  category: number;
  notes: string;
  created_at: string;
};

export type RecurringConfigListAPIResponse = {
  status: string;
  message?: string;
  data?: RecurringConfig[];
};
