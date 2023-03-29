import { Request, Response } from "express";
import { Sectors } from "../../entities";
import createSectorService from "../../services/sectors/createSector.services";

const createSectorsController = async(req: Request, res: Response): Promise<Response> =>{
    const data = req.body;

    const createSector = await createSectorService(data)
    return res.status(201).json(createSector)
}

export default createSectorsController