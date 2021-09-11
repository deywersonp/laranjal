let place01 = document.querySelector('.table-content.place01');

let inicio = 1;
let fim = 13;

let inicio2 = fim;
let fim2 = fim + 11;

function criaPrimeiraFileiraMesas() {
    let primeiraDiv = document.createElement('div');
    primeiraDiv.classList.add('place01-1');

    place01.appendChild(primeiraDiv);

    for (inicio; inicio <= fim; inicio++) {
        if (inicio % 2 === 0) {
            let img = document.createElement('img');
            img.src = './public/images/cancel.svg';
            img.alt = 'Bloqueado';
            img.classList.add('table-unavailable');
            primeiraDiv.appendChild(img);
        } else if (inicio === fim) {
            let div = document.createElement('div');
            div.classList.add('table-separator')
            place01.appendChild(div);
        } else {
            let img = document.createElement('img');
            img.src = './public/images/green-circle.svg';
            img.alt = 'Disponível';
            img.classList.add('table-available');
            img.id = `Mesa-A${inicio}`
            primeiraDiv.appendChild(img);
        }
    }

    criaSegundaFileiraMesas();
}

function criaSegundaFileiraMesas() {
    let segundaDiv = document.createElement('div');
    segundaDiv.classList.add('place01-2');
    place01.appendChild(segundaDiv);

    for (inicio2; inicio2 <= fim2; inicio2++)
        if (inicio2 % 2 === 1) {
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
            img.id = `Mesa-A${inicio2}`
            segundaDiv.appendChild(img);
        }
}

criaPrimeiraFileiraMesas();