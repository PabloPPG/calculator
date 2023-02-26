//VARIABLES
let firstNum = 0;
let secondNum = 0;
//SELECTORS
let displayLast = document.querySelector("#last-operation");
let displayCurrent = document.querySelector("#current-operation");
const allClear = document.querySelector("#all-clear");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");

displayCurrent.textContent = "0";

//EVENTS
allClear.addEventListener("click", restart);

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
      firstNum = 0;
      displayCurrent.textContent = 0;
      displayLast.textContent = secondNum + arrElement.textContent;
    } else {
      secondNum = operate(
        String(arrElement.textContent),
        Number(firstNum),
        Number(secondNum)
      );
      firstNum = 0;
      displayCurrent.textContent = 0;
      displayLast.textContent = secondNum + arrElement.textContent;
    }
  });
});

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

// - OPERATIONS

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
