let instructModal = document.querySelector('.instruct-modal-wrapper');
let instructModalButton = document.querySelector('button.instruct-modal-continue-button');

window.addEventListener("load", () => {
  if (!localStorage.getItem('random')) {
    instructModal.classList.add('active');
  }
})

instructModalButton.addEventListener("click", () => {
  instructModal.classList.remove('active');
})