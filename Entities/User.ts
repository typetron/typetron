import { Column } from '@Typetron/Database';
import { User as Authenticable } from '@Typetron/Framework/Auth';

export class User extends Authenticable {
    @Column()
    name: string;
}
