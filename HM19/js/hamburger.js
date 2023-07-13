class Hamburger {

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_BIG = { price: 100, calories: 40 };

    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };

    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SPICE = { price: 15, calories: 0 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const sizePrice = this.size.price;
        const stuffingPrice = this.stuffing.price;
        const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return sizePrice + stuffingPrice + toppingsPrice;
    }

    calculateCalories() {
        const sizeCalories = this.size.calories;
        const stuffingCalories = this.stuffing.calories;
        const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return sizeCalories + stuffingCalories + toppingsCalories;
    }
}

export default Hamburger;