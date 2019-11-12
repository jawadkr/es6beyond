// Symbol is a primitive data-type 
// global symbol registry 
// static methods: symbol values are unique, can be used as identifier for object properties: this is the only purpose
// the description param is for debugging purposes 

const symbol1 = Symbol()
const symbol2 = Symbol(42)
const symbol3 = Symbol('foo')

console.log(typeof symbol1)
console.log(symbol3.toString())
console.log(Symbol('foo') === Symbol('foo'))