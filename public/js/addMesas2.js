let place02 = document.querySelector('.table-content.place02');

let inicio3 = 25;
let fim3 = 37;

let inicio4 = fim3;
let fim4 = fim3 + 11;

function criarTerceiraFileiraMesas() {
  let primeiraDiv = document.createElement('div');
  primeiraDiv.classList.add('place02-1');

  place02.appendChild(primeiraDiv);

  for (inicio3; inicio3 <= fim3; inicio3++) {
    if (inicio3 % 2 === 0) {
      let img = document.createElement('img');
      img.src = './public/images/cancel.svg';
      img.alt = 'Bloqueado';
      img.classList.add('table-unavailable');
      primeiraDiv.appendChild(img);
    } else if (inicio3 === fim3) {
      console.log('36')
      let div = document.createElement('div');
      div.classList.add('table-separator')
      place02.appendChild(div);
    } else {
      let img = document.createElement('img');
      img.src = './public/images/green-circle.svg';
      img.alt = 'Disponível';
      img.classList.add('table-available');
      img.id = `Mesa-0${inicio3}`
      primeiraDiv.appendChild(img);
    }
  }

  criaQuartaFileiraMesas();
}

function criaQuartaFileiraMesas() {
  let segundaDiv = document.createElement('div');
  segundaDiv.classList.add('place02-2');
  place02.appendChild(segundaDiv);

  for (inicio4; inicio4 <= fim4; inicio4++)
    if (inicio4 % 2 === 1) {
      let img = document.createElement('img');
      img.src = './public/images/cancel.svg';
      img.alt = 'Bloqueado';
      img.classList.add('table-unavailable');
      segundaDiv.appendChild(img);
    } else {
      let img = document.createElement('img');
      img.src = './public/images/green-circle.svg';
      img.alt = 'Disponível';
      img.classList.add('table-available');
      img.id = `Mesa-0${inicio4}`
      segundaDiv.appendChild(img);
    }
}

criarTerceiraFileiraMesas();