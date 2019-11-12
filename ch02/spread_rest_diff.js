// using rest operator in JS 
// descrtucting my array into sub-array
// rest operator collect items into an array 
// spread : spread parameters out of array into a list of params

const varName = ['shokralizadeh', 'mohammad', 'jawad']
const [surename, ...firstname] = varName
console.log(surename)
console.log(firstname)

//also used in parameters 

function userData(...args) {
    console.log(args)
}

userData("Jawad Shokralizadeh", 32, "backend-dev")

// //* Rest Parameter is collecting all remaining elements into an array
// Spread Operator is unpacking collected elements such as arrays into single elements *//