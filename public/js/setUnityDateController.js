let unityInput = document.querySelector('input.input-info1');
let dateInput = document.querySelector('input.input-info2');

let date = localStorage.getItem('date');
let unity = localStorage.getItem('unity');


unityInput.value = unity;
dateInput.value = date;