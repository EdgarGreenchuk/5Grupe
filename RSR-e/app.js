console.log('Hello')



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const button = document.querySelector('#RSRrandomColorButton');

let buttonColor = rand (1,6)

function changeColor() {
    let buttonColor = rand(1,6);

    if (buttonColor === 1) {
        button.style.backgroundColor = 'crimson';
    } else if (buttonColor === 2) {
        button.style.backgroundColor = 'skyblue';
    } else if (buttonColor === 3) {
        button.style.backgroundColor = '#8A9A5B';
    } else if (buttonColor === 4) {
        button.style.backgroundColor = '#AAF0D1';
    } else if (buttonColor === 5) {
        button.style.backgroundColor = '#FFD699';
    } else {
        button.style.backgroundColor = '#D8BFD8';
    }
}

button.addEventListener('click', changeColor);

// E UZDUOTIS


function skaiciuotiSuma() {
    const sk1 = Number(document.querySelector('#RSRinput1').value);
    const sk2 = Number(document.querySelector('#RSRinput2').value);
    const rezultatasDiv = document.querySelector('#RSRrezultatas');

if (document.querySelector('#RSRinput1').value === '') {
    rezultatasDiv.innerText = 'Įveskite skaičius';

} else if (document.querySelector('#RSRinput2').value === '') {
    rezultatasDiv.innerText = 'Įveskite skaičius';

} else {
    rezultatasDiv.innerText = sk1 + sk2;
}
}

document.querySelector('#RSRinput1')
    .addEventListener('input', skaiciuotiSuma);

document.querySelector('#RSRinput2')
    .addEventListener('input', skaiciuotiSuma);


