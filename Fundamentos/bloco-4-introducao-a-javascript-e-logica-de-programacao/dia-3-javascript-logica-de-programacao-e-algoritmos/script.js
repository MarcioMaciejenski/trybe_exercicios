//exercicio 1 - fatorial do número 10
let resultado = 1;

for(let index = 2; index <= 10; index += 1) {
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