import { DatabaseConfig } from '@Typetron/Framework'
import { MysqlDriver, SqliteDriver } from '@Typetron/Database/Drivers'

export default new DatabaseConfig({
    entities: './Entities',
    synchronizeSchema: true,
    migrationsDirectory: 'migrations',
    driver: process.env.databaseDriver ?? 'sqlite',

    drivers: {
        sqlite: () => new SqliteDriver(process.env.database ?? 'database.sqlite'),
        mysql: () => new MysqlDriver({
            host: process.env.databaseHost,
            user: process.env.databaseUser,
            password: process.env.databasePassword,
            database: process.env.database,
        }),
    }
})
