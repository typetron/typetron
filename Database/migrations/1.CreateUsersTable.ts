import { Migration } from '@Typetron/Database/Migrations'

export class CreateUsersTable extends Migration {
    async up() {
        await this.connection.runRaw(`
            CREATE TABLE users
            (
                id       integer primary key autoincrement,
                email    varchar,
                password varchar,
                name     varchar
            );
        `)
    }

    async down() {
        await this.connection.runRaw('DROP TABLE users')
    }
}
