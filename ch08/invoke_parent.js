import Coupon from './1'

class FlashCoupon extends Coupon {
    constructor(price, expiraiton) {
        super(price);
        this.expiration = expiration || 'two hours';
    }

    getExpirationMessage() {
        return `This flash offer is going to expire in ${this.expiration}`;
    }

    isRewardsEligible(user) {
        super.isRewardsEligible(user) && this.price > 20;
    }

    getRewards(user) {
        if (this.isRewardsEligible(user)) {
            this.price = price * 0.8;
        }
    }

}

export {
    FlashCoupon
}