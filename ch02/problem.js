const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
};
const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};

function addBookDefaults(book, defaults) {
    const fields = Object.keys(defaults);
    const updated = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        updated[field] = defaults[field] || book[field];
    }
    return updated;
}

console.log(addBookDefaults(book, defaults))