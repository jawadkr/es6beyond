var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() without initialValue
[{
    x: 22
}, {
    x: 42
}].reduce(maxCallback); // 42
[{
    x: 22
}].reduce(maxCallback); // { x: 22 }
// [].reduce(maxCallback); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
let a = [{
        x: 22
    }, {
        x: 42
    }].map(el => el.x)
    .reduce(maxCallback2, -Infinity);

//5 is the initialValue => if given acc = 5, curVal = 0 and curInd = 0
// if initialValue not given = acc equals Index 0 with value 0 
let aa = [0, 1, 2, 3, 4, 10].reduce((acc, curVal, curInd, arr) => acc + curVal, 5)
console.log(aa)