import { Field, Model } from '@Typetron/framework/Models'

export class User extends Model {
    @Field()
    id: number

    @Field()
    email: string
}
