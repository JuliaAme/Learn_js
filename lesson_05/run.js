//вариант 1 - then, catch
const Author = require('./Author');
const Book = require('./Book');
const Lib = require('./Lib')
const { faker } = require('@faker-js/faker');
const fs = require('fs');
// function createAuthors() {
//  return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((data) => data.json())
//     .then((arr) => arr.map((el) => new Author({ name: el.name, age: Number(faker.number.int().toString().slice(0, 2))})))
    
// }

// createAuthors().then((authors)=> authors.map((el)=>el.createDocument()))

//2
async function createAuthors() {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    const authors = data.map((el) => new Author({ name: el.name, age: Number(faker.number.int().toString().slice(0, 2)) }))
    
    return authors;
    
}


async function createBooks() {
    const authors = await createAuthors();
    // const books = authors.map((el) => new Book({ author: el.name, title: 'Book about me' }))
    // console.log(books);
   return authors.map((el)=> el.createBook(faker.book.title()))
    
}
// createBooks().then((data)=> console.log(data));


const pushkin = new Author ({name: 'Alex Pushkin', age: 30})
// console.log(pushkin.createBook('Evgeni Onegin'));




const lib1 = new Lib({store: []});
console.log(lib1.loadAllBooks());



// module.exports = createBooks()
