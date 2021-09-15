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

  continueButton.classList.add('active');
  continueButton.href = './tipo-mesa.html'
})

unavailableImage.addEventListener('click', () => {
  alert("Desculpe-nos :'( \nEssa funcionalidade não está disponível no momento!");
})