let containerTablePlace = document.querySelector('.container-table-place');

const url = `http://localhost:8000/agendamentos/todos`;

const token = localStorage.getItem('token');
const dateVisit = localStorage.getItem('date');
const unityName = localStorage.getItem('unity');

function getId() {
    let id = 0;
    if (unityName == 'São Paulo 1º andar') {
        id = 1;
    }
    if (unityName == 'São Paulo 2º andar') {
        id = 2;
    }
    if (unityName == 'Santos') {
        id = 3;
    }

    return id;
}


async function getContent() {
    let unityId = getId();
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": 'Bearer ' + token,
            "data_visita": dateVisit,
            "unidade_id": unityId
        }
    });

    const body = await response.json();

    return body;
}


document.addEventListener('DOMContentLoaded', async () => {
    let data = await getContent();
    let random = localStorage.getItem('random');

    let busyTables = [];
    data.forEach((data) => {
        busyTables.push(data.espaco_agendado);
    })

    function findByTableId(tableId) {
        const found = data.find(element => element.espaco_agendado == tableId);
        return found;
    }

    function checkRandom() {
        if (random) {
            getAvailableTables();
        }
    }

    function getAvailableTables() {
        let availableTables = document.querySelectorAll('.table-available');
        let maxValue = availableTables.length;
        let randomNumber = Math.floor(Math.random() * maxValue);
        let selectTable = availableTables[randomNumber]
        chooseTable(selectTable);
    }

    function insertTables() {
        let start = 1;
        let end = 19;

        let start2 = 1;
        let howMany = 12;


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

        checkRandom();
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
                img2.id = `Mesa-${id}`
                if (busyTables.includes(img2.id)) {
                    let found = findByTableId(img2.id)
                    img2.src = '../images/orange.svg';
                    img2.alt = 'Ocupada';
                    img2.classList.add('table-busy');
                    img2.setAttribute('user-nickname', `${found.apelido}`)
                    img2.setAttribute('user-email', `${found.email}`)
                    img2.classList.add('table-busy');
                    img2.addEventListener('click', getProfileInformation)
                } else {
                    img2.src = '../images/green-circle.svg';
                    img2.alt = 'Disponível';
                    img2.classList.add('table-available');
                    img2.addEventListener('click', getInformation)
                }
                whoReceive.appendChild(img2);
                id++;

            } else {
                let img = document.createElement('img');
                img.id = `Mesa-${id}`
                if (busyTables.includes(img.id)) {
                    let found = findByTableId(img.id)
                    img.src = '../images/orange.svg';
                    img.alt = 'Ocupada';
                    img.classList.add('table-busy');
                    img.setAttribute('user-nickname', `${found.apelido}`)
                    img.setAttribute('user-email', `${found.email}`)
                    img.addEventListener('click', getProfileInformation)
                    whoReceive.appendChild(img);
                    id++;
                } else {
                    img.src = '../images/green-circle.svg';
                    img.alt = 'Disponível';
                    img.classList.add('table-available');
                    img.addEventListener('click', getInformation)
                    whoReceive.appendChild(img);
                    id++;
                }
            }
        }
    };
    insertTables();
});

