import { TestCase as BaseTestCase } from '@Typetron/Testing/TestCase';
import { AppConfig, Application } from '@Typetron/Framework';
import * as path from 'path';

export class TestCase extends BaseTestCase {

    static app: Application;

    async bootstrapApp() {
        if (TestCase.app) {
            this.app = TestCase.app;
            return;
        }
        const app = await Application.create(path.join(__dirname, '..'));
        const config = app.get(AppConfig);
        console.log(`Started server at: http://localhost:${config.port}`);
        TestCase.app = this.app = app;
    }
}
