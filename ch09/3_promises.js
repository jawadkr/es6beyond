function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk',
        });
    });
    return preferences;
}

getUserPreferences()
    .then(preferences => {
        console.log(preferences.theme);
    });


function failUserPreference() {
    const finder = new Promise((resolve, reject) => {
        reject({
            type: 'Access Denied',
        });
    });
    return finder;
}

failUserPreference()
    .then(preference => {
        console.log(preference.theme);
    })
    .catch(error => {
        console.error(`Fail: ${error.type}`);
    })