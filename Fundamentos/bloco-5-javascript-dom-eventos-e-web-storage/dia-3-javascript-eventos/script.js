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
    if(li.innerText === '4' || li.innerText === '11' || li.innerText === '18' || li.innerText === '25') {
      li.classList.add('friday');
    }
  }
}

calendarDez(dezDaysList)