// hoisting: execution context (creation and execution phases work in JS)
// variable and function declarations are put into memory during the compile phase 

// therefore: this works because it puts the catName function in memory during compile time
// maybe lazy ??
// declaration: registers a variable in the corresponding scope 
// initialization: allocates memory for the variable 
// assignment: assign a specified value to the variable 



catName("Chloe");

function catName(name) {
    console.log("My cat's name is " + name);
}

//only declarations are hoisted, not initialization
console.log(num) //will return undefined 
var num;
num = 6;

//If you declare the variable after it is used, but initialize it beforehand, 
//it will return the value:

num2 = 10;
console.log(num2);
var num2;

// Initialization = Declaration + Assignment in a single step.

//Example 1 - Does not hoist
var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//This will not work as JavaScript only hoists declarations

//Example 2 - Hoists
var num1 = 3; //Declare and initialize num1
num2 = 4; //Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declare num2 for hoisting

//Example 3 - Hoists
a = 'Cran'; //Initialize a
b = 'berry'; //Initialize b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declare both a & b for hoisting