let specificImage = document.querySelector('#command-on1');
let firstSpan = document.querySelector('span.first-span');

let randomImage = document.querySelector('#command-on2');
let secondSpan = document.querySelector('span.second-span');

let continueButton = document.querySelector("div.continuar a");

window.addEventListener('load', () => {
  specificImage.classList.remove('active');
  firstSpan.classList.remove('active');

  randomImage.classList.remove('active');
  secondSpan.classList.remove('active');

  localStorage.removeItem('random');

  continueButton.classList.remove('active');
  continueButton.href = '';
})

specificImage.addEventListener('click', () => {
  randomImage.classList.remove('active');
  secondSpan.classList.remove('active');
  localStorage.removeItem('random');

  specificImage.classList.add('active');
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

randomImage.addEventListener('click', () => {
  specificImage.classList.remove('active');
  firstSpan.classList.remove('active');

  randomImage.classList.add('active');
  secondSpan.classList.add('active');
  localStorage.setItem('random', true);

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