import { 
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Account } from "./Account.js";
import { Category } from "./Category.js";

@Entity()
export class RecurringTransactionConfig {
  @PrimaryGeneratedColumn ()
  id: number

  @Column("text")
  name: string;

  @Column("text")
  cycle: string;

  @Column("numeric")
  amount: number;

  @Column("text")
  transaction_type: string;

  @ManyToOne(() => Account, (account) => account.id, { nullable: true })
  from_account: number;

  @ManyToOne(() => Account, (account) => account.id, { nullable: true })
  to_account: number;

  @Column() // TODO: FK to Category
  category: number;

  @Column("text")
  notes: string;

  @CreateDateColumn()
  created_at: Date
}