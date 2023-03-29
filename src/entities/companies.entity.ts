import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Sectors from "./sectors.entity";


@Entity("companies")
class Companies {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @Column()
    opening_hours : string

    @Column({ length: 200 })
    description : string

    @ManyToOne(() => Sectors)
    sector: Sectors

}

export default Companies