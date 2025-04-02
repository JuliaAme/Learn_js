

class Notebook {
    static getName () {
        return 'This is static method of Notebook class'
    }
    
}
// console.log(Notebook.getName());

const c = 3;
class Employee {
    constructor(a, b) {
        this.name = c;
        this.age = b;
    }
    getName() {
        return this.name
    }
}
// console.log(new Employee('Igor', 15));

class Converted {
    static convert = (arr) => arr.join('')
    static square = (arr) => arr.map((el) => el * el )
}
// console.log(Number(Converted.convert([5, 5, 5])));
// console.log(Converted.square([5, 5, 5]));

class Cat {
    constructor(nickname, age, breed) {
        this.name = nickname;
        this.age = age;
        this.breed = breed;
    }
    getOptions() {
        return `${this.name}, ${this.age} ${this.breed}`;
    }
}
const first = new Cat('Bob', 5, 'black');
console.log(first.getOptions());
