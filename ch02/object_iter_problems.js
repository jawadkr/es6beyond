const filters = {
    color: 'black',
    breed: 'labrador',
};

function getAppliedFilters(filters) {
    const keys = Object.keys(filters);
    const applied = [];
    for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `Your filters are: ${applied.join(', ')}.`;
}


function getSortedApplied(filters) {
    const keys = Object.keys(filters);
    keys.sort();
    const applied = [];
    for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `Your filters are: ${applied.join(', ')}.`;
}