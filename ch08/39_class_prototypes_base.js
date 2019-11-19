// using classes with existing prototypes
// traditional oop: you copy all properties and methods onto the new object 
// in JS: new instance is just link to a prototype 
//  the prototype itself is an object instance: not a blue-print 

// class in JS a shorthand for a prototype.

// /In pre-ES5 JavaScript: constructor functions are very similar to a constructor method on a class.

function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
}

Coupon.prototype.getExpirationMessage = function () {
    return `This offer expires in ${this.expiration}.`;
};


const coupon = new Coupon(5);

//this method you will loose all your methods
coupon.getExpirationMessage();

//The code you just created using constructor functions and prototypes is identical to the classes 