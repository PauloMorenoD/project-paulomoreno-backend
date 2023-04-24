import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Users } from '../entities'
import { AppError } from '../errors'

const verifyUserExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const id: number = Number(req.params.id)

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const userExists = await userRepo.findOne({
        where: { id }
    })

    if(!userExists) throw new AppError("User not found", 404)

    return next()
}

export default verifyUserExists