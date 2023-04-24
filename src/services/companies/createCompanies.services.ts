import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Companies, Sectors } from "../../entities"
import { AppError } from "../../errors"
import { iCreateCompanie, iReturnedCompanies } from "../../interfaces/companies.interfaces"

const createCompanieService = async (data: iCreateCompanie): Promise<iReturnedCompanies> => {
    const companyRepo: Repository<Companies> = AppDataSource.getRepository(Companies)
    const sectorRepo: Repository<Sectors> = AppDataSource.getRepository(Sectors)

    const sector = await sectorRepo.findOneBy({id: data.sectorId})

    if(!sector)throw new AppError("sector not found", 404)

    const createCompanie = companyRepo.create({
         ...data,
         sector   
    })

    await companyRepo.save(createCompanie)

    return createCompanie
}

export default createCompanieService