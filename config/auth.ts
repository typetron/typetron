import { AuthConfig } from '@Typetron/Framework'
import { User } from 'App/Entities/User'

export default new AuthConfig({
    duration: 3600,
    entity: User,
    signature: '696?sX}Fqp,|3/$txG)5PJSVoAnCj|pW03ytqLbNX/9o,Q)5O>z4x3AV7aIDlbd',
    saltRounds: 12,
})
