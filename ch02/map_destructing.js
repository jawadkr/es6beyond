const filters = new Map().set('color', 'black').set('breed', 'labrador');

function getFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }
}

getFilters(filters);

console.log(filters.entries())


function getAppliedFilters2(filters) {
    const applied = [];
    // assign to variables using destructuring
    for (const [key, value] of filters) {
        applied.push(`${key}:${value}`);
    }
    return `Your filters are: ${applied.join(', ')}.`;
}