function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
}

const coupon = Coupon(5, 'two months').
coupon.price;