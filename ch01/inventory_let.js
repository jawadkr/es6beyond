const item = {
    inventory: 0,
    price: 3,
    salePrice: 0,
    saleInventory: 0,
};

const item = {
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 1,
};

// bug will be created under this situation 
const item = {
    inventory: 3,
    price: 3,
    salePrice: 2,
    saleInventory: 0,
};

function getLowestPrice(item) {
    var count = item.inventory;
    var price = item.price

    if (item.salePrice) {
        var count = item.saleInventory; // problem: inventory exists
        if (count > 0) {
            price = item.salePrice
        }
    }

    if (count) { // we will never get price and it returns zero 
        return price;
    }

    return 0;
}

//resolving the problem of var when saleInventory is 0 and inventory exists but it 
// returns 0 

function getLowestPrice(item) {
    let count = item.inventory;
    let price = item.inventory;

    if (item.salePrice) {
        let count = item.saleInventory;
        if (count > 0) {
            price = item.salePrice;
        }
    }

    if (count) {
        return price;
    }

    return 0;
}

// we can use cont for variables that will not change 

function getLowestPrice(item) {
    const count = item.inventory;
    let price = item.price

    if (item.salePrice) {
        const saleCount = item.saleInventory;
        // changing price is dependent on the existence of items in the sales-inventory
        if (saleCount > 0) {
            price = item.salePrice;
        }
    }

    if (count) {
        return price;
    }

    return 0;
}