let feedback = document.querySelector('a.feedback.button');

let feedbackModal = document.querySelector('div.feedback-modal-wrapper');
let feedbackModalCloseButton = document.querySelector('button.feedback-close-button');
let feedbackModalButton = document.querySelector('a.feedback-access-button');

let exit = document.querySelector('a.exit.button');

let exitModal = document.querySelector('div.exit-modal-wrapper');
let exitModalConfirmButton = document.querySelector('div .exit-confirm-button');
let exitModalCloseButton = document.querySelector('div .exit-close-button');


feedback.addEventListener('click', () => {
  feedbackModal.classList.add('active');
});

feedbackModalButton.addEventListener('click', () => {
  feedbackModal.classList.remove('active');
});

feedbackModalCloseButton.addEventListener('click', () => {
  feedbackModal.classList.remove('active');
});


exit.addEventListener('click', () => {
  exitModal.classList.add('active');
});

exitModalConfirmButton.addEventListener('click', () => {
  exitModal.classList.remove('active');
});

exitModalCloseButton.addEventListener('click', () => {
  exitModal.classList.remove('active');
});