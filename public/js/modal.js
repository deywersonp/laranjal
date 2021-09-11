let buttons = document.querySelectorAll('button.places-available');

let mesas = document.querySelectorAll('.table-available')
let inputMesaSelecionada = document.querySelector('#mesa-selecionada')

let schedulesModal = document.querySelector('.modal-footer .my-schedules')
let closeSchedulesModal = document.querySelector('#close-my-schedules')

let modal = document.querySelector('div.modal-wrapper');
let close = document.querySelector('.modal-header .back')

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  mesas.forEach((mesa) => {
    mesa.addEventListener('click', getId);
    mesa.addEventListener('click', mostrarMesaSelecionada);
  });
});

close.addEventListener('click', () => {
  modal.classList.remove('active');
  removerMesaSelecionada();
});

closeSchedulesModal.addEventListener('click', removerMesaSelecionada)

function openModal() {
  modal.classList.add('active');
}

function getId(event) {
  let mesaId = event.currentTarget.id
  inputMesaSelecionada.value = mesaId;
}

function mostrarMesaSelecionada() {
  schedulesModal.classList.add('active');
}

function removerMesaSelecionada() {
  schedulesModal.classList.remove('active');
}