import { Request, Response } from 'express'
import getAllCompaniesService from '../../services/companies/getAllCompanies.services'

const getCompaniesController = async (req: Request, res: Response): Promise<Response> => {
    const companies = await getAllCompaniesService()

    return res.status(200).json(companies)
}

export default getCompaniesController