import { AppConfig, Provider } from '@typetron/framework/Framework';
import { Router } from '@typetron/framework/Router';

export class RoutingProvider extends Provider {
    namespace = 'Controllers';

    register() {
        const router = this.app.get(Router);

        const appConfig = this.app.config.get(AppConfig);
        router.middlewares = appConfig.middleware || [];

        const path = this.app.directory + '/' + this.namespace;
        router.loadControllers(path);
    }
}
