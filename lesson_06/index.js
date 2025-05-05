
const body = document.body;
const btn = document.createElement('button')
btn.innerText = 'JS button'
body.appendChild(btn);
const btnLoad = document.getElementById('load-authors')
btnLoad.addEventListener('click', loadUsers)
async function loadUsers() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    const ulUsers = document.createElement('ul')
    users.forEach(element => {
        const li = document.createElement('li')
        li.innerText = element.name
        ulUsers.appendChild(li)
    });
    body.appendChild(ulUsers)
}
const input = document.createElement('input')
body.appendChild(input)
input.placeholder = 'your text'
input.addEventListener('keydown', (e) => {
    console.log(e.target.value);
    
})
