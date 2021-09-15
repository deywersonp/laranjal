let form = document.querySelector('#form1');
let formCloseButton = document.querySelector('button.form-close-button');
let inputSubmit = document.querySelector('input[type=submit]');
// console.log(inputSubmit);


inputSubmit.addEventListener('click', (event) => {
  event.submit.preventDefault();

  form.classList.add('active');

  finishForm();
});

function finishForm() {
  formCloseButton.addEventListener('click', () => {
    form.classList.remove('active');
    form.submit();
  })
}