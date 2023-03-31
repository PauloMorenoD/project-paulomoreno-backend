import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Departments } from '../../entities'
import { iReturnedDepartment } from '../../interfaces/departments.interfaces'

const getAllDepartments = async (): Promise<iReturnedDepartment[]> => {

    console.log("po")

    const departmentRepo: Repository<Departments> = AppDataSource.getRepository(Departments)

    const allDepartments: Departments[] = await departmentRepo.find({
        relations: {
            company: true
        }
    })

    return allDepartments
}

export default getAllDepartments