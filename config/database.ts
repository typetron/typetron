import { DatabaseConfig } from '@Typetron/Framework'
import { SqliteDriver } from '@Typetron/Database/Drivers'

export default new DatabaseConfig({

    driver: new SqliteDriver('database.sqlite'),
    // driver: new MysqlDriver({host: 'host', user: 'user', password: 'password', database: 'database'}),

    entities: './Entities',

    synchronizeSchema: true,

    migrationsDirectory: 'migrations'
})
