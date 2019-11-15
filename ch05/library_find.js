// if you use break, it is a good candidate for using find 
const instructors = [{
        name: 'Jim',
        libraries: ['MERIT'],
    },
    {
        name: 'Sarah',
        libraries: ['Memorial', 'SLIS'],
    }, {
        libraries: ['College Library'],
    },
];

// let memorialInstructor;
// for (let i = 0; i < instructors.length; i++) {
//     if (instructors[i].libraries.includes('Memorial')) {
//         memorialInstructor = instructors[i];
//         break;
//     }
// }
// console.log(memorialInstructor)

// writing using find 
const librarian = instructors.find(instructor => instructor.libraries.includes('Memorial'));
console.log(librarian)

const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
};
const librarian = instructors.find(findByLibrary('MERIT'));

// another interesting example
const img = [{
    path: './me.jpg',
    profile: false
}];
const profile = img.find(img => img.profile) || {
    path: './default.jpg'
};