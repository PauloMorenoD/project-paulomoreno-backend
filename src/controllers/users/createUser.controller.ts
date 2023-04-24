import { Request, Response } from 'express'
import { iCreateUserBody, iReturnedUser } from '../../interfaces/users.interfaces'
import createUseService from '../../services/users/createUsers.services'

const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const data/* : iCreateUserBody  */= req.body

    const userCreated/*:  iReturnedUser */ = await createUseService(data)

    return res.status(200).json(userCreated)
}

export default createUserController