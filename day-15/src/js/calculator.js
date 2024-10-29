import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import "../scss/calculator.scss";

/**
 *
    * Don't do this, you will have many unnecessary eventlisteners.  
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
    });
    });
 */

const keysClicked = [];
const calculator = document.querySelector(".calculator");
const screen = document.getElementById("screen");
const operators = ["+", "-", "x", "/", "%"];
let ANS = 0;

/**
 *
 * @param {Array} arr
 */
function emptyArray(arr) {
  arr.splice(0, arr.length);
}

calculator.addEventListener("click", (event) => {
  const target = event.target;
  const innerText = target.innerText;

  if (target.nodeName == "BUTTON") {
    if (innerText == "CE") {
      screen.value = "";
      emptyArray(keysClicked);
    } else if (innerText === "ANS") {
      screen.value = ANS;
    } else if (operators.includes(innerText)) {
      keysClicked.push(innerText);
      screen.value = "";
    } else if (innerText !== "=") {
      keysClicked.push(innerText);
      screen.value += innerText;
    } else {
      let modifiedKeys;
      if (operators.includes(keysClicked[0])) {
        modifiedKeys = ANS.toString().split().concat(keysClicked);
      } else {
        modifiedKeys = keysClicked;
      }
      ANS = calculate(...parseOperands(modifiedKeys));
      screen.value = ANS;
      emptyArray(keysClicked);
    }
  }
});

/**
 *
 * @param {Array<string>} operands
 */
function parseOperands(operands) {
  const operatorIndex = operators
    .map((o) => operands.indexOf(o))
    .filter((i) => i != -1)[0];
  const operator = operands[operatorIndex];
  const leftOperand = parseInt(operands.slice(0, operatorIndex).join(""), 10);
  const rightOperand = parseInt(operands.slice(operatorIndex + 1).join(""), 10);
  return [leftOperand, operator, rightOperand];
}

/**
 * You can use the builtin `eval` function but, it has the
 * @param {string} leftOperand
 * @param {string} operator
 * @param {string} rightOperand
 * @returns
 */
function calculate(leftOperand, operator, rightOperand) {
  switch (operator) {
    case "+":
      return leftOperand + rightOperand;
    case "-":
      return leftOperand - rightOperand;
    case "x":
      return leftOperand * rightOperand;
    case "/":
      return leftOperand / rightOperand;
    case "%":
      return leftOperand % rightOperand;
  }
}
