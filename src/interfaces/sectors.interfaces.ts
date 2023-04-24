import { z } from "zod"
import { createSectorBodySchema } from "../schemas"
type iCreateSectorBody = z.infer<typeof createSectorBodySchema>

interface iCreateSectorReturn extends iCreateSectorBody {
    id: number
}

export { iCreateSectorBody, iCreateSectorReturn }