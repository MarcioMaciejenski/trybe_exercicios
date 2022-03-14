//exercicio 1 - fatorial do número 10
let resultado = 1;
const numero = 10;

for(let index = 2; index <= numero; index += 1) {
    resultado *= index;
}

console.log('O fatorial do número 10 é:', resultado);

//exercicio 2 - inverter palavra.
let word = 'tryber';
let inverseWord = word.split("").reverse().join("");//código do site horadecodar.com.br

console.log(word , inverseWord);

//código do site horadecodar.com.br, utilizando uma função.
let string = 'javascript'

function inverterString(str) {
    let inverseString = '';
    for(let i = str.length -1; i >= 0; i -= 1){
        inverseString += str[i];
    }
    return inverseString
}

console.log(inverterString(string));

//exercicio 3 - retornar a maior e a menor palavra do array.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let cont = 0; cont < array.length; cont += 1){
  if(array[cont].length > maiorPalavra.length) {
      maiorPalavra = array[cont]
  }
}

for (let cont1 = 0; cont1 < array.length; cont1 += 1){
    if(array[cont1].length < menorPalavra.length) {
        menorPalavra = array[cont1]
    }
  }
console.log('A maior palavra é:',maiorPalavra);
console.log('A menor palavra é:',menorPalavra);

//exercicio 4 - números primos
let qtdPrimos = 0;

for(let index = 1; index <= 50; index += 1) {
    if (index 
}