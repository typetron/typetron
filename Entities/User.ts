import { Column, Options } from '@Typetron/Database'
import { User as Authenticatable } from '@Typetron/Framework/Auth'

@Options({
    table: 'users'
})
export class User extends Authenticatable {
    @Column()
    name: string
}
