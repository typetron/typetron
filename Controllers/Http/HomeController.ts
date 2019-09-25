import { Inject } from '@typetron/framework/Container';
import { AppConfig } from '@typetron/framework/Framework';
import { Controller, Get } from '@typetron/framework/Router';

@Controller()
export class HomeController {

    @Inject()
    appConfig: AppConfig;

    @Get()
    welcome() {
        return `
            <h1 style="text-align: center">Welcome to your awesome app built with Typetron.</h1>
            <h3 style="text-align: center">Check the <a href="https://github.com/typetron/typetron">Typetron Docs</a> on how to get started.</h3>
        `;
    }
}
