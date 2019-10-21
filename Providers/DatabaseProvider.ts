import { Inject } from '@Typetron/Container';
import { DatabaseConfig, Query } from '@Typetron/Database';
import { Connection } from '@Typetron/Database/Connection';
import { Provider } from '@Typetron/Framework';

export class DatabaseProvider extends Provider {

    @Inject()
    databaseConfig: DatabaseConfig;

    async register() {
        if (this.databaseConfig.database) {
            Query.connection = new Connection(this.databaseConfig.database);
        }
    }
}
