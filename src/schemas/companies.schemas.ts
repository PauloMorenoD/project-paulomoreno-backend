import { z } from "zod";

const createCompanySchema = z.object({
    name: z.string(),
    opening_hours: z.string(),
    description: z.string(),
    sectorId: z.number()

})
export{
    createCompanySchema
}