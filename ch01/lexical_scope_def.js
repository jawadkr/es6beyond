// lexical scope: where it is created. foo is created in global env: so it will print 
// "global" twice 
// Another example of lexical scope would be closures
var x = "global";

function foo() {
    console.log(x);
}

function bar() {
    var x = "bar";
    foo();
}

function baz() {
    var x = "baz";
    foo();
}


bar();
baz();




// another example considering this 
var obj = {
    name: "Rob",
    print() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
};

obj.print()


// clarification of using this 
this.valuez.filter(x => x < this.max);
// when writing using regular function, we should have used bind 
this.valuez.filter(function (x) {
    return x < this.max
}.bind(this));


// lexically scoped using var 

function mytest() {
    var a = 'hello';
    if (true) {
        var a = 'bado bado'
    }
    console.log('lexically scope example', a)
}
mytest()