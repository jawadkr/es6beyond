// constructor function

function Human(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullName = function () {
        return this.firstname + " " + this.lastname
    }
}

var person1 = Human('jawd', 'shokralizadeh');
console.log(person1)