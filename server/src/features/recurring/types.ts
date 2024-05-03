
export type CreateRecurringConfigPayload = {
  name: string;
  cycle: string;
  amount: number;
  transaction_type: string;
  from_account: number;
  to_account: number;
  category: number;
  notes: string;
}
