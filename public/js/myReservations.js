let main = document.querySelector('main');

let deleteScheduleModal = document.querySelector('div.delete-schedule-modal-wrapper');
let deleteScheduleModalConfirmButton = document.querySelector('div .delete-confirm-button');
let deleteScheduleModalCloseButton = document.querySelector('div .delete-close-button');

const url = `http://localhost:8000/agendamentos`;

const token = localStorage.getItem('token');
const consultorId = localStorage.getItem('userId');


async function getContent() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": 'Bearer ' + token,
      "consultor_id": consultorId
    }
  });

  const body = await response.json();

  return body;
}


document.addEventListener('DOMContentLoaded', async () => {
  let data = await getContent();
  console.log(data)

  if (data.length < 1) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'Ops! Não há agendamentos cadastrados.'
    main.appendChild(paragraph);
  } else {

    let dataSorted = data.sort(function (a, b) {
      return a.data_visita < b.data_visita ? -1 : a.data_visita > b.data_visita ? 1 : 0;
    });

    dataSorted.forEach((data) => {
      let dateVisit = data.data_visita;
      let tableId = data.espaco_agendado;
      let unity = data.nome_unidade;
      let scheduleId = data.id
      createContent(dateVisit, tableId, unity, scheduleId);
    });
  }


  function createContent(date, tableId, unity, scheduleId) {
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
    firstSpan.innerHTML = date.split('T')[0];
    mainInputContainer.appendChild(firstSpan);

    let secondSpan = document.createElement('span');
    secondSpan.innerHTML = tableId;
    mainInputContainer.appendChild(secondSpan);

    let thirdSpan = document.createElement('span');
    thirdSpan.innerHTML = unity;
    mainSecondContainer.appendChild(thirdSpan);

    let buttonContainer = document.createElement('div');
    mainContainer.appendChild(buttonContainer);

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancelar';
    cancelButton.setAttribute('scheduleId', scheduleId)
    cancelButton.addEventListener('click', openDeleteModal)
    buttonContainer.appendChild(cancelButton);
  }


  function openDeleteModal(event) {
    deleteScheduleModal.classList.add('active');
    let schedule = event.currentTarget;
    let id = schedule.getAttribute('scheduleId');
    localStorage.setItem('scheduleId', id);
  }

  function closeDeleteModal() {
    deleteScheduleModal.classList.remove('active');
  }

  deleteScheduleModalCloseButton.addEventListener('click', closeDeleteModal);
  deleteScheduleModalConfirmButton.addEventListener('click', deleteSchedule);

  async function deleteSchedule() {
    let id = localStorage.getItem('scheduleId');
    await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Authorization": 'Bearer ' + token,
        "agendamento_id": id
      }
    });

    localStorage.removeItem('scheduleId');
    closeDeleteModal();
    location.reload();
  }
});
