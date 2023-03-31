import { Request, Response } from 'express'
import createDepartmentService from '../../services/departments/createDepartment.services'

const createDepartmentController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body
    
    const departmentCreated = await createDepartmentService(data)

    return res.status(200).json(departmentCreated)
}

export default createDepartmentController