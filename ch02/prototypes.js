// Constructor function to create a prototype 
// modify your own prototype and not the standard JS objects 

function Person(name, age, eyeColor) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
}


// creating an object from this Person Prototype 
let jawad = new Person('jawad shokralizadeh', 32, 'black')

// now imagine this Person Prototype is recording foreigners in korea 
Person.prototype.korean = false //Person prototype 
console.log('is the person korean? ', jawad.korean)


let courses = ['math', 'physics', 'chemistry', 'trigonometry']
console.log(courses)