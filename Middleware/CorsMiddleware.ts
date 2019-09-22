import { Injectable } from '@typetron/framework/Container/Decorators';
import { Request } from '@typetron/framework/Http/Request';
import { Response } from '@typetron/framework/Http/Response';
import { Middleware, RequestHandler } from '@typetron/framework/Router/Middleware';

@Injectable()
export class CorsMiddleware implements Middleware {

    async handle(request: Request, next: RequestHandler) {
        let response: Response;
        if (request.method === 'OPTIONS') {
            response = new Response;
            response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE';
            response.headers['Access-Control-Allow-Headers'] = 'Content-Type';
        } else {
            response = await next(request);
        }

        response.headers['Access-Control-Allow-Origin'] = '*';
        return response;
    }

}
