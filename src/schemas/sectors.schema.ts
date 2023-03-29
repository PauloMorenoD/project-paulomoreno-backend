import { z } from "zod";

const createSectorBodySchema = z.object({
    name: z.string()
})

export { createSectorBodySchema }