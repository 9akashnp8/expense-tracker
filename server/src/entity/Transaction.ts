import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from "typeorm"
import { Category } from "./Category.js"
import { Account } from "./Account.js"
import { Label } from "./Label.js"

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  item: string

  @Column("numeric")
  amount: number

  @Column("timestamp", { default: new Date().toDateString()})
  txn_date_time: Date | null

  @ManyToOne(() => Category, (category) => category.id)
  category: number

  @ManyToOne(() => Account, (account) => account.id)
  account: number

  @ManyToOne(() => Label, (label) => label.id)
  label: number

  @Column("text")
  notes: string

  @Column("bool")
  is_expense: boolean
}