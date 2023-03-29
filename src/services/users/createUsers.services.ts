import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Users } from "../../entities"
import { iCreateUserBody, iReturnedUser } from "../../interfaces/users.interfaces"
import { returnedUserCreated } from "../../schemas/users.schema"

const createUseService = async (data: iCreateUserBody): Promise<iReturnedUser> => {
    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const user = userRepo.create(data)

    await userRepo.save(user)

    const userParsed : iReturnedUser  = returnedUserCreated.parse(user)

    return userParsed
}

export default createUseService