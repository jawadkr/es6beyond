//pass a simple function that returns the value you want: getTaxInformation
// You’re testing that formatPrice(), given certain inputs, will return a certain result.
function formatPrice(user, {
    price,
    location
}, getTaxInformation) {
    const rate = getTaxInformation(location);
    const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';
    return `${user} your total is: ${price} ${taxes}`;
}
export {
    formatPrice
};

// following is the test suit for the above function 
import expect from 'expect';
import {
    formatPrice
} from './test';
describe('format price', () => {
    it('should return plus tax if no tax info', () => {
        const item = {
            price: 30,
            location: 'Oklahoma'
        };
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item, () => null); // HERE
        expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
    });
    it('should return plus tax information', () => {
        const item = {
            price: 30,
            location: 'Oklahoma'
        };
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item, () => 0.1); // and HERE
        expect(message).toEqual('Aaron Cometbus your total is:30 plus $3 in taxes.');
    });
});