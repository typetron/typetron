import { appBuilder } from 'App/app'
import { AppConfig } from '@Typetron/Framework'
import * as SourceMapSupport from 'source-map-support'

SourceMapSupport.install() // shows typescript file path in error stacks

appBuilder.then(async (app) => {
    await app.startServer()
    const config = app.get(AppConfig)
    console.log(`Typetron app started at: http://localhost:${config.port}`)
})
