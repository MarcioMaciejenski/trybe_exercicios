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
const confereSorteio = ( numeroApostado, numeroAleatorio) => {
  return numeroApostado === numeroAleatorio;
}
const resultadoSorteio = (numeroApostado, callback) => {
  let numeroAleatorio = Math.floor((Math.random()* 5) + 1 );
  
  if(callback(numeroApostado, numeroAleatorio)) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
}

console.log(resultadoSorteio(2, confereSorteio));