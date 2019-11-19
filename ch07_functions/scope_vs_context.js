//  what is the difference between context and scope and using this 6
function validator = {
    message: 'is invalid',
    setInvalidMessage(field) {
        return `${field} ${this.message}`;
    }
}

validator.setInvalidMessage('city');

/// arrow functions are useful where there is already a contdxt and we want to carry already defined 'this' in the outer context 
// however when the property is assigned to a func. this func will not create a this pointing to the object 