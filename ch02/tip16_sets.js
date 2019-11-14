const dogs = [{
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
    },
    {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
    },
    {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
    },
];


function getUniqueColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.color)
    }
    return [...unique];
}