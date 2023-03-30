import { Router } from "express"
import loginController from "../controllers/login/login.controller"
import auth from "../middlewares/verifyAuth.middleware"

const loginRoutes: Router = Router()

loginRoutes.use("",auth, loginController)

export default loginRoutes