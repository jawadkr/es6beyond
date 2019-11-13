function Person(first, last, age, eye) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
    this.
}

var father = new Person('john', 'doe', 50, 'blue')
father.fullname = function () {
    console.log(`father's name is ${this.first} ${this.last}`)
}
var mother = new Person('jane', 'dow', 50, 'green')
console.log(father.fullname())
console.log(mother)