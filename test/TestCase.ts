import { TestCase as BaseTestCase } from '@Typetron/Testing/TestCase';
import { AppConfig, Application } from '@Typetron/Framework';
import * as path from 'path';

export class TestCase extends BaseTestCase {
    async bootstrapApp() {
        const app = await Application.create(path.join(__dirname, '..'));
        app.startServer();
        const config = app.get(AppConfig);
        console.log(`Started server at: http://localhost:${config.port}`);
        this.app = app;
    }
}
