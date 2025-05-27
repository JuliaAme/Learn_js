/* eslint-disable no-return-await */
/* eslint-disable no-await-in-loop */
// Импортируем модуль Interface
const Interface = require('./src/Interface');
const fs = require('fs').promises;
const { EOL } = require('os');
// console.log(Interface.getExcuse()); //[{id: , exc: , cat: }]
// console.log(Interface.getJoke()); // {..., value: }
// console.log(Interface.isEven(2)); // {ad: , isEven: true} 

async function excuseFunc() {
    const [exc] = await Interface.getExcuse()
    return exc;
}
async function isEvenFunc() {
    const { id } = await excuseFunc()
    return await Interface.isEven(id)
    // console.log(result);
    
}
// isEvenFunc().then(console.log)


async function getJokeFunc() {
    const {adv} = await isEvenFunc()
    const lastNum = +adv.slice(-1)
    const num = Number.isNaN(lastNum) ? 1 : lastNum
    const jokes = []
    for (let i = 0; i < num; i++) {
        const element = (await Interface.getJoke()).value;
        jokes.push(element)
    }
    return jokes
}
// getJokeFunc()

async function fileToGranny() {
    const path = 'toGranny.txt'
    const {exc} = await excuseFunc()
    const {adv} = await isEvenFunc()
    const jokes = (await getJokeFunc()).join(EOL)
    fs.writeFile(path, `excuse: ${exc + EOL}`)
    fs.appendFile(path, `ad: ${adv + EOL}`)
    fs.appendFile(path, `jokes: ${jokes}`)
}
// fileToGranny()

async function spam(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = {}
        arr[i].excuse = Interface.getExcuse().then(exc => exc[0].excuse)
        arr[i].joke = Interface.getJoke().then(joke => joke.value)
    }
    console.log(arr);
    
    const newArr = await Promise.all(arr)
    console.log(newArr);
    
}
spam(4)