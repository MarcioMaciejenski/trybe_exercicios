let pecaXadrez = "CAVALO";

//função toLowerCase transforma a string em minuscúla sem modificar a original.
switch (pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("Rei- anda uma casa em qualquer direção.");
        break;
    case "bispo":
        console.log("Bispo- anda em diagonal.");
        break;
    case "rainha":
        console.log("Rainha- anda diagonal,horizontal, vertical.");
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};