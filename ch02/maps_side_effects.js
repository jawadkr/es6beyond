// creating maps without side effects 
// ways to mitigate the side effect of mutation in maps-data-structure 

const defautls = new Map()
    .set('color', 'brown')
    .set('breed', 'beagle')
    .set('state', 'kansas')

const filters = new Map()
    .set('color', 'black')


function applyDefaults(filters, defaults) {
    for (const [key, value] of defaults) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
}



let filters1 = new Map()
    .set('color', 'black')

let filters2 = new Map().set('color', 'brown');

let update = new Map([...filters1, ...filters2])

function applyFilters2(map, defaults) {
    return new Map([...defaults, ...map]);
}