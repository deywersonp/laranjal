let mesas = document.querySelectorAll('.col-md-3.col-sm-6.mesa')
let inputMesaSelecionada = document.querySelector('#mesaSelecionada')

document.addEventListener('DOMContentLoaded', () => {
  mesas.forEach((mesa) => {
    mesa.addEventListener('click', getId);
  })
})

function getId(event) {
  let mesaId = event.currentTarget.id
  inputMesaSelecionada.value = mesaId;
}