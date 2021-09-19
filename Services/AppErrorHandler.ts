import { ErrorHandler, Request } from '@Typetron/Router/Http'

export class AppErrorHandler extends ErrorHandler {

    handle(error: Error, request?: Request) {
        return super.handle(error, request)
    }
}
