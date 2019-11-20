// an exmaple of asynchronous programming in JavaScript 
function getUserPreferences(cb) {
    setTimeout(() =>
        cb({
            theme: 'dusk',
        }), 1000);
}

function log(value) {
    console.log(value);
}

log('starting');

getUserPreferences(preference => {
    return log(preference.theme.toUpperCase());
})
log('ending');