const passwordLength = document.querySelector(".slider-value");
const slider = document.querySelector(".slider");

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
    passwordStrength();
});

const uppercase = document.querySelector("#upperCase");
let includeUppercase = false;

uppercase.addEventListener('change', function() {
    if (this.checked) {
        includeUppercase = true;
    } else {
        includeUppercase = false;
    }
    passwordStrength();
});

const lowercase = document.querySelector("#lowercase");
let includeLowercase = false;

lowercase.addEventListener('change', function() {
    if (this.checked) {
        includeLowercase = true;
    } else {
        includeLowercase = false;
    }
    passwordStrength();
})

const numbers = document.querySelector("#numbers");
let includeNumbers = false;

numbers.addEventListener('change', function() {
    if (this.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
    passwordStrength();
})

const specialCharacters = document.querySelector("#specialCharacters");
let includeSpecialCharacters = false;

specialCharacters.addEventListener('change', function() {
    if (this.checked) {
        includeSpecialCharacters = true;
    } else {
        includeSpecialCharacters = false;
    }
    passwordStrength();
})

function passwordStrength() {
    const checkboxes = document.querySelectorAll('.checkbox');
    let length = slider.value;
    const strengthMeter = document.querySelector(".strength-meter");
    const strengthTxt = document.querySelector("#pass-strength");
    
    let lengthPoints = length * 1.5;
    if (lengthPoints>50){
        lengthPoints = 50;
    }

    let checkedCount = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedCount++
        };
    });
    let checkBoxPoints = checkedCount * 12.5;

    let totalScore = Math.floor(lengthPoints + checkBoxPoints);
    strengthMeter.style.width = `${totalScore}%`;

    let statusText = "";
    let themeColor = "";
    
    if (checkedCount === 0) {
        statusText = "You must check one box!";
        themeColor = "red";
    }
    else if (length<5) {
        statusText = "Password length must be above four!"
        themeColor = "red";
    }
    else if (totalScore <= 25) {
        statusText = "Very Weak";
        themeColor = "red";
    } 
    else if (totalScore <= 45) {
        statusText = "Weak";
        themeColor = "orange";  
    } 
    else if (totalScore <= 65) {
        statusText = "Medium";
        themeColor = "yellow"; 
    } 
    else if (totalScore <= 85) {
        statusText = "Strong";
        themeColor = "green";
    } 
    else {
        statusText = "Indestructible";
        themeColor = "aqua"; 
    }
    strengthTxt.textContent = statusText;
    strengthTxt.style.color = themeColor;
}

function generatePassword() {
    let length = slider.value;
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercases = "abcdefghijklmnopqrstuvwxyz";
    const digits = "1234567890";
    const specialCharactersList = "!#$&_-/.><+=*()";
    const checkboxes = document.querySelectorAll('.checkbox');
    let checkedCount = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedCount++
        };
    });

    let password = "";
    for (let i=1; i <= length/checkedCount; i++) {
        let choice = Math.floor(Math.random()*26);
        let numChoice = Math.floor(Math.random()*10);
        let SPchoice = Math.floor(Math.random()*15);
        if (uppercase.checked) {
            password += uppercases[choice]
        }
        if (lowercase.checked) {
            password += lowercases[choice];
        }
        if (numbers.checked) {
            password += digits[numChoice];
        }
        if (specialCharacters.checked) {
            password += specialCharactersList[SPchoice];
        }
    }
    document.querySelector('.password').innerText = password;
}

const generateBtn = document.querySelector('.generate-box');
generateBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    let checkedCount = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedCount++
        };
    });
    if (checkedCount === 0) {
        alert("One checkbox must be checked!")
    }
    else {
        generatePassword();
    }
});

const changeBtn = document.querySelector('.change-box');
changeBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    let checkedCount = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedCount++
        };
    });
    if (checkedCount === 0) {
        alert("One checkbox must be checked!")
    }
    else {
        generatePassword();
    }
})