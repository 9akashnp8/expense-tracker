import { AppDataSource } from "../../../data-source.js";
import { Transaction } from "../../../entity/Transaction.js";

export async function getMonthlySpend(month: number | string) {
  const result = AppDataSource
    .manager
    .createQueryBuilder()
    .select("cast(sum(amount) as numeric)")
    .from(Transaction, "transaction")
    .where("txn_date_time > current_date - interval '1 month'")
    .getRawOne()
  return result
}

export async function getLastWeekSpend() {
  const result = AppDataSource
    .manager
    .createQueryBuilder()
    .select("txn_date_time, count(id)")
    .from(Transaction, "transaction")
    .where("txn_date_time > current_date - interval '7 days'")
    .groupBy("txn_date_time")
    .getRawMany()
  return result
}

export async function getCategoryWiseSpend() {
  const result = await AppDataSource
    .manager
    .createQueryBuilder()
    .select("category.name, sum(transaction.amount)")
    .from(Transaction, "transaction")
    .leftJoin("transaction.category", "category")
    .groupBy("category.name")
    .getRawMany()
  return result
}