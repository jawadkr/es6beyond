// in ECMA5 
// create objects using object literal, object constructor (function), using new keyword 
// Object.create()

// using object literal syntax 
// var person = {
//     firstname: 'jawad',
//     lastname: 'shokrali'
// }
// //creating using JS new keyword 
// var person2 = new Object()
// person2.name = 'hasan'
// person2.age = 25
// person2.eyeColor = 'blue'

// let a = person2
// console.log('person2', person2)
// console.log('a', a)

//JS objects are mutable 

// accessing properties inside an object using for in loops 
// var vals = [];
// var person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };

// for (x in person) {
//     vals.push(person[x])
// }
// console.log(vals)

// person.nationality = 'South Korean';
// delete person.age


// explicit binding using call() 

var jawad = {
    school: 'hanyang',
    degree: 'masters',
    talk: function () {
        console.log(`${this.school} is a great school`)
    }
}

var javid = {
    school: 'SNU',
    degree: 'Phd',
}
jawad.talk.call(javid)