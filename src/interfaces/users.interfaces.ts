import { TypeOf, z } from "zod";
import { createUserBody, returnedUserCreated } from "../schemas/users.schema";

type iCreateUserBody = z.infer<typeof createUserBody>
type iReturnedUser = z.infer<typeof returnedUserCreated>

export{
    iCreateUserBody,
    iReturnedUser
}