import { DeepPartial } from "typeorm";
import { z } from "zod";
import { createUserBody, returnedUserCreated } from "../schemas/users.schema";

type iCreateUserBody = z.infer<typeof createUserBody>
type iReturnedUser = z.infer<typeof returnedUserCreated>
type iUserEdit = DeepPartial<iCreateUserBody>

export{
    iCreateUserBody,
    iReturnedUser,
    iUserEdit
}