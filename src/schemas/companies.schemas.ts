import { z } from "zod";
import { sectorReturnSchema } from "./sectors.schema";

const createCompanySchema = z.object({
    name: z.string(),
    opening_hours: z.string(),
    description: z.string(),
    sectorId: z.number()
})

const returnedCompanySchema = z.object({
    id: z.number(),
    name: z.string(),
    opening_hours: z.string(),
    description: z.string(),
    sector: sectorReturnSchema
})

export{
    createCompanySchema,
    returnedCompanySchema
}