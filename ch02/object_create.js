// lesson learned: create: creats a new object based on the given object as its prototype 
const Person2 = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I Human? ${this.isHuman}`);
    }
};

const me = Object.create(Person2); // creates me as Person(its prototype)
// so it will inherit it 

me.name = 'Jawad Shokralizadeh'; // enumerable will be true for this property 
me.isHuman = true;
me.printIntroduction();