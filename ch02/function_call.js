function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price)
    this.category = 'Dairy Products';
}

const cheese = new Food('Danish Cheese', 4);
console.log(`Product: ${cheese.name} is in category of ${cheese.category} and has price of ${cheese.price} Euros`)