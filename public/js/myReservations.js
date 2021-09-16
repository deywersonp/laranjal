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

  if (data.lenght < 1) {
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
      createContent(dateVisit, tableId, unity);
    });
  }


  function createContent(date, tableId, unity) {
    let main = document.querySelector('main');

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
    cancelButton.addEventListener('click', deleteSchedule)
    buttonContainer.appendChild(cancelButton);
  }

  function deleteSchedule() {
    console.log('deleting..')
  }
});
