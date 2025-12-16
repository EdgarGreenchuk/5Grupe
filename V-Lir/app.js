// d Sukurti vieną tekstininį input elementą ir vieną div elementą. Rašant tekstą į input elementą, tas pats tekstas
// atsikartojamas ir div elemente;

const textInput = document.querySelector('#textInput');
const textDisplay = document.querySelector('#textDisplay');

textInput.addEventListener('input', () => {
  textDisplay.innerText = textInput.value;
});

// g Nupaišyti kvadratą su bet kokiu tekstu viduje. Šalia sukurti du color tipo input elementus. Vienas kvadrato spalvai, kitas
// teksto spalvai nustatyti. Keičiant input elementų reikšmes atitinkamai keičiasi kvadrato ir teksto spalvos;

const square = document.querySelector('#colorSquare');
const squareColor = document.querySelector('#squareColor');
const textColor = document.querySelector('#textColor');

squareColor.addEventListener('input', () => {
  square.style.backgroundColor = squareColor.value;
});

textColor.addEventListener('input', () => {
  square.style.color = textColor.value;
});
