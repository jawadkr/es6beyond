class ValidatorProblem {
    constructor() {
        this.message = 'is invalid';
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`;
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage);
        //t will create a new this binding in the context of the array method, not the class.
    }
}

const validator = new ValidatorProblem();
validator.setInvalidMessages('city');
// TypeError: Cannot read property 'message' of undefined

// solution 1: use arrow function that will not crate a new this
// u’ll have to move your function to a property rather than a method.
// therefore you should put it in the constructor

class Validator_solution1 {
    constructor() {
        this.message = 'is invalid.';
        this.setInvalidMessage = field => `${field} ${this.message}`;
    }
    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage);
    }
}

//A better solution is to use the bind() method. 
// an explicit binding 
function sayMessage() {
    return this.message;
}

const alert = {
    message: 'Hello',
}

const sayAlert = sayMessage.bind(alert);
sayAlert()

class Validator3 {
    constructor() {
        this.message = 'is invalid';
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`;
    }
    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage.bind(this));
    }
} //The only downside is if you use the function in another method, you’ll have to bind it again.


// another solution: 
//avoid multiple binds

class Validator_solution4 {
    constructor() {
        this.message = 'is invalid';
        this.setInvalidMessage = this.setInvalidMessage.bind(this);
        // this will bind it only to the corresponding object
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`;
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage)
    }
}

//In a future spec, you’ll be able to set class properties outside of the constructo
//you assign arrow functions to properties alongside other method definitions.

class Validator_final {
    message = 'is invalid.';
    setMessage = field => `${field} ${this.message}`;
    setInvalidMessages(...fields) {
        return fields.map(this.setMessage);
    }
}