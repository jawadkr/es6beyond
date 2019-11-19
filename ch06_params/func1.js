// if not provided it is undefined 
function convertWeight(weight, ounces) {
    console.log(typeof (ounces)); // will be undefined 
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    return total / 2.2;
}

console.log(convertWeight(25))


// writing the above function using defauls 
function convertWeight2(weight, ounces = 0, roundTo = 2) {
    const total = weight + (ounces / 16);
    const conversion = total / 2.2;
    return roundToDecimalPlace(conversion, roundTo);
}

// but still the problem of parameter order exists 
// if you pass undefined, it will use default 
// if you pass null, default won't work -be careful
// another method: use objects in parameters and use destructing them 