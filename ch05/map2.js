const band = [{
        name: 'corbett',
        instrument: 'guitar',
    },
    {
        name: 'evan',
        instrument: 'guitar',
    }, {
        name: 'sean',
        instrument: 'bass',
    }, {
        instrument: 'drums',
    },
];

//underneath how map function of the array works: 
function getInstrument(member) {
    return member.instrument;
}
const instruments = [];
for (let i = 0; i < band.length; i++) {
    instruments.push(getInstrument(band[i]));
}
console.log(instruments)


// same mechanism 
const instruments2 = band.map(member => member.instrument)
console.log(instruments2)