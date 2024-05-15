import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  name: string

  @Column("bool", { nullable: true })
  is_asset_class?: boolean
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  name: string

  @ManyToOne(() => AccountType, (type) => type.id)
  type: number

  @Column("date", { default: new Date()})
  opening_date: Date

  @Column("numeric", { default: 0 })
  starting_balance: number

  @Column("numeric", { default: 0 })
  latest_balance: number

  @Column("text")
  default_currency: string
}