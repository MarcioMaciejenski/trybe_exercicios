//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//exercicio 2 - somar os valores do array e imprimir o resultado
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;

for (let index1 = 0; index1 < numbers1.length; index1 += 1) {
    somaArray += numbers1[index1];
}

console.log("O resultado da soma do conteúdo do array é:", somaArray);

//exercicio 3 - calcule e imprima a média aritmética dos valores contidos no array.
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSoma = 0;
let qntdIndice = 0;
let mediaAritmetica = 0;

for (let index2 = 0; index2 < numbers2.length; index2 += 1) {
    resultSoma += numbers2[index2];
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

for (let index3 = 0; index3 < numbers3.length; index3 += 1) {
    resultSoma1 += numbers3[index3];
    qntdIndice1 += 1;
}

mediaAritmetica1 = resultSoma1 / qntdIndice1;

if (mediaAritmetica1 > 20) {
    console.log('A média aritmética é maior do que 20. Média:', mediaAritmetica1);
} else {
    console.log('A média aritmética é menor do que 20. Média:', mediaAritmetica1);
}

//exercicio 5 - verificar maior número do array
let numbers4 = [5, 9, 3, 90, 70, 8, 100, 2, 35, 27];
let maior = 0;//variável que armazena o maior número.

for (let index4 = 0; index4 < numbers4.length; index4 += 1) {
    if (numbers4[index4] > maior) {//testa qual é o maior e armazena.
        maior = numbers4[index4];
    }
}

console.log('O maior número do array é:', maior);

//exercicio 6 - verificar valores impares do array.
let numbers5 = [5, 9, 3, 90, 70, 8, 100, 2, 35, 27];
let numbersImpar = 0;

for (let index5 = 0; index5 < numbers5.length; index5 += 1) {
    if (numbers5[index5] % 2 !== 0) {
        numbersImpar += 1;
    }
}

if (numbersImpar !== 0) {
    console.log('O array contém ', numbersImpar, 'números ímpares.')
} else {
    console.log('Nenhum valor ímpar encontrado.');
}

//exercicio 7 - menor valor do array
let numbers6 = [5, 9, 3, 90, 70, 8, 100, 2, 35, 27];
// o valor da variável resulMenorValor poderia ser qualquer um, desde que fosse maior que o maior número do array numbers6. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let resulMenorValor = numbers6[0];

for (let index6 = 1; index6 < numbers6.length; index6 += 1) {
    if (numbers6[index6] < resulMenorValor) {
        resulMenorValor = numbers6[index6];
    }
}

console.log('O menor valor do array é o número:', resulMenorValor);
