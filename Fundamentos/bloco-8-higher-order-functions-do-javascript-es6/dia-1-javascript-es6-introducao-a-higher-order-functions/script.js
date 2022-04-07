// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods 
// Exercício 1.

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