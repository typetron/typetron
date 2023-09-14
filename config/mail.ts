import { MailConfig } from '@Typetron/Framework'

export default new MailConfig({
    default: 'SendGrid',

    from: {
        email: 'ionel@typetron.org',
        name: 'Example',
    },

    mailers: {
        memory: {},

        SendGrid: {
            key: process.env.SENDGRID_KEY ?? 'fail',
        },
    }
})

