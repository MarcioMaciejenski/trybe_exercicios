const services = require('./src/service');

describe('Testes da função "randomNumber"', () => {
  it('Se a função foi chamada, quantas vezes e seu retorno', () => {
    services.randomNumber = jest.fn().mockReturnValue(10);

    expect(services.randomNumber()).toBe(10);
    expect(services.randomNumber).toHaveBeenCalled();
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
  });
  it('Função recebe dois parâmetros e retorna a divisão do primeiro pelo segundo', () => {
    services.randomNumber.mockImplementation((a,b) => a/b);
    services.randomNumber(10,2);

    expect(services.randomNumber).toHaveBeenCalled();
    expect(services.randomNumber).toHaveBeenCalledTimes(2);
    expect(services.randomNumber).toHaveBeenCalledWith(10,2);
    expect(services.randomNumber(10,2)).toBe(5);
  });
})