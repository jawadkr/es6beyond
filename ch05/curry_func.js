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

const librarian = instructors.find(instructor => instructor.libraries.includes('Memorial')); //hard-coding the library name 

//using curry function to resolve above issue 
const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
};
const librarian = instructors.find(findByLibrary('MERIT'));
// creates a closure with library = MERIT