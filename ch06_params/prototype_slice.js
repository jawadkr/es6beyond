function validate(max) {
    console.log(arguments);
    //{ '0': 11, '1': 'seoul', '2': 'south korea' }
    const items = Array.prototype.slice.call(arguments, 1);
    console.log(items)
    //[ 'seoul', 'south korea' ]
    const res = items.every(item => item.length < max);
    console.log(res) // true
}
validate(11, 'seoul', 'southkorea');