import { Column, Options } from '@Typetron/Database'
import { User as Authenticable } from '@Typetron/Framework/Auth'

@Options({
    table: 'users'
})
export class User extends Authenticable {
    @Column()
    name: string
}
