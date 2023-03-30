import { z } from "zod";
import { createCompanySchema, returnedCompanySchema } from "../schemas/companies.schemas";

type iReturnedCompanies = z.infer<typeof returnedCompanySchema>
type iCreateCompanie = z.infer<typeof createCompanySchema>

export {
    iReturnedCompanies,
    iCreateCompanie
}