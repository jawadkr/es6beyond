const dog = {
    name: 'Joe',
    color: 'white',
}

// an array of arrays with key and values 
const myDog = [
    ['name', 'zeerak'],
    ['color', 'golden']
];

function getName(dog) {
    return dog.find(attr => {
        return attr[0] === 'color';
    })[1];
}

// console.log(getName(myDog))
console.log(Object.entries(dog))