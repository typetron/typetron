import { Controller, Get } from '@Typetron/Router'
import { Storage } from '@Typetron/Storage'

@Controller()
export class HomeController {

    @Get()
    welcome(storage: Storage) {
        return storage.read('public/index.html')
    }
}
