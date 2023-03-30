import { Router } from "express"
import loginController from "../controllers/login/login.controller"

const loginRoutes: Router = Router()

loginRoutes.use("", loginController)

export default loginRoutes