// writing test for our suble_complex formatPrice module 
// xternal helpers, such as spies, mocks, and stubs, are a clue that your code is complex and may be tightly coupled. You should simplify your code.
import expect from 'expect';
import sinon from 'sinon';
import * as taxService from './taxService';
import {
    formatPrice
} from './problem';

// this is a test group
describe('format price', () => {
    let taxStub;

    beforeEach(() => {
        taxStub = sinon.stub(taxService, 'getTaxInformation');
        // creating a stub that overrides the original getTaxInformation()
    });

    afterEach(() => {
        taxStub.restore();
        //By hijacking the code in this test suite, you’ve hijacked it for all tests unless you restore it.

    });
    // this is a test case 
    it('should return plus tax if no tax info', () => {
        taxStub.returns(null);
        //don’t have to worry about any external dependencies

        const item = {
            price: 30,
            location: 'Oklahama'
        };
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item);
        const expectedMessage = 'Aaron Cometbus your total is: 30 plus tax.';
        expect(message).toEqual(expectedMessage);
    });

    it('should return plus tax information', () => {
        taxStub.returns(0.1);

        const item = {
            price: 30,
            location: 'Oklahama'
        };
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item);
        const expectedMessage = 'Aaron Cometbus your total is: 30 plus $3 in taxes ';
        expect(message).toEqual(expectedMessage);
    });

});