import { Request, Response } from "express";
import getAllSectorsService from "../../services/sectors/getAllSectors.services";

const getAllSectorsController = async(req: Request, res: Response):Promise<Response> => {
    const allSectors = await getAllSectorsService()

    return res.status(200).json(allSectors)
}
export default getAllSectorsController