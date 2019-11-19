const discounter = discount => {
    return price => {
        return price * (1 - discount)
    };
};

const fivePercent = discounter(0.05);
const tenPercent = discounter(0.1);
console.log(fivePercent(100));
console.log(tenPercent(100));

// shorter 
const diskount = diskount => price => price * (1 - diskount);
let twentyDiskount = diskount(0.2);
console.log(twentyDiskount(100));