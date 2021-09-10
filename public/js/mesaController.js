let mesas = document.querySelectorAll('.posicao-mesa.box.disponivel')
let inputMesaSelecionada = document.querySelector('#mesa-selecionada')

inputMesaSelecionada.value = 'Mesa-A20';

console.log(mesas)
document.addEventListener('DOMContentLoaded', () => {
  mesas.forEach((mesa) => {
    mesa.addEventListener('click', getId);
  })
})

function getId(event) {
  let mesaId = event.currentTarget.id
  inputMesaSelecionada.value = mesaId;
}
