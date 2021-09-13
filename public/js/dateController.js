let inputDate = document.querySelector('#input-date');

// Interação entre os inputs de data
let date = new Date();
let currentDate = date.toISOString().split('T')[0];

inputDate.value = currentDate;
inputDate.min = currentDate;

inputDate.addEventListener('change', function () {
  let dateTyped = new Date(this.value)

  if (dateTyped < new Date(currentDate)) {
    inputDate.value = currentDate;

    alert(`Informe uma data a partir do dia de hoje (${currentDate}) !`)
  };

  let dateConverted = new Date(dateTyped).getDay()

  if (dateConverted == 5 || dateConverted == 6) {
    alert("Escritório disponível apenas de segunda a sexta!")
    inputDate.value = currentDate;
  }
});