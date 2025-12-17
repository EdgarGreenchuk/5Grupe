// b. variantas:

 const button = document.getElementById("G_Ban_Button");

  button.addEventListener("click", () => {
    button.classList.toggle("circle");
  });

// f. variantas:

  const range = document.getElementById("rangeInput");
  const valueDiv = document.getElementById("rangeValue");

  range.addEventListener("input", () => {
    valueDiv.textContent = "Reikšmė: " + range.value;
  });

// i. variantas:

  const G_BanResult = document.getElementById("G_BanResult");

  document.querySelectorAll("[data-color]").forEach(square => {
    square.addEventListener("click", (event) => {
      event.stopPropagation();
      G_BanResult.textContent = square.dataset.color;
    });
  });