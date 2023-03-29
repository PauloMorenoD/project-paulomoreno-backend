import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Companies from "./companies.entity";

@Entity("departments")
class Departments{
  @PrimaryGeneratedColumn()
  id: number 
  
  @Column()
  name: string

  @Column()
  description: string

  @ManyToOne(() => Companies)
  company: Companies
}

export default Departments