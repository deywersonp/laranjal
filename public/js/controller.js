let inputData = document.querySelector('#inputData');
let dataSelecionada = document.querySelector('#dataSelecionada')

let unidade = document.querySelector('#unidades')
let unidadeSelecionada = document.querySelector('#unidadeSelecionada')

let mesaSelecionada = document.querySelector('#mesaSelecionada')

// Interação entre os inputs de data
let data = new Date();
let dataAtual = data.toISOString().split('T')[0];

inputData.value = dataAtual;
dataSelecionada.value = dataAtual;
inputData.min = dataAtual;

inputData.addEventListener('change', function () {
  let dataDigitada = new Date(this.value)

  if (dataDigitada < new Date(dataAtual)) {
    inputData.value = dataAtual;
    dataSelecionada.value = dataAtual;

    alert(`Informe uma data a partir do dia de hoje (${dataAtual}) !`)
  };

  let dataConvertida = new Date(dataDigitada).getDay()

  if (dataConvertida == 5 || dataConvertida == 6) {
    alert("Escritório disponível apenas de segunda a sexta!")
    inputData.value = dataAtual;
    dataSelecionada.value = dataAtual;
  } else {
    dataSelecionada.value = inputData.value;
  }
});


// Interação entre os inputs de Unidade
unidadeSelecionada.value = unidade.options[unidade.selectedIndex].text;

unidade.addEventListener('change', () => {
  unidadeSelecionada.value = unidade.options[unidade.selectedIndex].text;
})



// Interação entre os inputs de Local
mesaSelecionada.value = 'mesa14'

