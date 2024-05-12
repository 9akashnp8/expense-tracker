import { DataSource } from "typeorm"
import { RecurringTransactionConfig } from "./entity/RecurringTransactionConfig.js"
import { Category, CategoryGroup } from "./entity/Category.js"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "expense_tracker",
  entities: [
    Category,
    CategoryGroup,
    RecurringTransactionConfig,
  ],
  synchronize: true,
  logging: false,
})
