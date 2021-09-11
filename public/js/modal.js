let buttons = document.querySelectorAll('button.places-available');

let modal = document.querySelector('div.modal-wrapper');
let close = document.querySelector('.modal-header .back')

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  })
});

close.addEventListener('click', () => {
  modal.classList.remove('active');
});

function openModal() {
  modal.classList.add('active');
}
