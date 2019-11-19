const dogs = [{
    name: 'max',
    weight: 10,
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black',
}, {
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black',
}, {
    name: 'don',
    weight: 90,
    breed: 'labrador',
    state: 'kansas',
    color: 'black',
}, {
    name: 'shadow',
    weight: 40,
    breed: 'labrador',
    state: 'wisconsin',
    color: 'chocolate'
}];

function getDogNames(dogs, filter) {
    const [key, value] = filter;
    return dogs
        .filter(dog => dog[key] === value)
        .map(dog => dog.name);
}
getDogNames(dogs, ['color', 'black']); // ['max', 'don']