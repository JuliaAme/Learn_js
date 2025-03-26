const str = 'julia'

function reverseStr(param) {
  return param.split('').reverse().join('')  
}
// console.log(reverseStr(str));

// Задача 1: Напиши функцию, которая принимает строку и возвращает количество гласных букв (a, e, i, o, u) в ней.

function countVowels(str) {
    let arr = str.split('');
    let arrVowels = ['a', 'e', 'o', 'u', 'i', 'y'];
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arrVowels.length; j++) {
            if (arr[i] === arrVowels[j]) {
                summ += 1;
            }
        }
    }
    return summ;
 }
// console.log(countVowels("Hello World")); // 3 (e, o, o)

// Задача 2: Напиши функцию, которая проверяет, является ли строка палиндромом (читается одинаково с начала и с конца, например, "мадам")

function isPalindrome(str) { 
    let reversedStr = str.split('').reverse().join('').toLowerCase().replace(/\s+/g, '');
    if (reversedStr === str.toLowerCase().replace(/\s+/g, '')) {
        return true;
    } return false;
}
// console.log(isPalindrome("А роза упала на лапу Азора")); // true


// Задача 3: Напиши функцию, которая принимает строку и возвращает длину самого длинного слова в ней.

function findLongestWord(str) {
    let arr = str.split(' ');
    let long = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > long) {
            long = arr[i].length
        }
    }
    return long;
 }
// console.log(findLongestWord("JavaScript is awesome")); // 10 ("JavaScript")

// Задача 4: Напиши функцию, которая принимает строку с именем и фамилией (разделены пробелом) и возвращает форматированную строку в виде "Фамилия, И." (первая буква имени + точка).

function formatName(fullName) {
    let arr = fullName.split(' ').reverse()
    arr[1] = arr[1].charAt(0) + '.'
    return arr.join(', ')
 }
// console.log(formatName('Иван Петров')); // → 'Петров, И.'

// Задача 5: Напиши функцию, которая генерирует случайную строку заданной длины из букв и цифр.

function generateRandomString(length) {
    let random = 'X3fG9pLmaB5kQ9rT2yZ1'
    let str = '';
    while (str.length < length) {
        str += random[Math.floor(Math.random() * random.length)]
    }
    return str;
 }
console.log(generateRandomString(8)); // Например: "X3fG9pLm"
console.log(generateRandomString(12)); // Например: "aB5kQ9rT2yZ1"