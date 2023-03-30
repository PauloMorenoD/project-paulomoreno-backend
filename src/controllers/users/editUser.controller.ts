import { Request, Response } from 'express'
import editUserService from '../../services/users/editUser.services'

const editUserController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    const data = req.body

    const userEdited = await editUserService(id, data)

    return res.status(200).json(userEdited)
}

export default editUserController