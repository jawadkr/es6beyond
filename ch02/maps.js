// 
const dogs = [{
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black'
    }, {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black'
    },
    {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate'
    }
]


let filters = new Map();
filters.set('breed', 'labrador');
filters.get('breed')

// use chaining methods to create key-value pairs 
let filters2 = new Map().set('breed', 'labrador').set('size', 'large').set('color', 'chocolate')

filters2.get('size')

// adding key-value using an array of key-value pairs 
let filters4 = new Map([
    ['breed', 'labrador'],
    ['size', 'large'],
    ['color', 'chocolate']
])
filters4.detele('key')
filters4.clear()

const petFilters = new Map();

function addFilters(petFilters, key, value) {
    petFilters.set(key, value);
}

function deleteFilters(petFilters, key) {
    petFilters.delete(key);
}

function clearFilters(petFilters) {
    petFilters.clear()
}