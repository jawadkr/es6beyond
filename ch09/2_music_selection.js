function getUserPreferences(callback) {
    setTimeout(() =>
        callback({
            theme: 'dusk',
        }), 500);
}

function getMusic(theme, callback) {
    setTimeout(() => {
        if (theme === 'dusk') {
            return callback({
                album: 'Roll with Love',
            });
        }
        return callback({
            album: 'Rise of love',
        });
    }, 500)
}

getUserPreferences(preference => {
    return getMusic(preference.theme, music => {
        console.log('We selected the album: ', music.album);
    });
})