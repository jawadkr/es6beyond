// problem with deep cloning example: 
// solved  two ways: using assign which is a more difficult to read
// using the Object-Spread-Operator that is friendlier to the eyes
const defaultEmployee = {
    name: {
        first: '',
        last: '',
    },
    years: 0,
};
const employee = Object.assign({}, defaultEmployee);
const employee3 = Object.assign({},
    defaultEmployee, {
        name: Object.assign({}, defaultEmployee.name)
    })
// another method using "object Spread Operator"
const employee4 = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    }
}
defaultEmployee.name.first = 'jawad'
console.log(employee)
console.log(employee3)
console.log(employee4)