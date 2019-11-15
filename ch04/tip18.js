// true true, we get the first one: time, overtime + pay 
// true false, we get second , 
// false false we get the last one: time 
let title = 'manager';
const permissions = title === 'supervisor' || title === 'manager' ?
    title === 'manager' ? ['time', 'overtimeAuthorization', 'pay'] : ['time', 'overtimeAuthorization'] : ['time'];

// console.log(permissions)

function getTimePermissions({
    title
}) {
    if (title === 'manager') {
        return ['time', 'overtimeAuthorization', 'pay'];
    }
    if (title === 'supervisor') {
        return ['time', 'overtimeAuthorization'];
    }
    return ['time'];
}
const permissions2 = getTimePermissions({
    title: 'employee'
});
// console.log(permissions2)


// using short-circuting 

function getIcon(icon) {
    const path = icon.path || 'urls/default.png'
    return `https://domain.com/${path}`
}