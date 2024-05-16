import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created_date: Date

  @Column("text")
  name: string
}