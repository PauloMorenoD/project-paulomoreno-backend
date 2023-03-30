import { z } from "zod";

const createDepartmentSchema = z.object({
    name: z.string(),
    description: z.string(),
    companyId: z.number()
})

export {
    createDepartmentSchema
}