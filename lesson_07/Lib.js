import { Book } from './Book.js';
export class Lib {
    constructor({store = [], name}) {
        this.store = store;
        this.name = name;
    }
    addBook(book) {
    this.store.push(book)
    return this.store
}    
}

