import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Departments, Users } from "../../entities"
import { AppError } from "../../errors"
import { iHiredWorkerCreate } from "../../interfaces/departments.interfaces"

const hireWorkerService = async (data: iHiredWorkerCreate) => {

    console.log("po")

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users) 
    const departmentRepo: Repository<Departments> = AppDataSource.getRepository(Departments) 


    const departments : Departments | null = await departmentRepo.findOneBy({ id:data.department_id })
    
    if(!departments) throw new AppError("Department not found", 404)

    const oldUserData : Users | null = await userRepo.findOneBy({ id: data.user_id })

    console.log(oldUserData)
    
    if(!oldUserData) throw new AppError("User not found", 404)

    const userHired = {
        ...oldUserData,
        department: departments
    }


    await userRepo.save(userHired)

    return userHired
}

export default hireWorkerService