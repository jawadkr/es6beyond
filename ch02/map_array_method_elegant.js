// [['color', 'black], ['breed', 'someBreed']]
// this is more elegant: applying the array methods 


function getSortedAppliedFilters(filters) {
    const applied = [...filters]
        .sort(sortByKey)
        .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');
    return `Your filters are: ${applied}.`;
}