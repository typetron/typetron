/* tslint:disable:no-default-export */
import { DatabaseConfig } from '@Typetron/Framework'

export default new DatabaseConfig({
    database: 'database.sqlite',
    entities: './Entities',
    synchronizeSchema: true,
})
