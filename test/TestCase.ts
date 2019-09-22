import { app } from '../bootstrap/app';
import { TestCase as BaseTestCase } from '@typetron/framework/Testing/TestCase';

export class TestCase extends BaseTestCase {
    bootstrapApp() {
        this.app = app;
    }
}
