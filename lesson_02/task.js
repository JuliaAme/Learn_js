const users = [
    { id: 1, name: 'Max', age: 33 },
    { id: 2, name: 'Anna', age: 38 },
    { id: 3, name: 'Pavel', age: 22 },
    { id: 4, name: 'Bob', age: 27 },
    { id: 5, name: 'Max', age: 6 },
]
// users.forEach(element => {
//     element.id = element.id * 100;
    
// });

// console.log(users);
// const numbers = [1, 2, 3, 4, 5];
//  numbers.forEach((element, i, arr) => {
//     arr[i] = element * 100
//  });
//  console.log(numbers);

function deleteById(arr, id) {

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].id === id) {
    //        arr.splice (id - 1, 1)
    //    }
        
    // }
    // return arr;
    return arr.find((el)=> el.id === id)
}
//  console.log(deleteById(users, 4));
 
 // 1. Преобразовать массив чисел в их квадраты
// Задача: Из массива [1, 2, 3, 4] получить [1, 4, 9, 16].
function getSquares(arr) {
    arr.forEach((element, i, arr) => {
        arr[i] = element * element
    });
    return arr;
 }
// console.log(getSquares([1, 2, 3, 4])); // [1, 4, 9, 16]

// 2. Использование filter: выбрать только чётные числа
// Задача: Из массива [1, 2, 3, 4, 5, 6] оставить только чётные.
function getEvenNumbers(arr) {
    return arr.filter((el) => el % 2 === 0)
    
 }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 3. Использование find: найти первый элемент больше 10
// Задача: В массиве [4, 9, 11, 8] найти первое число больше 10.
function findFirstGreaterThanTen(arr) {
   return arr.find ((el) => el > 10 )
 }
// console.log(findFirstGreaterThanTen([4, 9, 11, 8])); // 11

// 4. Использование includes: проверить наличие элемента
// Задача: Проверить, есть ли в массиве [1, 2, 3] число 2.
function includesElement(arr, value) {
    if (arr.includes(value)) {
        return true;
    } return false;
 }
// console.log(includesElement([1, 2, 3], 2)); // true

// 5. Использование forEach: вывести все имена в консоль
// Задача: Вывести каждое имя из массива ["Ann", "John", "Mike"].
function logNames(arr) {
    let str = '';
    arr.forEach(element => {
        str += element + ', ';
    });
   return str.slice(0, -2)
}
// console.log(logNames(["Ann", "John", "Mike"])); // Вывод: Ann, John, Mike

// 6. Использование sort: отсортировать массив по возрастанию (мутировать исходный массив нельзя)
// Задача: Отсортировать [3, 1, 4, 2] → [1, 2, 3, 4].
function sortNumbersAsc(arr) {
    const arr2 = arr.sort((a, b) => a - b)
    return arr2;
 }
// console.log(sortNumbersAsc([3, 1, 4, 2])); // [1, 2, 3, 4]

// 7. Комбинация filter + map: возраст сотрудников
// Задача: Из массива сотрудников выбрать старше 30 и вернуть их имена.
function getEmployeeNamesOverThirty(employees) {
    const arr = employees.filter((el) => el.age > 30);
    return arr.map((el) => el.name)
 }
// console.log(getEmployeeNamesOverThirty([
//     { name: "Anna", age: 28 },
//     { name: "Bob", age: 35 },
//     { name: "Carl", age: 40 }
// ])); // ["Bob", "Carl"]

// 8. Использование find: найти пользователя по email
// Задача: Найти объект пользователя с email "bob@example.com".
function findUserByEmail(users, email) {
    return users.find((el) => el.email === email)
 }
// console.log(findUserByEmail([
//     { name: "Alice", email: "alice@example.com" },
//     { name: "Bob", email: "bob@example.com" }
// ], "bob@example.com")); // { name: "Bob", email: "bob@example.com" }

// 9. Использование map: получить длину каждого слова
// Задача: Из массива ["apple", "banana", "kiwi"] получить [5, 6, 4].
function getWordLengths(words) {
   return words.map((el) => el.length)
 }
// console.log(getWordLengths(["apple", "banana", "kiwi"])); // [5, 6, 4]

// 10. Использование includes + filter: выбрать избранные товары
// Задача: Выбрать товары из списка, которые есть в избранном.
function getFavoriteProducts(products, favorites) {
    return products.filter((el) => favorites.includes(el))
 }
// console.log(getFavoriteProducts(
//     ["laptop", "mouse", "keyboard", "monitor"],
//     ["mouse", "monitor"]
// )); // ["mouse", "monitor"]



