import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Users } from "../../entities"

const deleteUserService = async (id: number): Promise<void> => {

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    await userRepo.delete(id)

}

export default deleteUserService