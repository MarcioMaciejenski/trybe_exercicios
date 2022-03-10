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