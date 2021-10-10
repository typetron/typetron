import { AppConfig, DatabaseProvider } from '@Typetron/Framework'
import { RoutingProvider } from 'App/Providers/RoutingProvider'
import { AppProvider } from 'App/Providers/AppProvider'

export default new AppConfig({
    port: 8000,
    websocketsPort: 8001,
    environment: 'development',
    middleware: [
        // CorsMiddleware
    ],
    providers: [
        AppProvider,
        RoutingProvider,
        DatabaseProvider
    ],
    staticAssets: [
        {
            url: '.*',
            path: 'public'
        }
    ]
})
