const sum = require('./sum');

describe('Função sum', () => {
  test('A soma de 4 e 5 dever ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('A soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('A função deve retornar um erro quando os parâmetros forem 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  test('A função deve retornar um erro quando os parâmetros forem 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});