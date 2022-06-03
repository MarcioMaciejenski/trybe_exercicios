const services = require('./src/service');

describe('Testes da função "randomNumber"', () => {
  it('Se a função foi chamada, quantas vezes e seu retorno', () => {
    services.randomNumber = jest.fn().mockReturnValue(10);

    expect(services.randomNumber()).toBe(10);
    expect(services.randomNumber).toHaveBeenCalled();
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
  })
})