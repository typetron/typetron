import { app } from '../bootstrap/app';
import { TestCase as BaseTestCase } from '@Typetron/Testing/TestCase';

export class TestCase extends BaseTestCase {
    bootstrapApp() {
        this.app = app;
    }
}
