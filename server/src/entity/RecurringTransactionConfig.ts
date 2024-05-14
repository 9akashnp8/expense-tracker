import { 
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

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

  @Column() // TODO: FK to Account
  from_account: number;

  @Column() // TODO: FK to Account
  to_account: number;

  @Column() // TODO: FK to Category
  category: number;

  @Column("text")
  notes: string;

  @CreateDateColumn()
  created_at: Date
}