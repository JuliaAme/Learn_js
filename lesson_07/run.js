import { Book } from './Book.js';
import { Lib } from './Lib.js';
const body = document.body;
const container = document.createElement('div');
body.appendChild(container)
container.style.display = 'flex';
// body.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'start';
container.style.gap = '20px';
const addBtn = document.getElementById('addBtn')
const libInp = document.getElementById('library')

addBtn.addEventListener('click', (e) => {
    let newLib = document.createElement('div');
    const addBookBtn = document.createElement('button');
    const libName = document.createElement('h2');
    const libLength = document.createElement('p');
    const booksList = document.createElement('ul');
    const l = new Lib({ name: libInp.value })
    addBookBtn.textContent = 'Add new book';
    libName.textContent = `${l.name} `;
    libLength.textContent = `kolichestvo ${l.store.length}`
  newLib.style.width = '200px';
  newLib.style.minHeight = '300px';
  newLib.style.backgroundColor = 'lightblue';
  newLib.style.display = 'flex';
  newLib.style.flexDirection = 'column';
//   newLib.style.justifyContent = 'space-between'
  newLib.appendChild(libName);
  newLib.appendChild(libLength);
  newLib.appendChild(addBookBtn);
  newLib.appendChild(booksList);
  container.appendChild(newLib);
  
    addBookBtn.addEventListener('click', loadBook)
    async function loadBook() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    const booksTitles = ['Captain', 'More', 'Rain', 'Mountain', 'Forest', 'Grey', 'Bamboo', 'Electric', 'Sun']
    const book = new Book({title: booksTitles[Math.floor(Math.random() * booksTitles.length)], author: (users[Math.floor(Math.random() * users.length)]).name})
    l.addBook(book)
    libLength.textContent = `kolichestvo ${l.store.length}`
    const bookLi = document.createElement('li')
    bookLi.textContent = `${book.title} - ${book.author}`
    booksList.appendChild(bookLi)
    }
    
})
