// using call to invoke an anonymous function 
var animals = [{
        species: 'Lion',
        name: 'King'
    },
    {
        species: 'Whale',
        name: 'Fail'
    }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            // console.log('#' + i + ' ' + this.species +
            //     ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}


var sheeps = {
    animal: 'sheeps',
    sleepDuration: '9pm and 5am'
}

function greet() {
    let reply = `${this.animal} typically sleeps between ${this.sleepDuration}`;
    console.log(reply)
}

// greet.call(sheeps)

var sData = 'Wisen';

function display() {
    console.log('sData is: %s', this.sData)
}
display.call()