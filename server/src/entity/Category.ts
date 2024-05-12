import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";


@Entity()
export class CategoryGroup {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  name: string

  @Column("bool", { nullable: true })
  is_expense: boolean | null

  @Column("bool", { nullable: true })
  is_budgeted: boolean | null

  @Column("text", { nullable: true })
  budget_type: string | null

  @Column("numeric", { nullable: true })
  budget: number | null
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  name: string

  @ManyToOne(() => CategoryGroup, (group) => group.id)
  group: number

  @Column("bool")
  is_budgeted: boolean

  @Column("numeric")
  budget: number
  
}