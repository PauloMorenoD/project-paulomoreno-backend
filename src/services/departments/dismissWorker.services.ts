import { AppDataSource } from "../../data-source"
import { Users } from "../../entities"
import { AppError } from "../../errors"

const dismissWorkerService = async (id: number): Promise<Response | void> => {

    const userRepo = AppDataSource.getRepository(Users)

    const worker = await userRepo.findOneBy({ id })

    if (!worker) throw new AppError("user not found", 404)

    if (!worker.department) throw new AppError("user is not hired", 404)

    const data = {
        ...worker,
        department:null
    }
    userRepo.save(data)

    return
}

export default dismissWorkerService