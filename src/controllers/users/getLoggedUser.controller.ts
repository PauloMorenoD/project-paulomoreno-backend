import { Request, Response } from 'express'
import getAllLoggedService from '../../services/users/getLoggedUser.services'


const getLoggedController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.user.userId)

    const users = await getAllLoggedService(id)

    return res.status(200).json(users)
}

export default getLoggedController