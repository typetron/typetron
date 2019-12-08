import { Field, Form } from '@Typetron/Forms';

export class LoginForm extends Form {

    @Field()
    email: string;

    @Field()
    password: string;
}
