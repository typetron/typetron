import { Field, Form, Rules } from '@Typetron/Forms'
import { Email, Required } from '@Typetron/Validation'

export class LoginForm extends Form {

    @Field()
    @Rules(Required, Email)
    email: string

    @Field()
    @Rules(Required)
    password: string
}
