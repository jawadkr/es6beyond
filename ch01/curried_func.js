// curried function 
// partial application 
// point-free style 
// curry and function composition together 


// // curried function 
// // closure scope, partical application, bundlled scope, lexical scope
// const add = a => b => a + b;
// console.log(add(2)(3)) //returns 5: closure will keep a = 2
// // above is not returning a function, it is returning a result 

// // point-free style programming: returns a function without the need to apply its arguments
// // a function that returns a function 
// // inc = increment 
// const inc = add(1)
// const inc10 = add(10)
// const inc20 = add(20)
// inc10(3)
// inc20(3)

const g = n => n + 1;
const f = n => n * 2;
// h = x => f(g(x))
// console.log(h(20))

const compose = (f, g) => x => f(g(x));
console.log(compose(20))
const compose2 = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const h = compose2(f, g);
console.log(h(20))