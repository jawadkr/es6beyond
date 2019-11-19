class Coupon {
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || 'two weeks';
    }

    getPriceText() {
        return `$ ${this.price}`;
    }

    getExpirationText() {
        return `This offer expires in ${this.expiration}.`;
    }

    isRewardsEligible(user) {
        return user.rewardsEligible && user.active;
    }
    getRewards(user) {
        if (this.isRewardsEligible(user)) {
            this.price = price * 0.9;
        }
    }
}

export default Coupon;