// function testingScope(escopo) { //Exercício 1
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   const testingScope = (escopo) => {
//       if(escopo === true) {
//           let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//           ifScope = (`${ifScope}! ótimo,fui utilizada no escopo !`);
//           console.log(ifScope);
//       }else {
//           let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//           console.log(`${elseScope}`);
//       }
//       console.log(`${ifScope}! o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }
//   testingScope(true);

//Usando operador ternário
let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
const testingScope = (escopo) => escopo ? `${ifScope}! ótimo,fui utilizada no escopo !` : `${elseScope}`;

console.log(testingScope(true));
  //Exercício 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => a - b);

  console.log(`Array em ordem crescente ${oddsAndEvens} .`); // será necessário alterar essa linha 😉