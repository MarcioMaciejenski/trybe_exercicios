// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods 
// Exercício 1.1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
// uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada 
// pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa 
// funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (dadosEmployee) => {
  const employees = {
    id1: dadosEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dadosEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dadosEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const dadosEmployee = (nomeCompleto) => {
  let emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
  return {
    nome: nomeCompleto,
    email: emailFormatado
  }
}

console.log(newEmployees(dadosEmployee));

// Exercício 2 Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número 
// aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o 
// número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string 
// (Ex: "Tente novamente" ou "Parabéns você ganhou").
const confereSorteio = (numeroApostado, numeroAleatorio) => {
  return numeroApostado === numeroAleatorio;
}
const resultadoSorteio = (numeroApostado, callback) => {
  let numeroAleatorio = Math.floor((Math.random() * 5) + 1);

  if (callback(numeroApostado, numeroAleatorio)) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
}

console.log(resultadoSorteio(2, confereSorteio));

// Exercicio 3 Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas 
// (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
// e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final
// recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e 
// quando não houver resposta ("N.A") não altera-se a contagem.

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeRespostas = (gabarito1, respostasEstudante1) => {
  if (gabarito1 === respostasEstudante1) {
    return 1;
  } else if (gabarito1 === 'N.A') {
    return 0
  }
  return -0.5;
};

const contaRespostasCertas = (gabarito1, respostasEstudante1, callback) => {
  let nota = 0;
  for (let index = 0; index < gabarito1.length; index += 1) {
    const retornanota = callback(gabarito1[index], respostasEstudante1[index]);
    nota += retornanota;
  }
  return `A nota final foi de: ${nota}.`;
};

console.log(contaRespostasCertas(gabarito, respostasEstudante, corrigeRespostas));