import { suite, test } from '@testdeck/mocha'
import { Http } from '@Typetron/Web'
import { expect } from 'chai'
import { TestCase } from '../../TestCase'

@suite
class AuthControllerTest extends TestCase {

    @test
    async login() {
        const response = await this.post('login', {})
        expect(response.status).to.be.equal(Http.Status.UNPROCESSABLE_ENTITY)
    }
}
