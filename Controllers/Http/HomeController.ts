import { Controller, Get } from '@Typetron/Router';
import { Filesystem } from '@Typetron/Filesystem';
import { Request } from '@Typetron/Http';

@Controller()
export class HomeController {

    @Get()
    welcome(storage: Filesystem, request: Request) {
        return storage.read('public/index.html');
    }
}
