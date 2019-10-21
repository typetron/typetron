import { ErrorHandler, Http, HttpError, Response } from '@Typetron/Http';
import { Inject } from '@Typetron/Container';
import { AppConfig } from '@Typetron/Framework';

export class AppErrorHandler extends ErrorHandler {

    @Inject()
    appConfig: AppConfig;

    handle(error: Error) {
        if (this.appConfig.environment === 'production') {
            if (error instanceof HttpError) {
                return new Response(error.status, error.content);
            }
            return new Response(Http.Status.BAD_REQUEST, error.message);
        }
        return super.handle(error);
    }
}
