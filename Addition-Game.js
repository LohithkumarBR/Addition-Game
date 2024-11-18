let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let successMessage = "Congradulations! You got it right";
let tryAgainMessage = "Please Try Again!";


function restartButton() {
    let firstRandomNumber = Math.random() * 1000;
    let secondRandomNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);

    gameResultElement.textContent = "";
    userInputElement.value = "";
}

restartButton();


function checkButton() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfFisrtAndSecond = firstRandomInteger + secondRandomInteger;

    if (userEnteredSum === sumOfFisrtAndSecond) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }

}