const readLine = require('readline-sync');

// const weight = 95;
// const height = 2;

function calcIMC() {
  const weight = readLine.questionFloat(`What' your weight? `);
  const height = readLine.questionFloat(`What' your height? `)
  const result = weight / (height * height);

    if(result < 18.5) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Abaixo do peso(magreza).`);
    } else if (result >= 18.5 && result <= 24.9) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Peso Normal.`);
    } else if(result >= 25 && result <= 29.9) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Acima do peso(sobrepeso).`);
    } else if(result >= 30 && result <= 34.9) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Obesidade grau I.`);
    } else if(result >= 35 && result <= 39.9) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Obesidade grau II.`);
    } else if (result >= 40) {
      console.log(`O IMC do peso: ${weight}kg e altura: ${height}m é: ${result.toFixed(2)}. Obesidade graus III e IV.`);
    } else {
      console.log(`Error ao calcular IMC. Tente novamente.`);
    }
}

console.log(calcIMC());