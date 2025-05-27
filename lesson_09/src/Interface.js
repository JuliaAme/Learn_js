const chucknorrisData = require('./mock-data/chucknorris');
const execuseData = require('./mock-data/execuse');
const isEvenData = require('./mock-data/iseven');

// Класс для работы с данными
class Interface {
  // Метод для получения случайной шутки
  static getJoke() {
    // Получаем случайный элемент из массива chucknorrisData
    const randomItem = chucknorrisData[Math.floor(Math.random() * 10)];
    return Promise.resolve(randomItem);
  }

  // Метод для получения случайной оправдания
  static getExcuse() {
    // Получаем случайный элемент из массива execuseData
    const randomItem = execuseData[Math.floor(Math.random() * 10)];
    return Promise.resolve(randomItem);
  }

  // Метод для проверки числа на чётность
  static isEven(number) {
    // Проверяем, является ли число чётным
    const even = number % 2 === 0;
    let randomItem;
    if (even) {
      randomItem = isEvenData.filter((el) => el.iseven)[
        Math.floor(Math.random() * 5)
      ];
    } else {
      randomItem = isEvenData.filter((el) => !el.iseven)[
        Math.floor(Math.random() * 5)
      ];
    }
    return Promise.resolve(randomItem);
  }
}

module.exports = Interface;
