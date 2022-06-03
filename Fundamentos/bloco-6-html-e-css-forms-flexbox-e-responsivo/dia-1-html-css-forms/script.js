// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() 

const enviar = document.querySelector('#botao');

function botaoEnviar(event) {
    event.preventDefault();
}

function limpar() { // Seleciona os inputs e o textarea, depois limpa o que tiver neles.
  const dadosFormulario = document.querySelectorAll('input');
  const areaTexto = document.querySelector('textarea');
  for (let index = 0; index < dadosFormulario.length; index += 1){
      const dado = dadosFormulario[index];
      dado.value = '';
      dado.checked = false;
  }
   areaTexto.value = '';
}

function validaInputs() {
    const textoResposta = document.querySelector('#texto-resposta').value.length;
    const nome = document.querySelector('#nome').value.length;
    const email = document.querySelector('#email').value.length;
    if(textoResposta > 500 || nome < 10 || nome > 40 || email < 10 || email > 40){
        return alert('Dados inválidos');
    }else {
        return alert( 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' );
    }
}
enviar.addEventListener('click', validaInputs);

window.onload = function () { // Chama as funções depois do carregamento da página.
  const botaoEnviar = document.querySelector('#botao');
  botaoEnviar.addEventListener('click', botaoEnviar);
  const botaoLimpar = document.querySelector('#limpar');
  botaoLimpar.addEventListener('click', limpar);
};
