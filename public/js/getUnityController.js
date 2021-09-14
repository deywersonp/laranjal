let units = document.querySelectorAll("div.unity");
console.log(units);

document.addEventListener('DOMContentLoaded', () => {
  units.forEach((unity) => {
    unity.addEventListener('click', () => {
      let unitySelected = unity.children[1].value;
      localStorage.setItem('unity', unitySelected)
    });
  });
});