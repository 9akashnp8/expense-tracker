import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Account } from "./Account.js";

@Entity()
export class CreditCardManager {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @OneToOne(() => Account)
  @JoinColumn()
  card: number

  @Column("float")
  desired_utilization_ratio: number

  @Column("numeric")
  credit_limit: number

  @Column("date")
  reminder_date: Date
}