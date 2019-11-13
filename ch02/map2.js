const errors1 = {
    100: 'Invalid name',
    110: 'Name should only contain letters',
    200: 'Invalid color'
};

// console.log(errors1.keys())
console.log(Object.keys(errors1))

// in Map-collection you can have integers as keys 
let errors2 = new Map([
    [100, 'someError 100'],
    [110, 'someError 110'],
    [120, 'someError3 120']
]);

console.log(errors2.keys()) //it will spit out a MapIterator which bascially a set i believe 