// sum all the values of an array 
var expenses = [3, 5, 8, 45];
const total = expenses.reduce(function (accumulator, currentValie) {
    return accumulator + currentValie;
})
// console.log(expenses)
// console.log(total)

// alternatively written with an arrow fucntion 

const total2 = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 10)
// console.log(total2)


// flatten an array of arrays 
var flattend = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((acc, curr) => acc.concat(curr));
// console.log(flattend)


//counting instances of values in an object 
//interesting the initial value is an object literal 
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];

var countNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames
}, {})

// console.log(countNames)


// Grouping objects by a property 
var people = [{
        name: 'Alice',
        age: 21
    },
    {
        name: 'Max',
        age: 20
    },
    {
        name: 'Jane',
        age: 20
    }
];

function groupBy(objArray, property) {
    return objArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {})
}

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)