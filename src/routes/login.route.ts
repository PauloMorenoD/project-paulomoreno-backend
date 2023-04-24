import { Router } from "express"
import loginController from "../controllers/login/login.controller"

const loginRoutes: Router = Router()

function test(){
    console.log("chegou aqui")
}
loginRoutes.post("", loginController)

export default loginRoutes