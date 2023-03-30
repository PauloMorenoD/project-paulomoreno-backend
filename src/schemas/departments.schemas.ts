import { z } from "zod";
import { returnedCompanySchema } from "./companies.schemas";

const createDepartmentSchema = z.object({
    name: z.string(),
    description: z.string(),
    companyId: z.number()
})

const returnedDepartmentSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    company: returnedCompanySchema
})

const hireWorkerSchema = z.object({
    user_id: z.number(),
    department_id: z.number()
})

export {
    createDepartmentSchema,
    returnedDepartmentSchema,
    hireWorkerSchema
}