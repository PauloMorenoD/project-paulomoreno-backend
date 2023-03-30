import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Users } from '../entities'
import { AppError } from '../errors'

const verifyEmailExistsMiddleware = async (req: Request, _res: Response, next: NextFunction): Promise<Response | void> => {

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)
    
    if(req.body.email){
        const emailExists = await userRepo.findOne({
            where:{ email: req.body.email }
        })
        if(emailExists) throw new AppError("Email already exists", 409)
    }

    return next()
}

export default verifyEmailExistsMiddleware