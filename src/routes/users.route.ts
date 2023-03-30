import { Router } from "express"
import createUserController from "../controllers/users/createUser.controller"
import deleteUserController from "../controllers/users/deleteUser.controller"
import editUserController from "../controllers/users/editUser.controller"
import getAllUserController from "../controllers/users/getAllUsers.controller"
import verifyDataIsValid from "../middlewares/validateData.middleware"
import auth from "../middlewares/verifyAuth.middleware"
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware"
import verifyUserExists from "../middlewares/verifyUserExists.middleware"
import { createUserBody, editUserSchema } from "../schemas/users.schema"

const userRoutes: Router = Router()

userRoutes.post("", verifyDataIsValid(createUserBody), verifyEmailExistsMiddleware, createUserController)
userRoutes.get("", auth, getAllUserController)
userRoutes.patch("/:id",auth, verifyDataIsValid(editUserSchema), verifyUserExists, verifyEmailExistsMiddleware, editUserController)
userRoutes.delete("/:id", auth, verifyUserExists, deleteUserController)

export default userRoutes