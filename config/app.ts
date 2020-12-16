/* tslint:disable:no-default-export */
import { AppConfig } from '@Typetron/Framework'
import { DatabaseProvider } from 'App/Providers/DatabaseProvider'
import { RoutingProvider } from 'App/Providers/RoutingProvider'
import { AppProvider } from 'App/Providers/AppProvider'

export default new AppConfig({
    port: 8000,
    environment: 'development',
    middleware: [
        // CorsMiddleware
    ],
    providers: [
        AppProvider,
        RoutingProvider,
        DatabaseProvider,
    ],
    staticAssets: {
        '*': ['public']
    }
})
