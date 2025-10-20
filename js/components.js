// CTA3
const buttons = document.querySelectorAll(".toggleButton");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

// Slider
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const bubble = slider.parentElement.querySelector(".bubble");

  function setBubble() {
    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const newVal = ((val - min) * 100) / (max - min);

    let text = val;
    if (slider.id === "price") text = `${val},-`;
    if (slider.id === "time") text = `${val} min`;
    if (slider.id === "difficulty") text = val < 33 ? "Nem" : val < 66 ? "Mellem" : "Svær";

    bubble.innerHTML = text;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

  slider.addEventListener("input", setBubble);
  setBubble();
});
