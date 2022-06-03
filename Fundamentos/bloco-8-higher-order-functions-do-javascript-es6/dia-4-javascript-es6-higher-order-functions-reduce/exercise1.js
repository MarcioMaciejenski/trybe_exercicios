// Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((acc, itens) => acc.concat(itens), []);
//O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
console.log(flatten);

