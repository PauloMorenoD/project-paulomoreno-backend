import { z } from "zod";
import { createDepartmentSchema } from "./departments.schemas";

const createUserBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    professional_level: z.string(),
    kind_of_work: z.string(),
})

const createUserWithAdmin = createUserBody.extend({
    is_admin: z.boolean().optional()
})
const returnedUserCreated = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    professional_level: z.string(),
    kind_of_work: z.string(),
    department: createDepartmentSchema.nullable(),
    is_admin: z.boolean().optional()
})

const editUserSchema = createUserBody.partial()

export {
    createUserBody,
    returnedUserCreated,
    createUserWithAdmin,
    editUserSchema
}