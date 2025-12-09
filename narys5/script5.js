// ============================================
// NARYS 5 - UŽDUOTYS
// Pavyzdinis failas - kiekvienas narys kuria panašų savo folderyje
// ============================================

// Pavyzdžiui, jei narys5 pasirenka užduotį 5:

// UŽDUOTIS 5: Skaičių sudėtis
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumDisplay = document.getElementById('sumDisplay');

if (num1 && num2 && sumDisplay) {
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
}

// ============================================
// PASTABOS:
// - Visada patikrink ar elementai egzistuoja (if sąlyga)
// - Naudok 'this' arba const kintamuosius
// - Komentuok savo kodą
// - Laikykis code style taisyklių
// ============================================
