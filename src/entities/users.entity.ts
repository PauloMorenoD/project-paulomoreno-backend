import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn,  OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Departments from "./departments.entity";

@Entity("users")

class Users{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password?: string

    @Column()
    professional_level: string

    @Column()
    kind_of_work: string

    @Column({ default: false })
    is_admin: boolean

    @OneToOne(() => Departments, { nullable:true })
    @JoinColumn()
    department: Departments | null

    @BeforeInsert()
    @BeforeUpdate()
    hashPass(){
        const encriptedPass = getRounds(this.password!)
        if (!encriptedPass) this.password = hashSync(this.password!, 10)
    }
}

export default Users