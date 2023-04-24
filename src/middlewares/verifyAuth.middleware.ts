import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";

const auth = async(req: Request, _res: Response, next: NextFunction): Promise<Response | void>=>{
    const bearer = req.headers.authorization

    if(!bearer) throw new AppError("Missing bearer token", 401)

    const token = bearer.split(" ")[1]

    return verify(
        token, 
        String(process.env.SECRET_KEY),
        (error: any, decoded: any) => {
            if(error) throw new AppError(error.message, 401)
            req.user = {
                userId: decoded.sub,
                admin:decoded.admin
            }
            return next()
        }
    )
}

export default auth