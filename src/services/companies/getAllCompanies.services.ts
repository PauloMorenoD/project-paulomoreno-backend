import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Companies } from '../../entities'
import { iReturnedCompanies } from '../../interfaces/companies.interfaces'

const getAllCompaniesService = async (): Promise<iReturnedCompanies[]> => {
    const companieRepo: Repository<Companies> = AppDataSource.getRepository(Companies)

    const allCompanies: iReturnedCompanies[] = await companieRepo.find()

    return allCompanies
}

export default getAllCompaniesService