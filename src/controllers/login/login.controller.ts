import { Request, Response } from 'express'
import loginService from '../../services/login/login.services'

const loginController = async (req: Request, res: Response): Promise<Response> => {
    const token = await loginService(req.body)

    return res.status(200).json({ token, admin:token.userLogin.is_admin})
}

export default loginController