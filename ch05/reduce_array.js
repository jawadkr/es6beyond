// different size and shape 
// good code is predictable 


//callback has 4 arguments: 
// //Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)
const callback = function (collectedValues, item) {
    return [...collectedValues, item];
};

const saying = ['veni', 'vedi', 'veci'];
const initialValue = ['hi'];
const copy = saying.reduce(callback, initialValue)

console.log(initialValue)
console.log(copy)