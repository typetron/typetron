import { AppConfig, Provider } from '@Typetron/Framework'
import { Router } from '@Typetron/Router'
import { Inject } from '@Typetron/Container'

export class RoutingProvider extends Provider {
    directory = 'Controllers'

    @Inject()
    appConfig: AppConfig

    @Inject()
    router: Router

    register() {
        this.router.middleware = this.appConfig.middleware || []

        this.router.loadControllers(this.app.directory + '/' + this.directory)
    }
}
