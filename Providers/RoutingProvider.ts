import { AppConfig, Provider, RootDir } from '@Typetron/Framework'
import { Router } from '@Typetron/Router'
import { Inject } from '@Typetron/Container'

export class RoutingProvider extends Provider {
    directory = 'Controllers'

    @Inject()
    appConfig: AppConfig

    @Inject()
    router: Router

    @Inject()
    rootDir: RootDir

    register() {
        this.router.middleware = this.appConfig.middleware || []

        this.router.loadControllers(this.rootDir + '/' + this.directory)
    }
}
