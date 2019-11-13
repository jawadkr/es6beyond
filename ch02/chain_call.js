// using call to chain constructors 
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price)
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy";
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 20);

// console.log(cheese);
// console.log(fun);



for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species +
                ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

var animals = [{
        species: 'Lion',
        name: 'King'
    },
    {
        species: 'Whale',
        name: 'Biggo'
    }
]

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print()
    }).call(animals[i], i);
}