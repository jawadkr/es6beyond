const sailingClub = ['yi hong',
    'andy',
    'darcy',
    'jessi', 'alex', 'nathan',
];

for (let i = 0; i < sailingClub.length; i++) {
    sendEmail(sailingClub[i]);
}


sailingClub.forEach(member => sendEmail(member));
//Changing something outside the scope of the function is called a side effect sendEmail is a side-effect that makes sense 


//const names = ['walter', 'white'];
let capitalized = [];
names.forEach(name => capitalized.push(name.toUpperCase()));
capitalized;
// but this does not makes sense, you could use map

// when you want to perform an action outside the scope of the function. In other words, when you know you must cause a side effect, you should use forEach().

//you can perform multiple actions on the same array without needing to save the output to variables each time.