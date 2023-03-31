import { Router } from "express";
import createDepartmentController from "../controllers/departments/createDepartments.controller";
import getAllDepartmentsController from "../controllers/departments/getAllDepartments.controller";
import hireWorkerController from "../controllers/departments/hireWorker.controller";
import listAllDepartmentsFromCompanyController from "../controllers/departments/listAllDepartmentsFormCompany.controller";
import verifyDataIsValid from "../middlewares/validateData.middleware";
import auth from "../middlewares/verifyAuth.middleware";
import verifyUserIsAdmin from "../middlewares/verifyUserIsAdmin.middleware";
import { createDepartmentSchema, hireWorkerSchema } from "../schemas/departments.schemas";

const departmentsRoutes: Router = Router()

departmentsRoutes.get("", auth, verifyUserIsAdmin, getAllDepartmentsController)
departmentsRoutes.get("/:id", auth, verifyUserIsAdmin, listAllDepartmentsFromCompanyController)
departmentsRoutes.post("", auth, verifyUserIsAdmin, verifyDataIsValid(createDepartmentSchema), createDepartmentController)

export default departmentsRoutes