var array1 = [1, 4, 9, 16];
const that = this
const map1 = array1.map(function callback(currentVal, index, calledOn) {

}, that);
// console.log(array1)
// console.log(map1)

var numbers = [1, 4, 9];
var sqrRoots = numbers.map(Math.sqrt)
// console.log('original numbers: ', numbers)
// console.log('the sqr root: ', sqrRoots)


var kvArray = [{
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    }
];

var reFormatted = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
// console.log(reFormatted)

var map = Array.prototype.map;
var asciKode = map.call('Jawad Shokralizadeh', function (x) {
    return x.charCodeAt(0);
});
console.log(asciKode)

// to understand the above code, i need to understand call 