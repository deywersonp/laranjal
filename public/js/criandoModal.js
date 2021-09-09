let modalFather = document.querySelector('#modalFather');

console.log(modalFather)

// let image = document.createElement('img');
// image.src = "./public/img/orange-available.png";
// image.style.width = "65px";
// image.style.height = "65px";
// image.alt = "Disponível"
// box.appendChild(image)

// let paragraph1 = document.createElement('p')
// paragraph1.classList.add("text-center");
// paragraph1.classList.add("align-middle");
// paragraph1.innerHTML = `${box.id} - Disponível`
// box.appendChild(paragraph1)

// let modalFade = document.createElement('div');
//   let modalDialog = document.createElement('div');
//     let modalContent = document.createElement('div');
//       let modalHeader = document.createElement('div');
//           let modalTitle = document.createElement('h5');
//           let modalButton = document.createElement('button');
//       let modalTitle = document.createElement('h5');
//       // SCRIPT DE CRIAÇÃO DAS MESAS
//       let modalFooter = document.createElement('div');
//       let modalForm = document.createElement('form');
//         let footerInput1 = document.createElement('input');
//         let footerInput2 = document.createElement('input');
//         let footerInput3 = document.createElement('input');
//         let footerButton = document.createElement('input');
//         let footerInput4 = document.createElement('input');

let modalFade = document.createElement('div');
modalFade.id = staticBackdrop
modalFade.classList.add('modal')
modalFade.setAttribute('data-bs-backdrop', 'static');
modalFade.setAttribute('');

let modalDialog = document.createElement('div');
let modalContent = document.createElement('div');
let modalHeader = document.createElement('div');
let modalTitle = document.createElement('h5');
let modalButton = document.createElement('button');
let modalTitle = document.createElement('h5');
// SCRIPT DE CRIAÇÃO DAS MESAS
let modalFooter = document.createElement('div');
let modalForm = document.createElement('form');
let footerInput1 = document.createElement('input');
let footerInput2 = document.createElement('input');
let footerInput3 = document.createElement('input');
let footerButton = document.createElement('input');
let footerInput4 = document.createElement('input');