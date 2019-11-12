var someString = new String('hi'); // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
    return { // this is the iterator object, returning a single element, the string "bye"
        next: function () {
            if (this._first) {
                this._first = false;
                return {
                    value: 'bye',
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        },
        _first: true
    };
};

console.log([...someString]) // ['bye'] -> this will run because it calls the iterator object on the someString
console.log(someString + '') //hi -> this will run without calling iterator object and iterable protocol