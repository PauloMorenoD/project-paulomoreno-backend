import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Users } from '../../entities'


const getALlUsersService = async ():Promise<Users[]> => {
    
    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const allUsers:Users[] = await userRepo.find({
        relations:{
            department: true
        }
    }) 

    allUsers.forEach( user => delete user.password )
    
    return allUsers
}

export default getALlUsersService