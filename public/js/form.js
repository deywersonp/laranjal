let formModal = document.querySelector('div.form-modal-wrapper');
let buttonFormModal = document.querySelector('button.form-close-button');

window.addEventListener('load', () => {
  let scheduleSuccessfully = localStorage.getItem('schedule');

  if (scheduleSuccessfully == 'success') {
    formModal.classList.add('active');
  }
});

buttonFormModal.addEventListener('click', () => {
  formModal.classList.remove('active');
  localStorage.removeItem('schedule');
});