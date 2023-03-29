import { Request, Response } from 'express'
import { Users } from '../../entities'
import { iReturnedUser } from '../../interfaces/users.interfaces'
import getALlUsersService from '../../services/users/getAllUsers.services'

const getAllUserController = async (_req: Request, res: Response): Promise<Response> => {

    const users: Users[] = await getALlUsersService()

    return res.status(200).json(users)
}

export default getAllUserController