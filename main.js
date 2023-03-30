const schemeContainer = document.querySelector('.scheme-container');
const btn = document.querySelector('.btn');
const selectedColor = document.querySelector('.color-picker');
const selectedMode = document.querySelector('.selector')

const getColorScheme = () => {
  console.log(selectedMode.value)
  let schemeHTML = '';
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor.value.substring(
      1
    )}&mode=analogic&count=5`
  )
    .then((res) => res.json())
    .then((data) =>
      data.colors.forEach(
        (color) => (
          (schemeHTML += `<div style="background: ${color.hex.value}"></div>`),
          (schemeContainer.innerHTML = schemeHTML)
        ),
        (schemeHTML = '')
      )
    );
};

btn.addEventListener('click', getColorScheme);

getColorScheme();


fetch('https://www.thecolorapi.com/scheme?hex=ff00ff&mode=analogic&count=5')
  .then((res) => res.json())
  .then((data) => console.log(data._links.schemes));
