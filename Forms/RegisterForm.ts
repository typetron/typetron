import { Field, Form } from '@Typetron/Forms';

export class RegisterForm extends Form {

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    passwordConfirmation: string;
}
