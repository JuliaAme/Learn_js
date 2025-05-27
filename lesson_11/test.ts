interface Shape {
    getPerimeter(): number;
}
interface Triangle extends Shape {
    a: number;
    b: number;
    c: number;
}
interface Square extends Shape {
    side: number;
}
function printPerimeter(shape: Shape) : number {
    return shape.getPerimeter()
}
const triangle: Triangle = {
    a: 5,
    b: 5,
    c: 2,
    getPerimeter() {
        return this.a + this.b + this.c
    },
}
const square: Square = {
    side: 5,
    getPerimeter() {
        return this.side * 4
    },
}
// console.log(printPerimeter(triangle));
// console.log(printPerimeter(square));

interface Vehicle {
    speed: number;
    move(): string;
}
interface Car extends Vehicle {
    brand: string;
}
interface Bicycle extends Vehicle {
    type: string;
}
function describeVehicle(vehicle: Vehicle): string {
    return `${vehicle.move()} with speed ${vehicle.speed} km/h`
}
const car: Car = {
    brand: 'Kia',
    speed: 60,
    move() {
        return 'Car go'
    },
}
const bicycle: Bicycle = {
    type: 'trace',
    speed: 10,
    move() {
        return 'Bicycle go'
    },
}
// console.log(describeVehicle(car));
// console.log(describeVehicle(bicycle));
class Container<T> {
    private storage: T[];
    constructor(storage: T[] = []) {
        this.storage = storage
    }
    add(item: T): void {
        this.storage.push(item)
    }
    getAll(): T[] {
        return this.storage
    }
    getFirst(): T | undefined {
        if (this.storage.length > 0) {
            return this.storage[0]
        } else {
            return undefined
        }
    }
    isEmpty(): boolean {
        if (this.storage.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
const numberContainer = new Container<number>();
numberContainer.add(10);
numberContainer.add(20);
console.log(numberContainer.getAll()); 
console.log(numberContainer.getFirst()); 
console.log(numberContainer.isEmpty());