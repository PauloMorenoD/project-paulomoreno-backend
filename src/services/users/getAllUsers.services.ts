import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Users } from '../../entities'
import { iReturnedUser } from '../../interfaces/users.interfaces'
import { returnedUserCreated } from '../../schemas/users.schema'

const getALlUsersService = async ()/* : Promise<iReturnedUser[]> */ => {
    
    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const allUsers: Users[] = await userRepo.find() 

    /* const usersParsed: iReturnedUser[] = returnedUserCreated.array().parse(allUsers) */

    return allUsers
}

export default getALlUsersService