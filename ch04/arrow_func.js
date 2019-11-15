const capitalize = function (name) {
    return name[0].toUpperCase() + name.slice(1);
};

function applyCustomGreeting(name, callback) {
    return callback(capitalize(name));
}

let result = applyCustomGreeting('mark', name =>
    `Oh, hi ${name}!`
);
console.log(result)