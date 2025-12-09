// ============================================
// NARYS 6 - UŽDUOTYS
// Pavyzdinis failas - kiekvienas narys kuria panašų savo folderyje
// ============================================

// Pavyzdžiui, jei narys6 pasirenka užduotį 6:

// UŽDUOTIS 6: Range slankiklio reikšmės rodymas
const rangeInput = document.getElementById('rangeInput');
const rangeDisplay = document.getElementById('rangeDisplay');

if (rangeInput && rangeDisplay) {
    rangeInput.addEventListener('input', function() {
        rangeDisplay.textContent = this.value;
    });
}

// ============================================
// PASTABOS:
// - Visada patikrink ar elementai egzistuoja (if sąlyga)
// - Naudok 'this' arba const kintamuosius
// - Komentuok savo kodą
// - Laikykis code style taisyklių
// ============================================
