//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//exercicio 2 - somar os valores do array e imprimir o resultado
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;

for(let index1 = 0; index1 < numbers1.length; index1 += 1) {
    somaArray += numbers1[index1];
}

console.log("O resultado da soma do conteúdo do array é:", somaArray); 

//exercicio 3 - calcule e imprima a média aritmética dos valores contidos no array.
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSoma = 0;
let qntdIndice = 0;
let mediaAritmetica = 0;

for(let index2 = 0; index2 < numbers3.length; index2 += 1) {
    resultSoma += numbers3[index2];
    qntdIndice += 1;
}

mediaAritmetica = resultSoma / qntdIndice;

console.log('A média aritmética do array é: ', mediaAritmetica);

//exercicio 3 - gabarito course.
let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < num.length; index += 1) {
  sum += num[index];
}

let average = sum / num.length;

console.log(average);

//exercicio 4 - verifica se médaia aritmética é maior ou menor do que 20.
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSoma1 = 0;
let qntdIndice1 = 0;
let mediaAritmetica1 = 0;

for(let index2 = 0; index2 < numbers3.length; index2 += 1) {
    resultSoma1 += numbers3[index2];
    qntdIndice1 += 1;
}

mediaAritmetica1 = resultSoma1 / qntdIndice1;

if(mediaAritmetica1 > 20) {
    console.log('A média aritmética é maior do que 20. Média:', mediaAritmetica1);
}else{
    console.log('A média aritmética é menor do que 20. Média:', mediaAritmetica1);
}

