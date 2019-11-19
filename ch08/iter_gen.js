// you want the structure of the object but the flexibility of an iterable 
// generators return data one piece at a time 
// one of use cases is to use 'generators' to transform objects into iterables 
// a function that does not fully execute its body immediately when called 

// look for usage patterns in online repositories 
// higher-order functions executes fully and return a new function 
// a generator does not resolve its body fully 
// * will provide you with next()
// yield give you one by one 


function* getCairoTriology() {
    yield 'Palace Walk';
    yield 'Palace of Desire';
    yield 'Sugar Street';
}

const triology = getCairoTriology()
trilogy.next();
// { value: 'Palace Walk', done: false } trilogy.next();
// { value: 'Palace of Desire', done: false } trilogy.next();
// { value: 'Sugar Street', done: false } trilogy.next();
// { value: undefined, done: true }

//yield will return an object with 'value' and 'done' 
// generators turning a function into an iterable