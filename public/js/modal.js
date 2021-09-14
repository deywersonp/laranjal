//Document Variables
let tables = document.querySelectorAll('.table-available');
let unityInfo = document.querySelector('input.input-info1');
let dateInfo = document.querySelector('input.input-info2');

// Selected Table Modal Variables
let modal = document.querySelector('div.modal-wrapper');
let closeButton = document.querySelector('button.modal-close-button');
let continueButton = document.querySelector('button.modal-continue-button');
let modalInputTable = document.querySelector('input#modal-input-table');
let modalInputUnity = document.querySelector('input#modal-input-unity');
let modalInputDate = document.querySelector('input#modal-input-date');

// Guideline Modal Variables
let guidelineModal = document.querySelector('div.modal-wrapper-guidelines');
let backButton = document.querySelector('div.modal-guidelines-header .back');
let guidelineInputTable = document.querySelector('input#modal-guidelines-input-table');
let guidelineInputUnity = document.querySelector('input#modal-guidelines-input-unity');
let guidelineInputDate = document.querySelector('input#modal-guidelines-input-date');


document.addEventListener('DOMContentLoaded', () => {
  tables.forEach((table) => {
    table.addEventListener('click', getInformation);
  });
});

closeButton.addEventListener('click', closeModal);

continueButton.addEventListener('click', openGuidelineModal);
backButton.addEventListener('click', closeGuidelineModal);

function getInformation(event) {
  let tableId = event.currentTarget.id
  modalInputTable.value = tableId;
  modalInputUnity.value = unityInfo.value;
  modalInputDate.value = dateInfo.value;

  guidelineInputTable.value = tableId;
  guidelineInputUnity.value = unityInfo.value
  guidelineInputDate.value = dateInfo.value;

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