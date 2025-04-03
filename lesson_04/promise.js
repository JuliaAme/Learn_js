// const a1 = new Promise((res, rej) => {
//     const random = Math.floor(Math.random() * 10)
//     console.log(random);
    
//     setTimeout(() => {
//         if (random > 5) {
//             res(100)
//         } else {
//             rej(new Error('oops'))
//         }
       
//     }, 1000);
    
// })
// a1
//     .then((data) => console.log(data))
//     .catch((err)=>console.log(err))
// console.log(a1);
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> console.log(users.map((el)=> el.name)))