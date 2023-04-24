import { z } from "zod";

const createSectorBodySchema = z.object({
    name: z.string()
})
const sectorReturnSchema = createSectorBodySchema.extend({
    id: z.number()
})

export { 
    createSectorBodySchema,
    sectorReturnSchema
}