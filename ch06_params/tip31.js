// function validateCharacterCount(max, items) {
//     return items.every(item => item.length < max);
// }

// const res = validateCharacterCount(10, ['Seoul', 'Korea']);


function getArguments() {
    return arguments;
}

const arguments = getArguments('Bloomsday', 'June 16');

function getCharacterKount(max) {
    const items = Array.prototype.slice.call(arguments, 1)
    console.log('items: ', items);
    console.log(items.every(item => item.length < max));
}

getCharacterKount(10, arguments);