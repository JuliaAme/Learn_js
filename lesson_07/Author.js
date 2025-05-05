
// const Book = require('./Book');
import {Book }  from './Book'
export class Author {
    constructor({name, age}) {
        this.name = name;
        this.age = age;
    }
    
    createBook(bookTitle) {
        this.createDocument(bookTitle)
        return new Book({title: bookTitle, author: this.name})
    }
}


