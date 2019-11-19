class Coupon {
    // constructor function without the functin keyword 
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || 'two weeks';
    }

    getPriceText() {
        console.log(this.price)
    }

    getExpiration() {
        console.log(this.expiration);
    }
}

const uniqoloCoupan = new Coupon(5);
uniqoloCoupan.getExpiration()
uniqoloCoupan.getPriceText()