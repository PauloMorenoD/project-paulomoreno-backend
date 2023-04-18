import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'

const verifyUserIsAdmin = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if(req.user.admin ===false) throw new AppError("Insufficient permission", 403)

    return next()
}

export default verifyUserIsAdmin