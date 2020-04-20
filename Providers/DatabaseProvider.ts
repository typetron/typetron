import { Inject } from '@Typetron/Container';
import { DatabaseConfig, Provider } from '@Typetron/Framework';
import { Connection } from '@Typetron/Database/Connection';
import { Query } from '@Typetron/Database';

export class DatabaseProvider extends Provider {

    @Inject()
    databaseConfig: DatabaseConfig;

    async register() {
        if (this.databaseConfig.database) {
            Query.connection = new Connection(this.databaseConfig.database);
        }
    }
}
