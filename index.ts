import { appBuilder } from 'App/app'
import { AppConfig } from '@Typetron/Framework'

appBuilder.then(app => {
    app.startServer()
    const config = app.get(AppConfig)
    console.log(`Typetron app started at: http://localhost:${config.port}`)
})
