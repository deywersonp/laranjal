let containerTablePlace = document.querySelector('.container-table-place');

function insertTables() {
    let start = 1;
    let end = 19;

    let start2 = 1;
    let howMany = 4;


    for (start2; start2 <= howMany; start2++) {
        if (start2 === 1) {
            id = 1
            createTables(id, start, end);
        }
        if (start2 === 2) {
            id = 21
            createTables(id, start, end);
        }
        if (start2 === 3) {
            id = 41
            createTables(id, start, end);
        }
        if (start2 === 4) {
            id = 61
            createTables(id, start, end);
        }
    }
}

function createTables(id, start, end) {
    let firstGroup = document.createElement('div');
    firstGroup.classList.add('table-place')

    let secondGroup = document.createElement('div');
    secondGroup.classList.add('table-place')
    secondGroup.classList.add('second')

    let whoReceive = firstGroup;
    containerTablePlace.appendChild(firstGroup)

    for (start; start <= end; start++) {
        if (start % 2 === 0) {
            let img = document.createElement('img');
            img.src = '../images/cancel.svg';
            img.alt = 'Bloqueado';
            img.classList.add('table-unavailable');
            whoReceive.appendChild(img);
            id++;

        } else if (start === 11) {
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
};

insertTables();