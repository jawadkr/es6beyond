const asset = {
    location: [32.7122222, -103.1405556],
};

const {
    location: coordinate
} = asset

const [altitude, longitude] = coordinate

//another shorter method 
const {
    location: [altitude2, magnitude2]
} = asset
console.log(altitude2)
console.log(magnitude2)