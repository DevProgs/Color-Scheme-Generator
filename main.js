const schemeContainer = document.querySelector('.scheme-container');
const btn = document.querySelector('.btn');
const selectedColor = document.querySelector('.color-picker');
const selectedMode = document.querySelector('.selector')


// analogic: '/scheme?hex=FF00FF&mode=analogic&count=5';

// "/scheme?hex=FF00FF&mode=analogic&count=5"
// analogic-complement

// "/scheme?hex=FF00FF&mode=analogic-complement&count=5"
// complement

// "/scheme?hex=FF00FF&mode=complement&count=5"
// monochrome

// "/scheme?hex=FF00FF&mode=monochrome&count=5"
// monochrome-dark

// "/scheme?hex=FF00FF&mode=monochrome-dark&count=5"
// monochrome-light

// "/scheme?hex=FF00FF&mode=monochrome-light&count=5"
// quad

// "/scheme?hex=FF00FF&mode=quad&count=5"
// triad

// "/scheme?hex=FF00FF&mode=triad&count=5"
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

// figure out how to get the scheme names into the input selector field
fetch('https://www.thecolorapi.com/scheme?hex=ff00ff&mode=analogic&count=5')
  .then((res) => res.json())
  .then((data) => console.log(data));
