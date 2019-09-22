import { Inject } from '@typetron/framework/Container';
import { DatabaseConfig, Query } from '@typetron/framework/Database';
import { Connection } from '@typetron/framework/Database/Connection';
import { Provider } from '@typetron/framework/Framework';

export class DatabaseProvider extends Provider {

    @Inject()
    databaseConfig: DatabaseConfig;

    async register() {
        if (this.databaseConfig.database) {
            Query.connection = new Connection(this.databaseConfig.database);
        }
    }
}
