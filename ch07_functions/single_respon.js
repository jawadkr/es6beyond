// single responsibility 
// partially applied functions 
// higher order functions locking in parameters
// leverage higher-order functions to give parameters single responsibility.
// a partially applied function reduces the total number of arguments for a function

const building = {
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd',
};
const manager = {
    name: 'Augusto',
    phone: '555-555-5555',
};
const program = {
    name: 'Presenting Research',
    room: '415',
    hours: '3 - 6',
};
const exhibit = {
    name: 'Emerging Scholarship',
    contact: 'Dyan',
};

function mergeProgramInfo(building, manager, program) {
    const {
        hours,
        address
    } = building;
    const {
        name,
        phone
    } = manager;
    const defaults = {
        hours,
        address,
        contact: name,
        phone,
    };
    return {
        ...defaults,
        ...program
    };

}
const programInfo = mergeProgramInformation(building, manager, program);
const exhibitInfo = mergeProgramInformation(building, manager, exhibit);


function mergeProgramInformation(building, manager) {
    const {
        hours,
        address
    } = building;
    const {
        name,
        phone
    } = manager;
    const defaults = {
        hours,
        address,
        contact: name,
        phone,
    };
    return program => { //returns this function: inner function
        return {
            ...defaults,
            ...program
        };
    };
}
const programInfo = mergeProgramInformation(building, manager)(program);
const exhibitInfo = mergeProgramInformation(building, manager)(exhibit);