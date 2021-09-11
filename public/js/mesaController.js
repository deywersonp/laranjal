let mesas = document.querySelectorAll('.table-available')
console.log(mesas)
let inputMesaSelecionada = document.querySelector('#mesa-selecionada')

inputMesaSelecionada.value = 'Mesa-A20';

document.addEventListener('DOMContentLoaded', () => {
  mesas.forEach((mesa) => {
    mesa.addEventListener('click', getId);
  })
})

function getId(event) {
  let mesaId = event.currentTarget.id
  inputMesaSelecionada.value = mesaId;
}
