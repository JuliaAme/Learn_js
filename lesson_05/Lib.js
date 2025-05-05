const Book = require('./Book');
const fs = require('fs');
class Lib {
    constructor({store = []}) {
        this.store = store;
    }
    loadAllBooks() {
        const files = fs.readdirSync('./books')
        files.forEach((el) => {
        const [title, author] = el.slice(0, -4).split('_');
        this.store.push(new Book({title, author}))
        })
        return this.store;
    }
}

module.exports = Lib;