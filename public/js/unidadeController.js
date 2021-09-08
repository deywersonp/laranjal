let unidade = document.querySelector('#unidades')
let unidadeSelecionada = document.querySelector('#unidadeSelecionada')

// Interação entre os inputs de Unidade
unidadeSelecionada.value = unidade.options[unidade.selectedIndex].text;

unidade.addEventListener('change', () => {
  unidadeSelecionada.value = unidade.options[unidade.selectedIndex].text;
})
