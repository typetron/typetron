import { ErrorHandler, Request } from '@Typetron/Web'

export class AppErrorHandler extends ErrorHandler {

    handle(error: Error, request?: Request) {
        return super.handle(error, request)
    }
}
