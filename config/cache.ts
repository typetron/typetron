import { CacheConfig } from '@Typetron/Framework'

export default new CacheConfig({
    defaultStore: 'file',

    drivers: {
        file: {
            path: 'storage/cache',
        },

        memory: {},

        database: {
            table: 'cache',
            connection: null,
        },
    }
})

