import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sectors")

class Sectors {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

}
export default Sectors