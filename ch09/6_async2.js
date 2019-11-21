// , you can assign each return statement to a variable before passing the variable to the next function

// async is bascially a wrapper around promises 

// await pause the function until the value is back? pause? putting in callback-loop?
// await keyword to pause the function until a value is returned.
function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk',
        });
    });
    return preferences;
}

function getMusic(theme) {
    if (theme === 'dusk') {
        return Promise.resolve({
            album: 'music for flights',
        });
    }
    return Promise.resolve({
        album: 'kind of love',
    });
}

function getArtist(album) {
    return Promise.resolve({
        artist: 'Brian Ero',
    });
}

function failMusic(theme) {
    return Promise.reject({
        type: 'Network error'
    });
}
// transform  chained promises into a series of function calls in a single wrapping function.
//call a series of asynchronous functions passing the data from the previous function as an argument to the next.
async function getArtistPreference() {
    //assign the resolved promise to a new variable.
    const {
        theme
    } = await getUserPreferences();

    const {
        album
    } = await getMusic(theme);

    const {
        artist
    } = await getArtist(album);
    return artist;
}

getArtistPreference()
    .then(artist => console.log(artist))
    .catch(e => {
        console.error(e);
    });