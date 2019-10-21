import { Column, Entity, ID } from '@Typetron/Database';

export class User extends Entity {

    @Column()
    id: ID;

    @Column()
    email: string;

    @Column()
    name: string;
}
