function getDogNames(dogs, filter) {
    const [key, value] = filter;
    return dogs
        .filter(dog => dog[key] === value)
        .map(dog => dog.name);
}

getDogNames(dogs, ['color', 'black']);

function getDogNames2(dogs, filterFunc) {
    return dogs
        .filter(filterFunc)
        .map(dog => dog.name)
}

getDogNames2(dogs, dog => dog.weight < 20);

const weightCheck = weight => dog => dog.weight < weight;
getDogNames2(dogs, weightCheck(20));
getDogNames2(dogs, weightCheck(50));
//By currying the function, you’ve made it so you can pass multiple parameters at different points.


const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('color');
const stateCheck = identity('state');
getDogNames2(dogs, colorCheck('black'));
getDogNames2(dogs, stateCheck('Kansas'));
//assign partially applied functions to variables,

function allFilters(dogs, ...checks) {
    return dogs
        .filter(dog => checks.every(check => check(dog)))
        .map(dog => dog.name);
}
allFilters(dogs, colorCheck('black'), stateCheck('kansas'));

function allFilters(dogs, ...checks) {
    return dogs
        .filter(dog => checks.some(check => check(dog)))
        .map(dog => dog.name);
}

anyFilters(dogs, weightCheck(20), colorCheck('chocolate'));