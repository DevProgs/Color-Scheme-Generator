const schemeContainer = document.querySelector('.scheme-container');
const btn = document.querySelector('.btn');
const selectedColor = document.querySelector('.color-picker');
const selectedMode = document.querySelector('.selector')
const hexValueContainer = document.querySelector('.hex-value--container')

document.addEventListener('click', (e) => {
  navigator.clipboard.writeText(e.target.dataset.color);
})

const getColorScheme = () => {
  let hexHTML = ''
  let schemeHTML = '';
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor.value.substring(
      1
    )}&mode=${selectedMode.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) =>
      data.colors.forEach(
        (color, index) => (
          schemeHTML += `<div class="color" data-color=${color.hex.value} data-index=${index} style="background: ${color.hex.value}"></div>`, 
          hexHTML += `<div class="hex-value">${color.hex.value}</div>`,
          hexValueContainer.innerHTML = hexHTML,
          schemeContainer.innerHTML = schemeHTML
        ),
      )
    );
  };
  
  btn.addEventListener('click', getColorScheme);
  
getColorScheme();


