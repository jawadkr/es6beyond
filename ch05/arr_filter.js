const team = ['Michelle B', 'Dave L', 'Dave C', 'Courtney B', 'Davina M', ]

// traditinally using for loop 

const daves = []
for (let i = 0; i < team.length; i++) {
    if (team[i].match(/Dav/)) {
        daves.push(team[i])
    }
}

// above function could be written: 
const daves2 = team.filter(customer => customer.match(/Dav/));
console.log(daves2)


const scores = [30, 82, 70, 45];

function getNumberPassedScores(scores) {
    const passed = scores.filter(score => score > 90);
    console.log(passed)
    return passed.length;
}

// console.log(getNumberPassedScores(scores));