import { Controller, Action } from '@Typetron/Router'

@Controller()
export class MainController {

    @Action()
    welcome() {
        return 'Welcome to Websockets'
    }
}
