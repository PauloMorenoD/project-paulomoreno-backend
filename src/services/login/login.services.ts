import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { string } from 'pg-format'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Users } from '../../entities'
import { AppError } from '../../errors'
import iLogin from '../../interfaces/login.interfaces'

const loginService = async (data:iLogin): Promise<string> => {

    const userRepo: Repository<Users> = AppDataSource.getRepository(Users)

    const userLogin: Users | null = await userRepo.findOne({
        where:{
            email: data.email
        }
    })
    if(!userLogin) throw new AppError("Invalid credentials", 401)

    const comparatePass: boolean = await compare(data.password, userLogin.password)

    if(!comparatePass) throw new AppError("Invalid credentials", 401)

    const token: string = sign(
        { admin: userLogin.is_admin },
        String(process.env.SECRET_KEY),
        {expiresIn: "24h", subject: string(userLogin.id)}
    )

    return token
}

export default loginService