const fs = require('fs/promises');
// Раскомментируй только для релиза 4.
const runInteractiveConsole = require('./interactive');
runInteractiveConsole();

// Асинхронная параллельная загрузка файлов
async function loadFiles() {
const path = './files/'
const files = await (await fs.readdir(path)).reverse()
const stats = await Promise.all(files.map(el => fs.stat(`${path}${el}`)));
const sizes = stats.map(el => el.size)
const sum = sizes.reduce((el, acc) => acc += el, 0)
const percArr = sizes.map((el) => Math.round(el * 100 / sum))
    // percArr[2] = 100 - (percArr[0] + percArr[1])
    percArr[percArr.length - 1] = 100 - percArr.slice(0, -1).reduce((acc, el) => acc + el, 0)
    // console.log('.'.repeat(100) + '0%/100%');
    process.stdout.write('.'.repeat(100) + ' 0%/100%\r');
let acc = 0;
for (let i = 0; i < percArr.length; i++) {
    setTimeout(() => {
    acc += percArr[i]
        // console.log('|'.repeat(acc) + '.'.repeat(100 - acc) + acc + '%/100%');
        process.stdout.write('|'.repeat(acc) + '.'.repeat(100 - acc) + acc + '%/100%\r');
    }, 1500 * (i + 1))
    }
}
 
loadFiles();


