function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}
// sorting a map - since there is no built-in sort for map

// [['color', 'black], ['breed', 'someBreed']]
// providing us with sort function of Arrays 
function getSortedAppliedFilters(filters) {
    const applied = [];
    for (const [key, value] of [...filters].sort(sortByKey)) {
        applied.push(`${key}:${value}`);
    }
    return `Your filters are: ${applied.join(', ')}.`;
}