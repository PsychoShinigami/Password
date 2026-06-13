const passwordLength = document.querySelector(".slider-value");
const slider = document.querySelector(".slider");

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});

const uppercase = document.querySelector("#upperCase");
let includeUppercase = false;

uppercase.addEventListener('change', function() {
    if (this.checked) {
        includeUppercase = true;
    } else {
        includeUppercase = false;
    }
});

const lowercase = document.querySelector("#lowercase");
let includeLowercase = false;

lowercase.addEventListener('change', function() {
    if (this.checked) {
        includeLowercase = true;
    } else {
        includeLowercase = false;
    }
})

const numbers = document.querySelector("#numbers");
let includeNumbers = false;

numbers.addEventListener('change', function() {
    if (this.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
})

const specialCharacters = document.querySelector("#specialCharacters");
let includeSpecialCharacters = false;

specialCharacters.addEventListener('change', function() {
    if (this.checked) {
        includeSpecialCharacters = true;
    } else {
        includeSpecialCharacters = false;
    }
})