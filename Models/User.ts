import { Field, Model } from '@Typetron/Models'

export class User extends Model {
    @Field()
    id: number

    @Field()
    name: string

    @Field()
    email: string
}
