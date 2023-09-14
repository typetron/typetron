import { CacheConfig } from '@Typetron/Framework'

export default new CacheConfig({
    default: 'file',

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

