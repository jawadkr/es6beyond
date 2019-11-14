var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

var allBooks = friends.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books]
}, ['JawadBook', 'JavaScript Book'])
// console.log(allBooks)

// remove duplicate items in an array 

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length;
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current)
    }
    return accumulator;
}, [])

// console.log(result)

//running promises in Sequence 