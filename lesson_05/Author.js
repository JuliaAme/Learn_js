const fs = require('fs');
const Book = require('./Book');
class Author {
    constructor({name, age}) {
        this.name = name;
        this.age = age;
    }
    createDocument(bookTitle, content = 'About me') {
        fs.writeFileSync(`./books/${bookTitle}_${this.name}.txt`, `${content}`)
    }
    createBook(bookTitle) {
        this.createDocument(bookTitle)
        return new Book({title: bookTitle, author: this.name})
    }
}


module.exports = Author;