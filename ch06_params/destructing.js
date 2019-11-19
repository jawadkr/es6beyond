function displayPhoto({
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...other
}) {
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" /> <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude} </div>
    <div>Longitude: ${longitude} </div>
    <div>${additional.join(' <br/> ')}</div> `);
}