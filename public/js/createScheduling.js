const form = document.querySelector("form#form1");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = `http://localhost:8000/agendamentos`;
  const unity = document.querySelector('#modal-guidelines-input-unity');
  const date = document.querySelector('#modal-guidelines-input-date');
  const table = document.querySelector('#modal-guidelines-input-table');
  const consultorId = localStorage.getItem('consultor_id');
  const token = localStorage.getItem('token');

  const api = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      nome_unidade: unity.value,
      data_visita: date.value,
      espaco_agendado: table.value
    }),
    headers: {
      "content-type": "application/json",
      "Authorization": 'Bearer ' + token,
      "consultor_id": consultorId
    }
  });

  if (!api.ok) {
    data = await api.json()
  }

  localStorage.setItem('schedule', 'success');
  window.location.href = "./home.html";
});