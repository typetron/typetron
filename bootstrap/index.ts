'use strict';
import 'reflect-metadata';
import 'source-map-support/register';
import '@Typetron/Support';
import { AppConfig } from '@Typetron/Framework';
import { Handler as HttpHandler, Request, Response } from '@Typetron/Http';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { app } from './app';

const config = app.config.get(AppConfig);
const httpHandler = app.get(HttpHandler);

const server = createServer(async (incomingMessage: IncomingMessage, serverResponse: ServerResponse) => {
    const request = await Request.capture(incomingMessage);
    const response = await httpHandler.handle(app, request);
    Response.send(response, serverResponse);
});

console.log(`Started server at: http://localhost:${config.port}`);

server.listen(config.port);
