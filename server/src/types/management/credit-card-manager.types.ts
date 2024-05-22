
export type CreditCardSetting = {
  id: number;
  created_date: Date;
  card: number;
  desired_utilization_ratio: number;
  credit_limit: number;
  reminder_date: Date;
}

export type CreateCreditCardSetting = Omit<CreditCardSetting, "id" | "created_date"
>
export type UpdateCreditCardSetting = Partial<CreateCreditCardSetting>
