import { Controller, Event } from '@Typetron/Router'

@Controller()
export class MainController {

    @Event()
    welcome() {
        return 'Welcome to Websockets'
    }
}
