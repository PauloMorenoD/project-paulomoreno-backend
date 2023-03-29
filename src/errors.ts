import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}

const handleErrors = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log(typeof error + "aoioioioioioioio")
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        })
    }
    if (error instanceof ZodError) {
        return res.status(400).json({
            message: error.flatten().fieldErrors
        })
    }

    return res.status(500).json({
        message: "Internal Server Error"
    })
}

export { AppError, handleErrors }