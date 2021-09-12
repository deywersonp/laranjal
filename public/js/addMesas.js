containerTablePlace = document.querySelector('.container-table-place');

console.log(containerTablePlace);

function insertTables() {
    let inicio = 1;
    let fim = 19;

    let inicio2 = 1;
    let howMany = 12;


    for (inicio2; inicio2 <= howMany; inicio2++) {
        if (inicio2 === 1) {
            id = 1
            createTables(id, inicio, fim);
        }
        if (inicio2 === 2) {
            id = 21
            createTables(id, inicio, fim);
        }
        if (inicio2 === 3) {
            id = 41
            createTables(id, inicio, fim);
        }
        if (inicio2 === 4) {
            id = 61
            createTables(id, inicio, fim);
        }
        if (inicio2 === 5) {
            id = 81
            createTables(id, inicio, fim);
        }
        if (inicio2 === 6) {
            id = 101
            createTables(id, inicio, fim);
        }
        if (inicio2 === 7) {
            id = 121
            createTables(id, inicio, fim);
        }
        if (inicio2 === 8) {
            id = 141
            createTables(id, inicio, fim);
        }
        if (inicio2 === 9) {
            id = 161
            createTables(id, inicio, fim);
        }
        if (inicio2 === 10) {
            id = 181
            createTables(id, inicio, fim);
        }
        if (inicio2 === 11) {
            id = 201
            createTables(id, inicio, fim);
        }
        if (inicio2 === 12) {
            id = 221
            createTables(id, inicio, fim);
        }
    }
}

function createTables(id, inicio, fim) {
    let firstGroup = document.createElement('div');
    firstGroup.classList.add('table-place')

    let secondGroup = document.createElement('div');
    secondGroup.classList.add('table-place')
    secondGroup.classList.add('second')

    let whoReceive = firstGroup;
    containerTablePlace.appendChild(firstGroup)

    for (inicio; inicio <= fim; inicio++) {
        if (inicio % 2 === 0) {
            let img = document.createElement('img');
            img.src = '../images/cancel.svg';
            img.alt = 'Bloqueado';
            img.classList.add('table-unavailable');
            whoReceive.appendChild(img);
            id++;

        } else if (inicio === 11) {
            let div = document.createElement('div');
            div.classList.add('table-separator')
            containerTablePlace.appendChild(div);

            containerTablePlace.appendChild(secondGroup);
            whoReceive = secondGroup;

            let img1 = document.createElement('img');
            img1.src = '../images/cancel.svg';
            img1.alt = 'Bloqueado';
            img1.classList.add('table-unavailable');
            whoReceive.appendChild(img1);
            id++;

            let img2 = document.createElement('img');
            img2.src = '../images/green-circle.svg';
            img2.alt = 'Disponível';
            img2.classList.add('table-available');
            img2.id = `Mesa-${id}`
            whoReceive.appendChild(img2);
            id++;

        } else {
            let img = document.createElement('img');
            img.src = '../images/green-circle.svg';
            img.alt = 'Disponível';
            img.classList.add('table-available');
            img.id = `Mesa-${id}`
            whoReceive.appendChild(img);
            id++;
        }
    }

    return id;
};

insertTables();