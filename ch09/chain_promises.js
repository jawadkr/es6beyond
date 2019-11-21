// B e u tiful chaining promises make my code readable 

function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk',
        });
    });
    return preferences; // returns a Promise Object
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

// a Promise object of resolve type is returned that we can access it using then
getUserPreferences()
    .then(preference => {
        return getMusic(preference.theme)
    })
    .then(music => {
        console.log(music.album);
    });


// making it shorter using implicit returns 
getUserPreferences()
    .then(perf => getMusic(perf.theme))
    .then(music => console.log(music.album))