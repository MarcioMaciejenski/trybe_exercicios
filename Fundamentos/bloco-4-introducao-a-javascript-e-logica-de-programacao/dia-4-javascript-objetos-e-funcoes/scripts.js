//exercicio 1- imprimir mensagem de boas vindas.
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Seja bem-vinda', info.personagem +'.');

 //exercicio 2 - inserir nova propriedade no objeto.
 info.recorrente = 'sim';

 console.log(info);

// exercicio 3 - for/in  mostra todas as chaves do objeto.
for(let key in info){
    console.log(key);
}

//exercicio 4 - for/in mostra valores das chaves do objeto
for(let key1 in info) {
    console.log(info[key1]);
}