import { DatabaseConfig } from '@Typetron/Framework'
import { MysqlDriver, SqliteDriver } from '@Typetron/Database'

export default new DatabaseConfig({
    entities: './Entities',
    synchronizeSchema: true,
    migrationsDirectory: 'migrations',
    driver: process.env.DATABASE_DRIVER ?? 'sqlite',

    drivers: {
        sqlite: () => new SqliteDriver(process.env.DATABASE ?? 'database.sqlite'),
        mysql: () => new MysqlDriver({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
        }),
    }
})
