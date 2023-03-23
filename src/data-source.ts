import path from "path"
import "dotenv/config"
import { DataSource } from "typeorm"
import { DataSourceOptions } from "typeorm/data-source"

const dataSourceConfig = ():DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities**.{ts, js}")
    const migrationsPath: string = path.join(__dirname, "./migrations**.{ts, js}")

    const dbUrl: string | undefined = process.env.DATABASE_URL
    if(!dbUrl) throw new Error("Env var DATABASE_URL doesn't exists")

    return{
        type:"postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource = new DataSource(dataSourceConfig())