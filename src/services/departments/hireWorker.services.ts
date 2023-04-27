import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Departments, Users } from "../../entities"
import { AppError } from "../../errors"
import { iHiredWorkerCreate } from "../../interfaces/departments.interfaces"

const hireWorkerService = async (data: iHiredWorkerCreate) => {
    console.log("chegou aqui")
    const userRepo: Repository<Users> = AppDataSource.getRepository(Users) 
    const departmentRepo: Repository<Departments> = AppDataSource.getRepository(Departments) 

    const department : Departments | null = await departmentRepo.findOneBy({ id:data.department_id })
    
    if(!department) throw new AppError("Department not found", 404)

    const oldUserData : Users | null = await userRepo.findOneBy({ id: data.user_id })

    if(!oldUserData) throw new AppError("User not found", 404)

    if(oldUserData.department)throw new AppError("User is already hired", 404)


    const userHired = {
        ...oldUserData,
        department
    }

    await userRepo.save(userHired)

    delete userHired.password

    return userHired
}

export default hireWorkerService