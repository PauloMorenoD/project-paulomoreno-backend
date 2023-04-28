import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import User from '../../entities/users.entity'
import { AppError } from '../../errors'

const getAllLoggedService = async (id: number) => {

    const users: Repository<User> = AppDataSource.getRepository(User)

    const loggedUser: User | null= await users.findOneBy({ id })

    if(!loggedUser) throw new AppError("User not found", 404)

    delete loggedUser.password
    return loggedUser
}

export default getAllLoggedService