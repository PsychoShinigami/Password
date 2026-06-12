const passwordLength = document.querySelector(".slider-value");
const slider = document.querySelector(".slider");

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});
