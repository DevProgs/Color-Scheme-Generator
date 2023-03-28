fetch(
  'https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5'
)
  .then((res) => res.json())
  .then((data) => console.log(data));