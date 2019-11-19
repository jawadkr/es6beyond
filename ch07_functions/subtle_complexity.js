// mocks that intercept imports and explicitly set a return value
import {
    getTaxInformation
} from './taxService';

function formatPrice(user, {
    price,
    location
}) {
    const rate = getTaxInformation(location);
    const taxes = rate ? `plus $${rate * price} in taxes.` : 'plux tax.';
    return `${user} your total is: ${price} ${taxes}`;
}

export {
    formatPrice
};