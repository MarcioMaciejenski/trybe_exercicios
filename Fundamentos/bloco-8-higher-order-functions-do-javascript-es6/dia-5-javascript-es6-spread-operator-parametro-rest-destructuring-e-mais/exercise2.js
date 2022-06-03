// - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

function sum(...numbers) {
  const total = numbers.reduce((soma, valor) => soma + valor, 0);
  return `A soma dos valores é: ${total}`;
}

console.log(sum(1, 3, 4, 6, 7));