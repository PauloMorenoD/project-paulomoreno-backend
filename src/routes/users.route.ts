import { Router } from "express"
import createUserController from "../controllers/users/createUser.controller"
import getAllUserController from "../controllers/users/getAllUsers.controller"
import verifyDataIsValid from "../middlewares/validateData.middleware"
import { createUserBody } from "../schemas/users.schema"

const userRoutes: Router = Router()

userRoutes.post("", /* verifyDataIsValid(createUserBody), */ createUserController)
userRoutes.get("", getAllUserController)

export default userRoutes