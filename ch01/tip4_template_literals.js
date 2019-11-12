function generateLink(image, width) {
    const widthInt = parseInt(width, 10);
    return 'https://' + getProvider() + '/' + image + '?width=' + widthInt;
}


// after using template literal 
function generateLink(image, width) {
    return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}



// using template literals: indicate to developers that you are returning strings
// combine strings along with JavaScript expressions to create a new string.

function greet(name) {
    return `Hi, ${name.toUpperCase()}!`
}
console.log(greet('leo'))

// do some math computation 
function leapYearConverter(age) {
    return `You'd be ${Math.floor(age /4)} if born on a leap year.`;
}