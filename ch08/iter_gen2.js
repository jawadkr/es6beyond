// you don't need to use next
// use anything that requires an iterable object 

function* getCairoTriology() {
    yield 'Palace Walk';
    yield 'Palace of Desire';
    yield 'Sugar Street';
}

const res = [...getCairoTriology()];
console.log(res);