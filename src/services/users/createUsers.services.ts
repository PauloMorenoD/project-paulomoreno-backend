import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Users } from "../../entities"
import { iCreateUserBody } from "../../interfaces/users.interfaces"

const createUseService = async (data: iCreateUserBody)=> {
    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const user = userRepo.create(data)

    await userRepo.save(user)

    delete user.password

    return user
}

export default createUseService