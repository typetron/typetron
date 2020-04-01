'use strict';
import 'reflect-metadata';
import 'source-map-support/register';
import '@Typetron/Support';
import { AppConfig, Application } from '@Typetron/Framework';

Application.create(__dirname).then(app => {
    app.startServer();
    const config = app.get(AppConfig);
    console.log(`Started server at: http://localhost:${config.port}`);
});
