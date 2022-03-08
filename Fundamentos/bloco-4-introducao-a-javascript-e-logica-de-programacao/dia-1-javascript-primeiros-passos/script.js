//exercício 6
let pecaXadrez = "CAVALO";

//função toLowerCase transforma a string em minuscúla sem modificar a original.
switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log("Rei- anda uma casa em qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo- anda em diagonal.");
    break;
  case "rainha":
    console.log("Rainha- anda diagonal,horizontal, vertical.");
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//exercício 7
let nota = 110;

if (nota < 0 || nota > 100) {
  console.log("Erro,nota inválida.");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//exercicio 8
const number1 = 14;
const number2 = 15;
const number3 = 17;

let isEven = false;

if ((number1 % 2 === 0) || (number2 % 2 === 0) || (number3 % 2 === 0)) {
  isEven = true;
}
console.log(isEven);

//exercicio 9
const number_1 = 15;
const number_2 = 12;
const number_3 = 19;

let isOdd = false;

if ((number_1 % 2 !== 0) || (number_2 % 2 !== 0) || (number_3 % 2 !== 0)) {
  isOdd = true;
}
console.log(isOdd);

//exercicio 10
const custProduto = 100;
const valorVenda = 160;
const impostoSobreCusto = 0.20;

if (custProduto < 0 || valorVenda < 0) {
  console.log('O programa será encerrado, valores inválidos.');
} else {
  let valorCustoTotal = custProduto + (custProduto * impostoSobreCusto);
  let lucro = valorVenda - valorCustoTotal;

  console.log('O produto teve um lucro de R$', lucro);
}
