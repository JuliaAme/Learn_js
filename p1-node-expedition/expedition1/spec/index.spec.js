const {
  getRightRovers,
  getAllRover,
  getRightDoc,
  getRightCaptain,
  getAllEngineer,
  getRightRocket,
} = require('../functions');

describe('Экспедиция на Марс', () => {
  describe('Отбор кандидатов', () => {
    it('позволяет выбрать самого опытного капитана', () => {
      const bestCaptain = getRightCaptain();
      expect(bestCaptain).toBe('Стив Джонсон, м, Капитан, 23');
    });
    it('позволяет выбрать самого опытного врача среди женщин', () => {
      const bestDoctor = getRightDoc();
      expect(bestDoctor).toBe('Клара Томпсон, ж, Врач, 10');
    });
    it('позволяет выбрать всех бортмехаников', () => {
      const allEngineer = getAllEngineer();
      expect(allEngineer).toEqual([
        'Уильям Блейк, м, Бортмеханик, 11',
        'Джуди Лестер, ж, Бортмеханик, 16'
      ]);
    });
  });
  describe('Отбор оборудования', () => {
    it('Позволяет отобрать все марсоходы', () => {
      const allRover = getAllRover();
      expect(allRover).toEqual([
        'Исследователь-2, марсоход, 3',
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8'
      ]);
    });
    it('позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет', () => {
      const rightRovers = getRightRovers();
      expect(rightRovers).toEqual([
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8'
      ]);
    });
  });
  describe('Выбор ракеты', () => {
    it('позволяет выбрать ракету с максимальной дальностью полёта', () => {
      const rocket = getRightRocket();
      expect(rocket[2]).toBe('209456');
    });
  });
});
