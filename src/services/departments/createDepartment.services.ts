import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Companies, Departments } from '../../entities'
import { AppError } from '../../errors'
import { iCreateDepartments, iReturnedDepartment } from '../../interfaces/departments.interfaces'

const createDepartmentService = async (data: iCreateDepartments): Promise<any> => {
    const departmentRepo: Repository<Departments> = AppDataSource.getRepository(Departments)
    const companieRepo: Repository<Companies> = AppDataSource.getRepository(Companies)

    const companie: Companies | null = await companieRepo.findOneBy({
        id: data.companyId
    })
    if(!companie) throw new AppError("companie not found", 404)

    const createdDepartment:iReturnedDepartment = departmentRepo.create({
        ...data,
        company: companie
    })

    console.log(createdDepartment)

    await departmentRepo.save(createdDepartment)

    return createdDepartment
}

export default createDepartmentService