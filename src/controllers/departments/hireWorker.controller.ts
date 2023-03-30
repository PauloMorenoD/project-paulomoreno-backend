import { Request, Response } from 'express'
import hireWorkerService from '../../services/departments/hireWorker.services'

const hireWorkerController = async (req: Request, res: Response): Promise<Response> => {
    
    const hiredWorker = await hireWorkerService(req.body)

    return res.status(200).json(hiredWorker)
}

export default hireWorkerController