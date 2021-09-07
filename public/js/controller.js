

let inputData = document.querySelector('#inputData');

let data = new Date();
let dataAtual = data.toISOString().split('T')[0];

inputData.value = dataAtual;
inputData.min = dataAtual;

inputData.addEventListener('change', function () {
  let dataDigitada = this.value;
  if (dataDigitada < dataAtual) {
    inputData.value = dataAtual;
  };

  let dataConvertida = new Date(dataDigitada).getDay()

  if (dataConvertida == 5 || dataConvertida == 6) {
    alert("Escritório disponível apenas de segunda a sexta!")
    inputData.value = dataAtual;
  }
});

