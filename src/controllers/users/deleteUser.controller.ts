import { Request, Response } from 'express'
import deleteUserService from '../../services/users/deleteUser.services'

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)

    await deleteUserService(id)

    return res.status(200).json({
        message: "user deleted"
    })
}

export default deleteUserController