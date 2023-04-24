import { Request, Response } from 'express'
import createCompanieService from '../../services/companies/createCompanies.services'

const createCompaniesController = async (req:Request, res: Response): Promise<Response> => {
    const data = req.body

    const companieCreated = await createCompanieService(data)

    return res.status(200).json(companieCreated)
}

export default createCompaniesController