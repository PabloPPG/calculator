//VARIABLES
let firstNum = 0;
let secondNum = 0;
let operator = "";
//SELECTORS
let displayLast = document.querySelector("#last-operation");
let displayCurrent = document.querySelector("#current-operation");
const allClear = document.querySelector("#all-clear");
const plusMinus = document.querySelector("#plus-minus");
const percentage = document.querySelector("#percentage");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("#equal");

displayCurrent.textContent = "0";

//EVENTS
allClear.addEventListener("click", restart);

plusMinus.addEventListener("click", () => {
  if (!displayCurrent.textContent.includes("-")) {
    displayCurrent.textContent = "- " + displayCurrent.textContent;
    firstNum = Number("-" + firstNum);
  } else {
    displayCurrent.textContent = displayCurrent.textContent.substring(1);
  }
});

percentage.addEventListener("click", () => {
  displayLast.textContent = firstNum / 100;
  secondNum = firstNum;
  firstNum = 0;
  displayCurrent.textContent = "0";
});

numbers.forEach((arrElement) => {
  arrElement.addEventListener("click", () => {
    if (displayCurrent.textContent.length < 15) {
      append(arrElement.textContent);
    } else {
      console.log((displayCurrent.textContent = "Number is too big"));
    }
  });
});

operators.forEach((arrElement) => {
  arrElement.addEventListener("click", () => {
    if (secondNum === 0) {
      secondNum = firstNum;
      firstNumToZero();
      operator = arrElement.textContent;
      displayLast.textContent = secondNum;
    } else {
      operator = arrElement.textContent;
      secondNum = operate(
        arrElement.textContent,
        Number(firstNum),
        Number(secondNum)
      );
      firstNumToZero();
      displayLast.textContent = secondNum;
      console.log(firstNum, secondNum);
    }
  });
});

equalButton.addEventListener("click", equal);

//FUNCTIONS
// - FUNCTIONALITY
function append(numToDisplay) {
  if (displayCurrent.textContent === "0") {
    displayCurrent.textContent = "";
  }
  displayCurrent.textContent += numToDisplay;
  firstNum = displayCurrent.textContent;
}
function restart() {
  firstNum = 0;
  secondNum = 0;
  displayLast.textContent = "";
  displayCurrent.textContent = "0";
}
function firstNumToZero() {
  firstNum = 0;
  displayCurrent.textContent = 0;
}
function clearOperator() {
  operator = "";
}
function lastResult() {}
// - OPERATIONS

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num2 - num1;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 / num1;
}

function equal() {
  if (displayCurrent.textContent != "0") {
    displayLast.textContent = operate(
      String(operator),
      Number(firstNum),
      Number(secondNum)
    );
    secondNum = displayLast.textContent;
    clearOperator();
    firstNumToZero();
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
}
