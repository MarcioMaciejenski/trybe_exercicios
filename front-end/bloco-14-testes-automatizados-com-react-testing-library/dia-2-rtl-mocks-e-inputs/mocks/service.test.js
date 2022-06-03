const services = require('./src/service');

describe('Testes da função "randomNumber"', () => {
  it('Se a função foi chamada, quantas vezes e seu retorno', () => {
    services.randomNumber = jest.fn().mockReturnValue(10);

    expect(services.randomNumber()).toBe(10);
    expect(services.randomNumber).toHaveBeenCalled();
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
  });
  it('Função recebe dois parâmetros e retorna a divisão do primeiro pelo segundo', () => {
    services.randomNumber = jest.fn().mockImplementation((a,b) => a/b);
    services.randomNumber(10,2);

    expect(services.randomNumber).toHaveBeenCalled(); // testa se a função foi chamada.
    expect(services.randomNumber).toHaveBeenCalledWith(10,2);// se foi chamada com esses argumentos.
    expect(services.randomNumber(10,2)).toBe(5);// testa o retorno da função com esses argumentos.
    expect(services.randomNumber).toHaveBeenCalledTimes(2);// quantas vezes foi chamada.
  });
  it('Verifica se função recebe 3 parâmetros, e retorna a multiplicação deles', () => {
    services.randomNumber = jest.fn().mockImplementation((a,b,c) => a * b * c);
    services.randomNumber(2,4,3);

    expect(services.randomNumber(2,4,3)).toBe(24);
    expect(services.randomNumber).toHaveBeenCalled();
    expect(services.randomNumber).toHaveBeenCalledTimes(2);
    expect(services.randomNumber).toHaveBeenCalledWith(2,4,3);
  });
  it('Verfica se a função recebendo um parâmetro retorna seu dobro', () => {
    services.randomNumber.mockReset();
    services.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(services.randomNumber(3)).toBe(6);
    expect(services.randomNumber).toHaveBeenCalledWith(3);
    expect(services.randomNumber).toHaveBeenCalledTimes(1);
  });
})