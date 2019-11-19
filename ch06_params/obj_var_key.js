const photo = {
    photographer: 'jawad',
};

// assigning a variable using the key from the object 
const {
    photographer
} = photo

// interesting: photographer is assigned the value, so if photo.photographer changes, it won't change 


// when the key does not exist 
const {
    doesNotExist, // does not exist: undefined 
    awards = 'nothing', //does not exist: default value: nothing 
} = photo
// it will be undefined 
console.log(typeof (doesNotExist));
console.log(awards)