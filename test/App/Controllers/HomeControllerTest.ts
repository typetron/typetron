import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import { TestCase } from '../../TestCase';

@suite
class HomeControllerTest extends TestCase {

    @test
    async showsWelcomeMessage() {
        const response = await this.get('welcome');
        expect(response.content).to.contain('Build something awesome');
    }
}
