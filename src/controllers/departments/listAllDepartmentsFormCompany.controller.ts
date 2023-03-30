import { Request, Response } from 'express'
import listAllDepartmentsFormCompanyService from '../../services/departments/listAllDepartmentsFormCompany.sevices'

const listAllDepartmentsFromCompanyController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)

    const companyDepartments = await listAllDepartmentsFormCompanyService(id)

    return res.status(200).json(companyDepartments)
}

export default listAllDepartmentsFromCompanyController