class Product {
    constructor({ title: name, a: price, b: discount }) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getFinalPrice() {
        return this.price - this.discount * this.price / 100
    }
}

// const milk = new Product(['Milk', 100, 10]); // 10% скидка
const milk2 = new Product({ title: 'Milk', a: 100, b: 10}); // 10% скидка
console.log(milk2.getFinalPrice()); // 90
