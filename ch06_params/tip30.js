const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    location: [32.7122222, -103.1405556],
};

function setRegion({
    location,
    ...details
}) {
    const {
        city,
        state
    } = determineCityAndState(location);
    return {
        city,
        state: state.abbreviation,
        ...details, // spread operator 
    };
}

//output of determineCityAndState -> based on coordinate 

const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
        name: 'New Mexico',
        abbreviation: 'NM',
    },
};