import { AuthConfig } from '@Typetron/Framework'
import { User } from 'App/Entities/User'

export default new AuthConfig({
    duration: 3600,
    entity: User,
    signature: process.env.APP_SECRET,
    saltRounds: 12,
})
