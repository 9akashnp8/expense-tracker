export type Transaction = {
  account: number;
  amount: number;
  category: number;
  created_at: string;
  id: number;
  is_expense: boolean;
  item: string;
  label: number;
  notes: string;
  txn_date_time: string;
};

export type TxnListAPIRes = {
  status: string;
  message?: string;
  data?: Transaction[];
};

export type TxnCategoryChartData = {
  name: string;
  transaction_count: number;
};

export type TxnDateChartData = {
  txn_date_time: number;
  count: string;
};
