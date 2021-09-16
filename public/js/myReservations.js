

let main = document.querySelector('main');

let paragraph = document.createElement('p');
main.appendChild(paragraph);

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
main.appendChild(mainContainer);


let mainSecondContainer = document.createElement('div');
mainSecondContainer.classList.add('main-second-container');
mainContainer.appendChild(mainSecondContainer);

let mainInputContainer = document.createElement('div');
mainInputContainer.classList.add('main-input-container');
mainSecondContainer.appendChild(mainInputContainer);

let firstSpan = document.createElement('span');
firstSpan.classList.add('main-date-input');
mainInputContainer.appendChild(firstSpan);

let secondSpan = document.createElement('span');
mainInputContainer.appendChild(secondSpan);

let thirdSpan = document.createElement('span');
mainSecondContainer.appendChild(thirdSpan);

let buttonContainer = document.createElement('div');
mainContainer.appendChild(buttonContainer);

let cancelButton = document.createElement('button');
cancelButton.innerHTML = 'Cancelar';
buttonContainer.appendChild(cancelButton);
