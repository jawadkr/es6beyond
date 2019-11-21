import {
    capitalize
} from '../single/util';
export function parseRegion(address) {
    const region = address.state || address.providence || '';
    return region.toUpperCase();
}
export function parseStreet({
    street
}) {
    return street.split(' ').map(part => capitalize(part)).join(' ');
}
export default function normalize(address) {
    const street = parseStreet(address);
    const city = address.city;
    const region = parseRegion(address);
    return `${street} ${city}, ${region}`;
}

//If you don’t use curly braces, you’ll get the default export and nothing else. 
//You don’t need to use the exact function name
import normalize from './address';

function getAddress(user) {
    return normalize(user.address);
}
export default getAddress;


import normalize, {
    parseRegion
} from './address';

function getAddress(user) {
    return normalize(user.address);
}
export function getAddressByRegion(users) {
    return users.reduce((regions, user) => {
        const {
            address
        } = user;
        const region = parseRegion(address);
        const addresses = regions[region] || [];
        regions[region] = [...addresses, normalize(address)];
        return regions;
    }, {});
}
const bars = [{
    name: 'Saint Vitus',
    address: {
        street: '1120 manhattan ave',
        city: 'Brooklyn',
        state: 'NY',
    },
}, ];
getAddressByRegion(bars);
// {
// NY: ["1120 Manhattan Ave Brooklyn, NY"] // }