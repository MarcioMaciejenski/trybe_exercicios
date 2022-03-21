function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função 
//que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que 
//os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDez(days) {
  const ul = document.getElementById('days');

  for (let index = 0; index < days.length; index += 1) {
    const li = document.createElement('li');
    li.innerHTML = days[index];
    li.className = 'day';
    ul.appendChild(li);
    if (li.innerText === '24' || li.innerText === '25' || li.innerText === '31') {
      li.classList.add('holiday')
    }
    if (li.innerText === '4' || li.innerText === '11' || li.innerText === '18' || li.innerText === '25') {
      li.classList.add('friday');
    }
  }
}

calendarDez(dezDaysList)

// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function criaBotao(feriados) {
  const divPai = document.querySelector('.buttons-container'); //pai do elemento a ser criado
  const botaoFeriado = document.createElement('button');// criado o botão
  botaoFeriado.innerText = feriados;// adicionado texto ao botão
  botaoFeriado.id = 'btn-holiday';// adicionado id ao botão
  divPai.appendChild(botaoFeriado);// colocado o botão como filho de buttons-cointainer
}

criaBotao('Feriados');

// 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
function mudaCor() {
  const feriados = document.getElementsByClassName('holiday');
  const corOriginal = 'rgb(238,238,238)';
  const corNova = 'green';

  for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index].style.backgroundColor === corNova) {
      feriados[index].style.backgroundColor = corOriginal;
    } else {
      feriados[index].style.backgroundColor = corNova;
    }
  }
}

const botaoFeriados = document.getElementById('btn-holiday');
botaoFeriados.addEventListener('click', mudaCor);

// 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function insereTexto(sexta) {
  const elemPai = document.querySelector('.buttons-container');
  const btnSexta = document.createElement('button');
  btnSexta.id = 'btn-friday';
  btnSexta.innerText = sexta;
  elemPai.appendChild(btnSexta);
}
insereTexto('Sexta-feira');

// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
const selecionSexta = document.querySelector('#btn-friday');

function sextaFeira() {
  const dias = document.querySelectorAll('.friday');
  const alteraSexta = 'Sextouu!';
  const sexta = [4, 11, 18, 25];

  for (let index = 0; index < dias.length; index += 1) {
    if (dias[index].innerHTML === alteraSexta) {
      dias[index].innerHTML = sexta[index];
    } else {
      dias[index].innerHTML = alteraSexta;
    }
  }
}

selecionSexta.addEventListener('click', sextaFeira);

// 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário,
// o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
 
function zoom () {
  const calendario = document.querySelector('#days'); // seleciona a ul aonde ficam os dias do calendário.
  calendario.addEventListener('mouseover', function(event){ //utiliza uma função anônima com o parâmetro event para pegar o dia.
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '400';
  })
};
 function tamanhoNormal() {
  const calendario = document.querySelector('#days');
  calendario.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
 };

zoom();
tamanhoNormal();

// 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a 
// string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function criaTarefa(tarefa){
  const listaTarefa = document.querySelector('.my-tasks');
  const novaTarefa = document.createElement('span');
  novaTarefa.innerText = tarefa;
  listaTarefa.appendChild(novaTarefa);
}
criaTarefa('Estudar');

// 8 -Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá 
//receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
function criaLegenda(cor){
  const elemPai = document.querySelector('.my-tasks');
  const novoElemento = document.createElement('div');
  novoElemento.className = 'task';
  novoElemento.style.backgroundColor = cor;
  elemPai.appendChild(novoElemento);
}

criaLegenda('blue');

// 9 - Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua 
//tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , 
//ela estará selecionada.
const corTarefa = document.querySelector('.task');

function selecionaTarefa(event) {
 event.target.classList.add('selected');
}
corTarefa.addEventListener('click', selecionaTarefa);