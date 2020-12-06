import { Provider } from '@Typetron/Framework'
import { ErrorHandlerInterface } from '@Typetron/Web'
import { AppErrorHandler } from 'App/Services/AppErrorHandler'

export class AppProvider extends Provider {

    async register() {
        this.app.set(ErrorHandlerInterface, this.app.get(AppErrorHandler))
    }
}
