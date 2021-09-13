let modal = document.querySelector('div.modal-wrapper');
let closeButton = document.querySelector('button.modal-close-button');
let continueButton = document.querySelector('button.modal-continue-button');
let modalInputTable = document.querySelector('input#modal-input-table');

let guidelineModal = document.querySelector('div.modal-wrapper-guidelines');
let backButton = document.querySelector('div.modal-guidelines-header .back');
let guidelineInputTable = document.querySelector('input#modal-guidelines-input-table');

let tables = document.querySelectorAll('.table-available');


document.addEventListener('DOMContentLoaded', () => {
  tables.forEach((table) => {
    table.addEventListener('click', getId);
  });
});

closeButton.addEventListener('click', closeModal);
continueButton.addEventListener('click', openGuidelineModal);
backButton.addEventListener('click', closeGuidelineModal);

function getId(event) {
  let tableId = event.currentTarget.id
  modalInputTable.value = tableId;
  guidelineInputTable.value = tableId;
  openModal();
};

function openModal() {
  modal.classList.add('active');
};

function closeModal() {
  modal.classList.remove('active');
};

function openGuidelineModal() {
  guidelineModal.classList.add('active');
};

function closeGuidelineModal() {
  closeModal();
  guidelineModal.classList.remove('active');
};