import { Request, Response } from 'express'
import getAllDepartments from '../../services/departments/getAllDepartments'

const getAllDepartmentsController = async (req: Request, res: Response): Promise<Response> => {

    const departments = await getAllDepartments()

return res.status(200).json(departments)
}

export default getAllDepartmentsController