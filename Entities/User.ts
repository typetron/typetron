import { Column, ID } from '@Typetron/Database';
import { User as Authenticable } from '@Typetron/Framework/Auth';

export class User extends Authenticable {

    @Column()
    id: ID;

    @Column()
    email: string;

    @Column()
    name: string;
}
