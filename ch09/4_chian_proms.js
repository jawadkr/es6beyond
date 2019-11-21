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

getUserPreferences()
    .then(perf => failMusic(perf.theme))
    .then(music => getArtist(music.album))
    .catch(e => {
        console.error(e)
    });