const color = document.querySelector('.color')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const color4 = document.querySelector('.color4')
const color5 = document.querySelector('.color5')
// data.colors[0].hex.value;
fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5')
  .then((res) => res.json())
  .then(
    (data) => (color.style.backgroundColor = data.colors[0].hex.value,
    color2.style.backgroundColor = data.colors[1].hex.value,
    color3.style.backgroundColor = data.colors[2].hex.value,
    color4.style.backgroundColor = data.colors[3].hex.value,
    color5.style.backgroundColor = data.colors[4].hex.value
  ));