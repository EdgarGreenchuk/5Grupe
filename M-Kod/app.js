console.log('Labas'); 

// uzduotis



// c. Sukurti du mygtukus vieną su tekstu “X”, kitą su tekstu “O”. Paspaudus ant bet kurio mygtuko abiejų mygtukų tekstai susikeičia;

const firstButtonX = document.querySelector('.firstButtonX');
const secondButtonO = document.querySelector('.secondButtonO');


const sukeisti = () => {
    const saugomas_tekstas = firstButtonX.innerText;
    firstButtonX.innerText = secondButtonO.innerText;
    secondButtonO.innerText = saugomas_tekstas;
};

firstButtonX.addEventListener('click', sukeisti);
secondButtonO.addEventListener('click', sukeisti);


// j. Sukurti color tipo input laukelį ir div elementą. Parinkus input laukelyje spalvą, tos spalvos vardas turi atsirasti div elemente. Spalvų vardus imti iš API https://www.thecolorapi.com/ Dokumentacija nuorodoje.


const createInput = document.querySelector('[data-create-color-input]');
const createColorName = document.querySelector('.colorTypeName');


createInput.addEventListener('input', () => {
    const hex = createInput.value.replace('#', '');

    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
    .then(response => response.json())
    .then(data => {
    createColorName.innerText = data.name.value;

})
    .catch(() => {
        createColorName.innerText = 'Klaida gaunant spalvos pavadinimą';
    });
});
	





