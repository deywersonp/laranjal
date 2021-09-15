let units = document.querySelectorAll("div.unity");
let continueButton = document.querySelector("div.continuar a");

document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('unity');
  continueButton.classList.remove('active');

  units.forEach((unity) => {
    unity.addEventListener('click', () => {
      let unitySelected = unity.children[1].value;
      localStorage.setItem('unity', unitySelected)
    });
  });

  units.forEach((unity) => {
    unity.addEventListener('click', () => {
      if (localStorage.getItem('unity') != null) {
        continueButton.classList.add('active');
      }
    });
  });
});



