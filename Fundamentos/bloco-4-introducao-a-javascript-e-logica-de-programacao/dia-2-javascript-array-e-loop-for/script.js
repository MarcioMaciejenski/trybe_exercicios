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