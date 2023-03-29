import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Sectors } from '../../entities'

const getAllSectorsService = async (): Promise<Sectors[]> => {
    const sectorRepo: Repository<Sectors> = AppDataSource.getRepository(Sectors)

    const allSectors: Sectors[] = await sectorRepo.find()

    return allSectors
}

export default getAllSectorsService