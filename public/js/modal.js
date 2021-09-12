let modal = document.querySelector('div.modal-wrapper');
let button = document.querySelector('button.modal-close-button')
let tables = document.querySelectorAll('.table-available')
let modalInputTable = document.querySelector('input#modal-input-table')

document.addEventListener('DOMContentLoaded', () => {
  tables.forEach((table) => {
    table.addEventListener('click', getId);
  });
});

button.addEventListener('click', closeModal)

function getId(event) {
  let tableId = event.currentTarget.id
  modalInputTable.value = tableId;
  openModal();
}

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}