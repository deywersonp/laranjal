

let inputData = document.querySelector('input[type="date"]');

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear();

let dataAtual = `${ano}-${mes}-${dia}`;

inputData.value = dataAtual;
inputData.min = dataAtual;

inputData.addEventListener('change', function () {
  let digitada = this.value;
  if (digitada < dataAtual) {
    inputData.value = dataAtual;
  }
});