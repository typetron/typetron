# Typetron
> **Note:** This project is a prototype in heavy development and not ready for production. 
> But feel free to play with it 😄.

**[Typetron](https://github.com/typetron/typetron)** is a **modern web framework** built for Node.js, written in **Typescript**, that
allows you to build fully featured web applications. 
Typetron is best suited for small sized to enterprise level apps.
Most of the core packages it uses were built from scratch in order to preserve the performance of the framework. 

## Getting started
```shell script
git clone https://github.com/typetron/typetron my-awesome-project
cd my-awesome-project
npm install
npm start
```

Check [http://localhost:8000](http://localhost:8000)

### Prerequisites
- [Node.js](https://nodejs.org)

> **Note:** If you want to use a database, create a `database.sqlite` file 
> (the framework supports only SQLite, but more adapters will be added) in the root of your project,
> set `database: './databse.sqlite'` inside `config/database.ts` and create the tables necessary for your entities
> (in the future these table will be created automatically) 
## Docs

Check the [official website](https://typetron.org) for more details.

##### Controllers
Controllers allow you to define routes for your app. A method inside a controller can be a route if it is 
annotated with one of the available routing decorators `@Get()`, `@Post()`, `@Put()`, `@Delete()` etc.
Below is an example of a controller: 
```ts
import { User } from 'App/Models/User';
import { Controller, Get} from '@Typetron/Router';

@Controller('users')
class UserController {

    @Get()
    index() {
        return 'This route will show a list of users';
    }
}
```
This will create a route that can be accessed at `http://localhost:8000/users`

##### Route parameters

It is often the case when sometimes you will need the get some parts of the request path. 
For example, you may want to show a particular user based on an ID with the following route: `/users/1`.
In order to get the value `1` in your controller's method you can use route parameters like in the example below:  
```ts
import { User } from 'App/Models/User';
import { Controller, Get} from '@Typetron/Router';

@Controller('users')
class UserController {

    @Get('{id}')
    read(id: number) {
        return `This route will show the user with id ${id}`;
    }
}
```
> [info] Route parameters, by default, are of type `string`. 
> Typetron will automatically convert parameters from `string` to `number` if you expect it like so. 

##### Named routes
You can set a name for a route by providing a second parameter in the annotations that resemble the HTTP methods `@Get()`, `@Post()` etc.:

```ts
@Controller()
class HomeController {

    @Get('', 'home')
    home(id: number) {
        return `Home page`;
    }

}
``` 
This is helpful when you want to redirect a user to a route, or generate one and you don't want to use it's full path.

By default, Typetron will set the routes names using the `@Controller` path and the name of the controller method, separating the two with a dot.
For example, take the bellow controller:
```ts
import { Controller, Get} from '@Typetron/Router';

@Controller('users')
class UserController {

    @Get()
    read(id: number) {
    }
}
``` 
This will create a route having the name `users.read`

If you want to overwrite the prefix you can do it by setting the prefix property inside @Controller:
```ts
import { Controller} from '@Typetron/Router';

@Controller('users', { 
    prefix: "employees" 
})
class UserController {}
``` 

_[check the [website](https://typetron.org) for more info]_

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
