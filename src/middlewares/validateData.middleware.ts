import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from "zod"

const verifyDataIsValid = ( schema: ZodTypeAny) => async (req: Request, _res: Response, next: NextFunction): Promise<Response | void> => {
    const validatedData = schema.parse(req.body)

    req.body = validatedData
    console.log("po")
    return next()
}

export default verifyDataIsValid