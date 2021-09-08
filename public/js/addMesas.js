
let modalBody01 = document.querySelector('#modalBody01')

function criaMesas() {
    let inicio = 1;
    let fim = 20;

    for (inicio; inicio <= fim; inicio++) {
        //Adiciona dentro do modal
        let box = document.createElement('div');
        box.classList.add('posicao-mesa');
        box.classList.add('box');
        box.id = `mesa-0${inicio}`
        modalBody01.appendChild(box)

        //  Adiciona dentro do box
        let link = document.createElement('a');
        link.href = "#";
        box.appendChild(link)

        let image = document.createElement('img');
        image.src = "./public/img/orange-available.png";
        image.style.width = "65px";
        image.style.height = "65px";
        image.alt = "Disponível"
        box.appendChild(image)

        let paragraph1 = document.createElement('p')
        paragraph1.classList.add("text-center");
        paragraph1.classList.add("align-middle");
        paragraph1.innerHTML = `${box.id} - Disponível`
        box.appendChild(paragraph1)

        //Adiciona dentro do paragraph2
        let span = document.createElement('span')
        span.classList.add("font-weight-bold");
        span.innerHTML = "Selecionar este Lugar";
        box.appendChild(span)
    }
}

criaMesas();