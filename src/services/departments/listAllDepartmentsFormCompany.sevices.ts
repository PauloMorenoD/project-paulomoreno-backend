import { AppDataSource } from "../../data-source"
import { Companies, Departments } from "../../entities"
import { AppError } from "../../errors"
import { iReturnedDepartment } from "../../interfaces/departments.interfaces"

const listAllDepartmentsFormCompanyService = async (id: number): Promise<iReturnedDepartment[]> => {
    
    const departmentRepo = AppDataSource.getRepository(Departments)
    const companyRepo = AppDataSource.getRepository(Companies)
    const company = await companyRepo.findOneBy({ id })

    if(!company) throw new AppError("Company not found", 404)

    const allCompanyDepartments = await departmentRepo.find({
        where: {
            company: company
        },
        relations:{
            company: true
        }
    })

    return allCompanyDepartments
}
export default listAllDepartmentsFormCompanyService