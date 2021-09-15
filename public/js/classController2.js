let availableImage = document.querySelector('#command-on');
let firstSpan = document.querySelector('span.first-span');

let unavailableImage = document.querySelector('#command-off');

let continueButton = document.querySelector("div.continuar a");

window.addEventListener('load', () => {
  availableImage.classList.remove('active');
  firstSpan.classList.remove('active');

  continueButton.classList.remove('active');
  continueButton.href = '';
})

availableImage.addEventListener('click', () => {
  availableImage.classList.add('active');
  firstSpan.classList.add('active');

  let unitySelected = localStorage.getItem('unity');

  if (unitySelected == 'São Paulo 1º andar') {
    continueButton.href = './agendamentos-sp1.html'
  } else if (unitySelected == 'São Paulo 2º andar') {
    continueButton.href = './agendamentos-sp2.html'
  } else {
    continueButton.href = './agendamentos-santos.html'
  }

  continueButton.classList.add('active');
})

unavailableImage.addEventListener('click', () => {
  availableImage.classList.remove('active');
  firstSpan.classList.remove('active');

  continueButton.classList.remove('active');
  continueButton.href = '';

  alert("Desculpe-nos :'( \nEssa funcionalidade não está disponível no momento!");
})