import { AccountType } from "../account/types";

export type CreditCardSetting = {
  id: number;
  created_date: Date;
  card: AccountType;
  desired_utilization_ratio: number;
  current_utilization_ratio: number; // calculated field
  credit_limit: number;
  reminder_date: Date;
};
