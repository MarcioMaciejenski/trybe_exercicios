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

window.onload = function () { // Chama as funções depois do carregamento da página.
  const botaoEnviar = document.querySelector('#botao');
  botaoEnviar.addEventListener('click', botaoEnviar);
  const botaoLimpar = document.querySelector('#limpar');
  botaoLimpar.addEventListener('click', limpar);
};
