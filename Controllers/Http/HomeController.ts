import { Controller, Get } from '@Typetron/Router';
import { Filesystem } from '@Typetron/Filesystem';

@Controller()
export class HomeController {

    @Get()
    welcome(storage: Filesystem) {
        return storage.read('public/index.html');
    }
}
