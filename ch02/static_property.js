// defineProperty to make it a static property on the person object
const person = {
    name: 'jawad',
    position: 'developer',
}
Object.defineProperty(person, 'talk', {
    value: function () {
        console.log('jawad is talking')
    },
    configurable: true,
    writable: true,
    enumerable: true,

})
console.log(Object.keys(person))
console.log(person.talk())
person.talk = function () {
    console.log('behavior is changed')
}

console.log(person.talk())