import { Router } from "express";
import createCompaniesController from "../controllers/companies/createCompanies.controller";
import getCompaniesController from "../controllers/companies/getCompanies.controller";
import verifyDataIsValid from "../middlewares/validateData.middleware";
import auth from "../middlewares/verifyAuth.middleware";
import verifyUserIsAdmin from "../middlewares/verifyUserIsAdmin.middleware";
import { createCompanySchema } from "../schemas/companies.schemas";

const companieRoutes: Router = Router()

companieRoutes.get("", getCompaniesController)
companieRoutes.post("", verifyDataIsValid(createCompanySchema), createCompaniesController)

export default companieRoutes