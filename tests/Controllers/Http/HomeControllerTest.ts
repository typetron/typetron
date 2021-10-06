import { suite, test } from '@testdeck/mocha'
import { expect } from 'chai'
import { TestCase } from '../../TestCase'

@suite
class HomeControllerTest extends TestCase {

    @test
    async showsWelcomeMessage() {
        const response = await this.get('welcome')
        expect(response.body).to.contain('Build something awesome')
    }
}
