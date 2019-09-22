/* tslint:disable:no-default-export */
import { AppConfig } from '@typetron/framework/Framework';
import { DatabaseProvider } from 'App/Providers/DatabaseProvider';
import { RoutingProvider } from 'App/Providers/RoutingProvider';

export default new AppConfig({
    port: 8000,

    middleware: [],
    providers: [
        RoutingProvider,
        DatabaseProvider,
    ]
});
