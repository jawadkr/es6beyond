function addClick(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = (function (i) {
            return function () {
                return i;
            };
        }(i));
    }
    return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();


// traditional solution, passing i 
// it solves by creating a closure - higher order functions that return function
function addClick(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = (function (i) {
            return function () {
                return i;
            };
        }(i)); //immediately invoked function 
    }
    return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();


// the easy solution is using 'let'

function addClick(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].onClick = (function (i) {
            return function () {
                return i;
            };
        }(i));
    }
    return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();