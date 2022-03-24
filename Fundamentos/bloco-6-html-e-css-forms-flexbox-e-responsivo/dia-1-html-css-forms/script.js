// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() 
const enviar = document.querySelector('#botao');

enviar.addEventListener('click', function(event) {
    event.preventDefault();
});