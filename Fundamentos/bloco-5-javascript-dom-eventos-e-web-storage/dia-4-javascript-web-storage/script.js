window.onload = function () {
    // altera background color do body
    const botao = document.querySelector('#button');
    botao.addEventListener('click', function () {
        const corPadrao = '';
        const corNova = 'green';
        if (document.body.style.backgroundColor === corNova) {
            document.body.style.backgroundColor = corPadrao;
        } else {
            document.body.style.backgroundColor = corNova;
        }

    })
    // altera cor do texto
    const texto = document.querySelector('#text');
    const corTexto = document.querySelector('#text-color');
    corTexto.addEventListener('change', function () {
        const corEscolhida = corTexto.selectedOptions[0];
        texto.style.color = corEscolhida.value;
    })

}