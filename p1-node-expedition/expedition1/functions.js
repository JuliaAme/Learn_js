const fs = require('fs');
const {EOL} = require('os')
const crew = fs.readFileSync('./src/crew.txt', 'utf-8').split(EOL);
const equipment = fs.readFileSync('./src/equipment.txt', 'utf-8').split(EOL).map(el => el.trim());
const rockets = fs.readFileSync('./src/rockets.txt', 'utf-8').split(EOL).map(el => el.trim());

const crewArrObj = [];
for (let index = 1; index < crew.length; index++) {
  const arrStr = crew[index].split(',');
  const candidat = {};
  for (let j = 0; j < arrStr.length; j++) {
    const keys = ['name', 'gender', 'prof', 'exp'];
    
    
    if (keys[j] === 'exp') {
    candidat[keys[j]] = +arrStr[j]
    } else {
    candidat[keys[j]] = arrStr[j].trim()
    }
    
    
  }
  crewArrObj.push(candidat);
}



function getRightCaptain() {
  const sorted = crewArrObj.sort((a, b) => a.exp - b.exp)
  const obj = sorted[sorted.length - 1];
  return `${obj.name}, ${obj.gender}, ${obj.prof}, ${obj.exp}`
  
}

function getRightDoc() {
  const filtered = crewArrObj.filter(el => el.gender === 'ж' && el.prof === 'Врач')
  return `${filtered[1].name}, ${filtered[1].gender}, ${filtered[1].prof}, ${filtered[1].exp}`
  
}

function getAllEngineer() {
  const filtered = crewArrObj.filter(el => el.prof === 'Бортмеханик')
  return filtered.map(el => `${el.name}, ${el.gender}, ${el.prof}, ${el.exp}`)
}

function getAllRover() {
  return equipment.filter(el => el.includes('марсоход'))
}


function getRightRovers() {
  const arrEquip = equipment.map(el => el.split(',').map(e => e.trim()))
  const s = arrEquip.filter(el => el.includes('марсоход') && +el[2] > 3)
  return s.map(el => el.join(', '));
  
}

function getRightRocket() {
  const arrRockets = rockets.map(el => el.split(',').map(e => e.trim()))
  const sorted = arrRockets.sort((a, b) => +a[2] - +b[2])
  const x = sorted[sorted.length - 1];
  // return sorted[sorted.length - 1][2]
  // console.log(x);
  return x
  

  
  
}
// getRightRocket()

module.exports = {
  getRightCaptain,
  getRightDoc,
  getAllEngineer,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
