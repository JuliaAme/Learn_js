// 1. Класс Product с учётом скидки
// Задание: Создай класс Product, принимающий name, price, discount.Добавь метод getFinalPrice(), который возвращает цену с учётом скидки.

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getFinalPrice() {
        return this.price - this.discount * this.price / 100
    }
}

const milk = new Product('Milk', 100, 10); // 10% скидка
// console.log(milk.getFinalPrice()); // 90

// 2. Класс User с методом isTeenager
// Задание: Создай класс User с полями name, age. Добавь метод isTeenager(), который возвращает true, если возраст от 13 до 19.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isTeenager() {
        return this.age >= 13 && this.age <= 19 ? true : false
    }
    static compareByNameLength(u1, u2) {
        return u1.name.length - u2.name.length
    }
}
const user = new User('Alex', 15);
// console.log(user.isTeenager()); // true

// 3. Статический метод User.compareByNameLength
// Задание: Добавь в User статический метод compareByNameLength(u1, u2) для сортировки по длине имени.

const users = [
    new User('Masha', 22),
    new User('Alexandra', 30),
    new User('Tom', 18)
];

// console.log(users.sort(User.compareByNameLength));

// 4. Класс Invoice с налогом
// Задание: Создай класс Invoice с массивом товаров { name, price, qty }. Метод getTotal(taxRate) должен возвращать итог с налогом.
class Invoice {
    constructor(arr) {
        this.arr = arr;
    }
    // getTotal(taxRate) {
    //     let summ = 0;
    //     this.arr.forEach(element => {
    //     summ += element.price * element.qty
    //     });
    //     return summ + summ * taxRate / 100;
    // }
    getTotal(taxRate) {
        const summ = this.arr.reduce((acc, cv) => acc + cv.price * cv.qty, 0)
        return summ + summ * taxRate / 100
    }
}
const invoice = new Invoice([
    { name: 'Pen', price: 10, qty: 2 },
    { name: 'Notebook', price: 50, qty: 1 }
]);

// console.log(invoice.getTotal(10)); // Сумма всех товаров + 10% налог

// 5. Класс Calculator с историей операций
// Задание: Создай класс Calculator, который выполняет базовые операции (add, subtract, multiply, divide) и сохраняет каждую операцию в историю. Добавь метод history() для просмотра всех операций.
class Calculator {
    constructor(arr = []) {
        this.arr = arr;
    }
    add(num) {
        this.arr.push(`+${num}`);    
        return `+${num}`;
    }
    multiply(num) {
        this.arr.push(`*${num}`); 
        return `*${num}`
    }
    subtract(num) {
        this.arr.push(`-${num}`); 
        return `-${num}`
    }
    history() {
        return this.arr;
    }
}
const calc = new Calculator();
calc.add(10);
calc.multiply(2);
calc.subtract(5);
// console.log(calc.history()); // ["+10", "*2", "-5"]





