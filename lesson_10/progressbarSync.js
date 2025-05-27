const fs = require('fs');
const waitSync = require('wait-sync');
// Раскомментируй только для релиза 4.
const runInteractiveConsole = require('./interactive');
runInteractiveConsole();

// Синхронная загрузка файлов

// function loadFiles() {
//     const { size: val1 } = fs.statSync('./files/small.txt')
//     const { size: val2 } = fs.statSync('./files/medium.txt')
//     const { size: val3 } = fs.statSync('./files/big.txt')
//     let sum = val1 + val2 + val3;
//     const v1 = Math.round(val1 * 100 / sum)
//     const v2 = Math.round(val2 * 100 / sum)
//     const v3 = 100 - v1 - v2;
   
//     console.log('.'.repeat(100) + '0%' + '/' + '100%');

//     waitSync(1.5);
//     console.log('|'.repeat(v1) + '.'.repeat(100 - v1) + v1 + '%' + '/' + '100%');
    

//     waitSync(1.5);
//     console.log('|'.repeat(v1 + v2) + '.'.repeat(100 - (v1 + v2)) + (v1 + v2) + '%' + '/' + '100%');

//     waitSync(1.5);
//     console.log('|'.repeat(v1 + v2 + v3) + '.'.repeat(100 - (v1 + v2 + v3)) + (v1 + v2 + v3) + '%' + '/' + '100%');

//  }

// loadFiles();



function loadFiles() {
const path = './files/'
const files = fs.readdirSync(path).reverse()
const sizes = files.map((el) => fs.statSync(`${path}${el}`).size)
const sum = sizes.reduce((el, acc) => acc += el, 0)
const percArr = sizes.map((el) => Math.round(el * 100 / sum))
// percArr[2] = 100 - (percArr[0] + percArr[1])
percArr[percArr.length - 1] = 100 - percArr.slice(0, -1).reduce((acc, el) => acc + el, 0)
console.log('.'.repeat(100) + '0%/100%');
let acc = 0;
for (let i = 0; i < percArr.length; i++) {
    waitSync(1.5);
    acc += percArr[i]
    console.log('|'.repeat(acc) + '.'.repeat(100 - acc) + acc + '%/100%');
    
}
}
loadFiles();

 
