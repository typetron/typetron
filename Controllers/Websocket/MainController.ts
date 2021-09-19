import { Controller, Event } from '@Typetron/Router'

@Controller()
export class MainController {

    @Event()
    async welcome() {
        return 'Welcome to Websockets'
    }
}
