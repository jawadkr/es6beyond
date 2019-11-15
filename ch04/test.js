const employee = {
    name: 'Eric',
    equipmentTraining: true,
};

function listCerts(employee) {
    if (employee.equipmentTraining) {
        employee.certificates = ['Equipment'];
        // Mutation!
        delete employee.equipmentTraining;
    }
    // More code.
}

listCerts(employee)


function checkAuthorization(employee) {
    if (!employee.equipmentTraining) {
        return 'Not authorized'
    }
    return `hello ${employee.name}`
}

let result = checkAuthorization(employee)
console.log(result)