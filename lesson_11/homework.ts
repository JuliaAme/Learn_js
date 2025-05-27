// Задача 1: Типизация функции с объектами
// Условие: Создайте интерфейс User с полями id(число), name(строка) и email(строка). 
// Напишите функцию getUserInfo, которая принимает объект типа User и возвращает 
// строку в формате: "User [name] has email [email]".
interface IUser {
    id: number;
    name: string;
    email: string;
} 
function getUserInfo(obj: IUser): string {
    return `User ${obj.name} has email ${obj.email}`
}
// console.log(getUserInfo({id: 1, name: 'Bob', email: 'bob@bob.ru' }));

// Задача 2: Дженерик функция
// Условие: Напишите дженерик функцию reverseArray,
// которая принимает массив элементов любого типа и возвращает новый массив с элементами в обратном порядке.
// Убедитесь, что тип элементов сохраняется.

function reverseArray <T>(arr: T[]): T[] {
    return [...arr].reverse()
}
// console.log(reverseArray([1, 2, 3, 4]));

// Задача 3: Интерфейс с дженериком
// Условие: Создайте интерфейс Response с дженериком, который представляет ответ API. 
// Интерфейс должен содержать поля:

// data (тип определяется дженериком)
// status (число)
// message (строка, необязательное поле)

// Напишите функцию handleResponse, которая принимает такой объект и 
// выводит в консоль сообщение в зависимости от статуса.

interface IResponse<T> {
    data: T;
    status: number;
    message?: string;
}
function handleResponse<T>(obj: IResponse<T>) : string {
    if (obj.status === 200) {
       return obj.message ? obj.message : 'OK';
    } else {
        return 'Error';
   }
}
// console.log(handleResponse({ data: '///',  status: 200}));

// Задача 4: Расширение интерфейсов
// Условие: Создайте базовый интерфейс Shape с методом area() 
// который возвращает число.Затем создайте интерфейсы Circle и Rectangle,
// которые расширяют Shape и добавляют необходимые свойства.Напишите функцию calculateArea,
// которая принимает Shape и возвращает площадь фигуры.

interface IShape {
    area(): number;
} 
interface ICircle extends IShape {
    radius: number;
}
interface IRectangle extends IShape {
    lenght: number;
    width: number;
}
function calculateArea(obj : IShape) : number {
    return obj.area()
}
const circle: ICircle = {
    radius: 5,
    area() {
        return 3.14 * this.radius * this.radius
    }
}
const rectangle: IRectangle = {
    lenght: 5,
    width: 2,
    area() {
        return this.lenght * this.width
    }
}
// console.log(calculateArea(circle));
// console.log(calculateArea(rectangle));


