import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Sectors } from '../../entities'
import { iCreateSectorBody, iCreateSectorReturn } from '../../interfaces/sectors.interfaces'

const createSectorService = async (data:iCreateSectorBody): Promise<iCreateSectorReturn> => {
    const sectorRepo: Repository<Sectors> = AppDataSource.getRepository(Sectors)

    const sectorCreated:Sectors = sectorRepo.create(data)

    await sectorRepo.save(sectorCreated)

    return sectorCreated
}

export default createSectorService