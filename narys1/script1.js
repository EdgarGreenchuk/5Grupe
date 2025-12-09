// ============================================
// NARYS 1 - UŽDUOTYS
// Pavyzdinis failas - kiekvienas narys kuria panašų savo folderyje
// ============================================

// Pavyzdžiui, jei narys1 pasirenka užduotį 1 ir 4:

// UŽDUOTIS 1: Atsitiktinės spalvos mygtukas
const randomColorBtn = document.getElementById('randomColorBtn');

if (randomColorBtn) {
    randomColorBtn.addEventListener('click', function() {
        // Generuojame atsitiktinę hex spalvą
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });
}

// UŽDUOTIS 4: Teksto kopijavimas
const textInput = document.getElementById('textInput');
const textDisplay = document.getElementById('textDisplay');

if (textInput && textDisplay) {
    textInput.addEventListener('input', function() {
        textDisplay.textContent = this.value || 'Tekstas atsiras čia...';
    });
}

// ============================================
// PASTABOS:
// - Visada patikrink ar elementai egzistuoja (if sąlyga)
// - Naudok 'this' arba const kintamuosius
// - Komentuok savo kodą
// - Laikykis kod style taisyklių
// ============================================
