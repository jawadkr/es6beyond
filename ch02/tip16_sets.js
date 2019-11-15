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
    {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
    },
    {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'Yellow',
    }
];


function getUniqueColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.color)
    }
    return [...unique];
}


// using reduce 
const elegantArray = [...dogs.reduce((colors, {
    color
}) => colors.add(color), new Set())];
console.log(elegantArray)