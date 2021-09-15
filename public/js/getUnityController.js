let units = document.querySelectorAll("div.unity");
let continueButton = document.querySelector("div.continuar a");
let unityOne = document.querySelector("div.unity.one");
let unityTwo = document.querySelector("div.unity.two");
let unityThree = document.querySelector("div.unity.three");


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


let unityOneChild1 = unityOne.children[0];
let unityOneChild2 = unityOne.children[1];

let unityTwoChild1 = unityTwo.children[0];
let unityTwoChild2 = unityTwo.children[1];

let unityThreeChild1 = unityThree.children[0];
let unityThreeChild2 = unityThree.children[1];

unityOne.addEventListener('click', () => {
  unityTwoChild1.classList.remove('active');
  unityTwoChild2.classList.remove('active');

  unityThreeChild1.classList.remove('active');
  unityThreeChild2.classList.remove('active');

  unityOneChild1.classList.add('active');
  unityOneChild2.classList.add('active');
});

unityTwo.addEventListener('click', () => {
  unityOneChild1.classList.remove('active');
  unityOneChild2.classList.remove('active');

  unityThreeChild1.classList.remove('active');
  unityThreeChild2.classList.remove('active');

  unityTwoChild1.classList.add('active');
  unityTwoChild2.classList.add('active');
});

unityThree.addEventListener('click', () => {
  unityOneChild1.classList.remove('active');
  unityOneChild2.classList.remove('active');

  unityTwoChild1.classList.remove('active');
  unityTwoChild2.classList.remove('active');

  unityThreeChild1.classList.add('active');
  unityThreeChild2.classList.add('active');
});