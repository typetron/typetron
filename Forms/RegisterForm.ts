import { Field, Form, Rules } from '@Typetron/Forms'
import { Email, MinLength, Required } from '@Typetron/Validation'

export class RegisterForm extends Form {

    @Field()
    @Rules(
        Required,
        Email,
    )
    email: string

    @Field()
    @Rules(
        Required,
        MinLength(6),
    )
    password: string

    @Field()
    @Rules(
        Required
    )
    passwordConfirmation: string
}
