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
 console.log(deleteById(users, 4));
 