import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Departments, Users } from "../../entities"
import { AppError } from "../../errors"
import { iHiredWorkerCreate } from "../../interfaces/departments.interfaces"

interface iUserIds {
    user_id : number,
    department_id : number,
}

const hireWorkerService = async ({user_id, department_id}:iUserIds ) => {

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users) 
    const departmentRepo: Repository<Departments> = AppDataSource.getRepository(Departments) 


    const departments : Departments | null = await departmentRepo.findOneBy({ id: department_id })
    
    if(!departments) throw new AppError("Department not found", 404)

    const oldUserData : Users | null = await userRepo.findOne({ 
        where:{
            id: user_id
        }
    })

    
    if(!oldUserData) throw new AppError("User not found", 404)

    const userHired = {
        ...oldUserData,
        departmentId: departments
    }


    await userRepo.save(userHired)

    return userHired
}

export default hireWorkerService