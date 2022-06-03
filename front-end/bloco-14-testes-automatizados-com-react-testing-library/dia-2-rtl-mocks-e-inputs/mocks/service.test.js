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
describe('Testes das funções "upperCase","firstLetter" e "concatenate"', () => {
  it('Verifica se "upperCase" retorna string em caixa baixa', () => {
    const upperCase = jest.spyOn(services, "upperCase").mockImplementation((a) => a.toLowerCase());

    expect(upperCase("MÁRCIO")).toBe("márcio");
    expect(services.upperCase).toHaveBeenCalled();
    expect(services.upperCase).toHaveBeenCalledWith("MÁRCIO");
  });
  it('Verifica se "firstLetter" recebe uma string e retorna a última letra', () => {
    const firstLetter = jest.spyOn(services, "firstLetter").mockImplementation((a) => a.charAt(a.length - 1));

    expect(firstLetter("Grêmio")).toBe("o");
    expect(services.firstLetter).toHaveBeenCalled();
    expect(services.firstLetter).toHaveBeenCalledTimes(1);
  })
  it('Verifica se "concatenate" recebe três strings e concatena elas', () => {
    const concatenate = jest.spyOn(services, "concatenate").mockImplementation((a,b,c) => a.concat(b,c));
    
    expect(concatenate("Sou ", "aluno ", "Trybe!")).toBe("Sou aluno Trybe!");
    expect(services.concatenate).toHaveBeenCalled();
    expect(services.concatenate).toHaveBeenCalledTimes(1);
  });
  it('Verifica se "upperCase" volta a retornar strings em caixa alta', () => {
    services.upperCase.mockRestore();

    expect(services.upperCase("márcio")).toBe("MÁRCIO");
  });
  describe('Testes para função que faz requisição para API "dog pictures"', () => {
    services.fetchDog = jest.fn();
    afterEach(services.fetchDog.mockReset);
    it('Verifica a requisição em caso da promise retorne válido', async () => {
      services.fetchDog.mockResolvedValue("request success");

      services.fetchDog();
      expect(services.fetchDog).toHaveBeenCalled();
      expect(services.fetchDog).toHaveBeenCalledTimes(1);
      await expect(services.fetchDog()).resolves.toBe("request success");
      expect(services.fetchDog).toHaveBeenCalledTimes(2);
    });
    it('Verifica requisição em caso da promise seja rejeitada', async () => {
      services.fetchDog.mockRejectedValue("request failed");

      expect(services.fetchDog).toHaveBeenCalledTimes(0);
      await expect(services.fetchDog()).rejects.toMatch("request failed");
      expect(services.fetchDog).toHaveBeenCalledTimes(1);
    });
  });
});