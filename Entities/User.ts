import { Column, Meta } from '@Typetron/Database';
import { User as Authenticable } from '@Typetron/Framework/Auth';

@Meta({
    table: 'users'
})
export class User extends Authenticable {
    @Column()
    name: string;
}
