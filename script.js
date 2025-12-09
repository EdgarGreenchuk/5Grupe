// ============================================
// PAVYZDINIAI SPRENDIMAI
// Šis failas skirtas kaip pavyzdys grupės nariams
// Kiekvienas narys turėtų kurti savo .js failą savo folderyje
// ============================================

// ============================================
// UŽDUOTIS 1: Atsitiktinės spalvos mygtukas 
// ============================================
const randomColorBtn = document.getElementById('randomColorBtn');

randomColorBtn.addEventListener('click', function() {
    // Generuojame atsitiktinę hex spalvą
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    randomColorBtn.style.backgroundColor = randomColor;
});

// ============================================
// UŽDUOTIS 2: Formos keitimas (kvadratas ↔ apskritimas)
// ============================================
const shapeChangeBtn = document.getElementById('shapeChangeBtn');
let isCircle = false;

shapeChangeBtn.addEventListener('click', function() {
    if (isCircle) {
        // Grąžiname į kvadratą
        shapeChangeBtn.style.borderRadius = '5px';
        isCircle = false;
    } else {
        // Darome apskritimą
        shapeChangeBtn.style.borderRadius = '50%';
        shapeChangeBtn.style.width = '120px';
        shapeChangeBtn.style.height = '120px';
        isCircle = true;
    }
});

// ============================================
// UŽDUOTIS 3: X ir O mygtukų teksto keitimas
// ============================================
const btnX = document.getElementById('btnX');
const btnO = document.getElementById('btnO');

function swapTexts() {
    const tempText = btnX.textContent;
    btnX.textContent = btnO.textContent;
    btnO.textContent = tempText;
}

btnX.addEventListener('click', swapTexts);
btnO.addEventListener('click', swapTexts);

// ============================================
// UŽDUOTIS 4: Teksto kopijavimas iš input į div
// ============================================
const textInput = document.getElementById('textInput');
const textDisplay = document.getElementById('textDisplay');

textInput.addEventListener('input', function() {
    textDisplay.textContent = textInput.value || 'Tekstas atsiras čia...';
});

// ============================================
// UŽDUOTIS 5: Skaičių sudėtis
// ============================================
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumDisplay = document.getElementById('sumDisplay');

function updateSum() {
    const value1 = num1.value;
    const value2 = num2.value;
    
    // Tikriname ar abu yra skaičiai
    if (value1 !== '' && value2 !== '' && !isNaN(value1) && !isNaN(value2)) {
        const sum = parseFloat(value1) + parseFloat(value2);
        sumDisplay.textContent = sum;
    } else {
        sumDisplay.textContent = 'Įveskite skaičius';
    }
}

num1.addEventListener('input', updateSum);
num2.addEventListener('input', updateSum);

// ============================================
// UŽDUOTIS 6: Range slankiklio reikšmės rodymas
// ============================================
const rangeInput = document.getElementById('rangeInput');
const rangeDisplay = document.getElementById('rangeDisplay');

rangeInput.addEventListener('input', function() {
    rangeDisplay.textContent = rangeInput.value;
});

// ============================================
// UŽDUOTIS 7: Spalvų keitimas (kvadratas ir tekstas)
// ============================================
const colorSquare = document.getElementById('colorSquare');
const squareColor = document.getElementById('squareColor');
const textColor = document.getElementById('textColor');

squareColor.addEventListener('input', function() {
    colorSquare.style.backgroundColor = squareColor.value;
});

textColor.addEventListener('input', function() {
    colorSquare.style.color = textColor.value;
});

// ============================================
// UŽDUOTIS 8: Rūšiuotas sąrašas
// ============================================
const wordInput = document.getElementById('wordInput');
const addWordBtn = document.getElementById('addWordBtn');
const sortedList = document.getElementById('sortedList');

let words = [];

function addWord() {
    const word = wordInput.value.trim();
    
    if (word !== '') {
        words.push(word);
        words.sort(); // Rūšiuojame abėcėliškai
        
        // Išvalome sąrašą
        sortedList.innerHTML = '';
        
        // Pridedame rūšiuotus žodžius
        words.forEach(function(w) {
            const li = document.createElement('li');
            li.textContent = w;
            sortedList.appendChild(li);
        });
        
        wordInput.value = '';
    }
}

addWordBtn.addEventListener('click', addWord);

// Pridedame galimybę pridėti žodį paspaudus Enter
wordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addWord();
    }
});

// ============================================
// UŽDUOTIS 9: Įdėti kvadratai
// ============================================
const outerSquare = document.querySelector('.outer-square');
const middleSquare = document.querySelector('.middle-square');
const innerSquare = document.querySelector('.inner-square');
const colorInfo = document.getElementById('colorInfo');

outerSquare.addEventListener('click', function(e) {
    e.stopPropagation(); // Sustabdome event propagation
    colorInfo.textContent = this.getAttribute('data-color');
});

middleSquare.addEventListener('click', function(e) {
    e.stopPropagation();
    colorInfo.textContent = this.getAttribute('data-color');
});

innerSquare.addEventListener('click', function(e) {
    e.stopPropagation();
    colorInfo.textContent = this.getAttribute('data-color');
});

// ============================================
// UŽDUOTIS 10: Spalvos pavadinimas iš API
// ============================================
const colorPicker = document.getElementById('colorPicker');
const colorName = document.getElementById('colorName');

colorPicker.addEventListener('input', async function() {
    const hex = colorPicker.value.substring(1); // Pašaliname # simbolį
    
    try {
        colorName.textContent = 'Ieškoma...';
        
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
        const data = await response.json();
        
        colorName.textContent = `Spalvos pavadinimas: ${data.name.value}`;
    } catch (error) {
        colorName.textContent = 'Klaida gaunant spalvos pavadinimą';
        console.error('Error:', error);
    }
});
