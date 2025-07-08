import { AppConfig, CacheProvider, DatabaseProvider, MailProvider } from '@Typetron/Framework'
import { RoutingProvider } from 'App/Providers/RoutingProvider'
import { AppProvider } from 'App/Providers/AppProvider'

export default new AppConfig({
    port: 3000,
    websocketsPort: 3001,
    server: 'uNetworking',
    environment: 'development',
    middleware: {
        global: [],
        http: [],
        websocket: []
    },
    providers: [
        AppProvider,
        RoutingProvider,
        MailProvider,
        CacheProvider,
        DatabaseProvider
    ],
    staticAssets: [
        {
            url: '.*',
            path: 'public'
        }
    ]
})
