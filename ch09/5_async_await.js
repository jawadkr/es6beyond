// wrapping promises in better syntax 
//async keyword to declare that an encapsulating function will be using asynchronous data.
//Inside the asynchronous function, you can use the await keyword to pause the function until a value is returned.
function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk',
        });
    });
    return preferences;
}


async function getTheme() {
    const {
        theme
    } = await getUserPreferences();
    return theme;
}

getTheme()
    .then(theme => {
        console.log(theme)
    })