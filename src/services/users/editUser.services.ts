import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Users } from "../../entities"
import { iReturnedUser, iUserEdit } from "../../interfaces/users.interfaces"
import { returnedUserCreated } from "../../schemas/users.schema"

const editUserService = async (id: number, data: iUserEdit) => {

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)
    
    const oldUserData: Users | null = await userRepo.findOneBy({ id })

    const newUserData = {
        ...oldUserData,
        ...data
    }

    await userRepo.save(newUserData)

    delete newUserData.password
    
    return newUserData
}

export default editUserService