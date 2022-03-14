//exercicio 1- imprimir mensagem de boas vindas.
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Seja bem-vinda', info.personagem + '.');
console.log('----------------------------------');
//exercicio 2 - inserir nova propriedade no objeto.

info.recorrente = 'sim';

console.log(info);
console.log('----------------------------------');
// exercicio 3 - for/in  mostra todas as chaves do objeto.

for (let key in info) {
    console.log(key);
}
console.log('----------------------------------');

//exercicio 4 - for/in mostra valores das chaves do objeto
for (let key1 in info) {
    console.log(info[key1]);
}
console.log('----------------------------------');

//exercicio 5 - criar novo objeto e imprimir valores correspondente dos dois.
let newInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}

for (let key2 in info, newInfo) {
    console.log(info[key2], 'e', newInfo[key2]);
}
console.log('----------------------------------');

//exercicio 6 - acessar chaves e montar um texto
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        }
    ],
};

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama "', leitor.livrosFavoritos[0].titulo + '".');

console.log('----------------------------------');

//exercicio 7 - adicionar mais um livro favorito
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    },
);

console.log(leitor);
console.log('----------------------------------');

//exercicio 8 - acessar as chaves nomes e livrosFavoritos
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');

//FUNÇÔES
//exercicio 1 - criar função e palíndromo

function verificaPalindrome(palavra) {
    let separaPalavra = palavra.split("");//separa as letras da palavra.

    let invertePalavra = separaPalavra.reverse();//inverte a ordem das letras

    let unePalavraInvertida = invertePalavra.join('');//une as letras, usar ('') para tirar a vírgula da separação

    if (unePalavraInvertida === palavra) {
        return 'true'
    }
    return 'false'
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
console.log('----------------------------------');

//exercicio 2 - retornar o indice de maior valor do array 

let numerosInteiros = [22, 30, 6, 7, 10, 12];
let comparar = 0;

function maiorIndice(numeros) {
    for (let index = 0; index <= numerosInteiros.length; index += 1) {
        if (comparar < numerosInteiros[index]) {
            comparar = index;
        }
    }
    return comparar
}
console.log(maiorIndice(numerosInteiros));