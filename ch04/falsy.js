const employee = {
    name: 'Jawad',
    equipTraining = ''
}

if (!employee.equipTraining) {
    return 'not authorized to operate the machine';
}


const employee2 = {
    name: 'Eric',
    equipmentTraining: true,
};

function listCerts(employee) {
    if (employee.equipmentTraining) {
        employee.certificates = ['Equipment'];
        delete employee.equipmentTraining;
    }
}

check Authorization() {
    if ()
}