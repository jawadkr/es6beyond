// what is enumerable in JS 
// this is because of the dynamic nature of JS, 
// so we can freely modify behaviour and properties of objects 


var person = {
    name: 'jawad',
    address: 'seoul, South Korea',
    email: 'email@domain.com'
}
console.log(person)

console.log(Object.getOwnPropertyDescriptor(person, 'name'))
let a = Object.keys(person)
console.log(a)
Object.defineProperty(person, 'name', {
    value: 'jawad-shokralizdeh',
    configurable: true,
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(person, 'name'))
let b = Object.keys(person)
console.log(b)