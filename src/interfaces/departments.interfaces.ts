import { z } from "zod";
import { createDepartmentSchema, hireWorkerSchema, returnedDepartmentSchema } from "../schemas/departments.schemas";

type iCreateDepartments = z.infer<typeof createDepartmentSchema>
type iReturnedDepartment = z.infer<typeof returnedDepartmentSchema>
type iHiredWorkerCreate = z.infer<typeof hireWorkerSchema>


export {
    iCreateDepartments,
    iReturnedDepartment,
    iHiredWorkerCreate
}