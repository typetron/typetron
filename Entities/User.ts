import { EntityBase } from '@typetron/framework/Database';
import { Column, Entity, ID } from '@typetron/framework/Database/Decorators';

@Entity<User>({
    table: 'users'
})
export class User extends EntityBase {

    @Column()
    id: ID;

    @Column()
    email: string;

    @Column()
    name: string;
}
