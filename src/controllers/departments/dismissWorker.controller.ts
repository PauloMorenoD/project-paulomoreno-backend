import { Request, Response } from 'express'
import dismissWorkerService from '../../services/departments/dismissWorker.services'

const dismissWorkerController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)

    await dismissWorkerService(id)

    return res.status(204).json()
}

export default dismissWorkerController