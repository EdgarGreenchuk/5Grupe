# Užduočių Sprendimo Užuominos

## Užduotis 1: Atsitiktinė spalva

**Ką reikia padaryti:**
- Pakeisti mygtuko background spalvą
- Spalva turi būti atsitiktinė

**Užuominos:**
```javascript
// Atsitiktinė spalva HEX formatu
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 
// Arba RGB formatu
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
const randomColor = `rgb(${r}, ${g}, ${b})`;
```

---

## Užduotis 2: Formos keitimas

**Ką reikia padaryti:**
- Pakeisti mygtuką į apskritimą (border-radius: 50%)
- Paspaudus dar kartą - grąžinti į pradinę formą

**Užuominos:**
```javascript
let isCircle = false;

// Logika:
if (isCircle) {
    // grąžink į kvadratą
    element.style.borderRadius = '5px';
} else {
    // padaryk apskritimą
    element.style.borderRadius = '50%';
}
```

---

## Užduotis 3: X ir O keitimas

**Ką reikia padaryti:**
- Susikeisti dviejų mygtukų tekstus

**Užuominos:**
```javascript
// Laikinas kintamasis tekstui laikyti
const temp = button1.textContent;
button1.textContent = button2.textContent;
button2.textContent = temp;

// Abu mygtukai turi turėti tą pačią funkciją
```

---

## Užduotis 4: Teksto kopijavimas

**Ką reikia padaryti:**
- Kopijuoti tekstą iš input į div

**Užuominos:**
```javascript
input.addEventListener('input', function() {
    div.textContent = input.value;
});

// 'input' event'as įvyksta kaskart rašant
```

---

## Užduotis 5: Skaičių sudėtis

**Ką reikia padaryti:**
- Patikrinti ar abu input'ai turi skaičius
- Jei taip - rodyti sumą
- Jei ne - rodyti "Įveskite skaičius"

**Užuominos:**
```javascript
// Tikrinti ar tekstas yra skaičius
if (!isNaN(value) && value !== '') {
    // tai skaičius
}

// Konvertuoti tekstą į skaičių
const number = parseFloat(value);
// arba
const number = Number(value);
```

---

## Užduotis 6: Range slankiklis

**Ką reikia padaryti:**
- Rodyti range input reikšmę div elemente

**Užuominos:**
```javascript
rangeInput.addEventListener('input', function() {
    div.textContent = this.value;
});

// HTML: <input type="range" min="10" max="99" step="1">
```

---

## Užduotis 7: Spalvų keitimas

**Ką reikia padaryti:**
- Du color picker'iai
- Vienas keičia kvadrato spalvą
- Kitas keičia teksto spalvą

**Užuominos:**
```javascript
colorPicker1.addEventListener('input', function() {
    square.style.backgroundColor = this.value;
});

colorPicker2.addEventListener('input', function() {
    square.style.color = this.value;
});
```

---

## Užduotis 8: Rūšiuotas sąrašas

**Ką reikia padaryti:**
- Pridėti žodį į masyvą
- Surūšiuoti masyvą
- Atvaizduoti surūšiuotą masyvą

**Užuominos:**
```javascript
let words = [];

function addWord() {
    words.push(newWord);
    words.sort(); // Rūšiuoja abėcėliškai
    
    // Išvalyti <ol>
    list.innerHTML = '';
    
    // Pridėti visus žodžius
    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
}
```

---

## Užduotis 9: Įdėti kvadratai

**Ką reikia padaryti:**
- Trys div'ai vienas kitame
- Kiekvienas turi savo spalvą data-color atribute
- Paspaudus - rodyti tą spalvą

**Užuominos:**
```javascript
// HTML: <div data-color="Raudona">

element.addEventListener('click', function(e) {
    e.stopPropagation(); // SVARBU! Sustabdo event'ą
    
    const color = this.getAttribute('data-color');
    displayDiv.textContent = color;
});

// stopPropagation() reikalingas, kad event'as 
// nepersiduotų į tėvinį elementą
```

---

## Užduotis 10: Spalvos API

**Ką reikia padaryti:**
- Naudoti color picker
- Siųsti užklausą į API
- Rodyti spalvos pavadinimą

**Užuominos:**
```javascript
// Pašalinti # simbolį iš hex spalvos
const hex = colorPicker.value.substring(1);

// API URL
const url = `https://www.thecolorapi.com/id?hex=${hex}`;

// Fetch užklausa
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.name.value); // Spalvos vardas
    });

// Arba su async/await:
async function getColorName() {
    const response = await fetch(url);
    const data = await response.json();
    return data.name.value;
}
```

---

## Bendri Patarimai

### Event Listener'iai:
```javascript
// Geras būdas
element.addEventListener('click', function() {
    // kodas
});

// Arba su arrow function
element.addEventListener('click', () => {
    // kodas
});
```

### Elemento gavimas:
```javascript
const element = document.getElementById('id');
const element = document.querySelector('.class');
const elements = document.querySelectorAll('.class');
```

### Elemento keitimas:
```javascript
element.textContent = 'naujas tekstas';
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.classList.add('class-name');
element.classList.remove('class-name');
element.classList.toggle('class-name');
```

### Patikrinimas ar elementas egzistuoja:
```javascript
if (element) {
    // Elementas rastas, galima su juo dirbti
}
```

---

## Debuginimas

```javascript
// Console.log yra tavo draugas
console.log('Reikšmė:', value);

// Patikrinti elemento buvimą
console.log('Elementas:', element);

// Patikrinti event'ą
element.addEventListener('click', (e) => {
    console.log('Click event:', e);
});
```

---

**Sėkmės sprendžiant užduotis! 🚀**
