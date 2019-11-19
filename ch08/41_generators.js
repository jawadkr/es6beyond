function* getCairoTrilogy() {
    yield 'Palace Walk';
    yield 'Palace of Desire';
    yield 'Sugar Street';
}

const trilogy = getCairoTrilogy();
trilogy.next();
// { value: 'Palace Walk', done: false } trilogy.next();
// { value: 'Palace of Desire', done: false } trilogy.next();
// { value: 'Sugar Street', done: false } trilogy.next();
// { value: undefined, done: true }