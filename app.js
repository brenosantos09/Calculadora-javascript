const previousOperandTextEl = document.getElementById('previous-operand');
const currentOperandTextEl = document.getElementById('current-operand');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const equalButton = document.getElementById('equal-btn');

class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.clear();
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  addNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateScreen() {
    this.currentOperandTextEl.innerText = this.currentOperand;
    this.previousOperandTextEl.innerText = this.previousOperand;
  }
}

const calculate = new Calculator(previousOperandTextEl, currentOperandTextEl);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculate.addNumber(button.innerText);
    calculate.updateScreen();
  });
});

clearButton.addEventListener('click', () => {
  calculate.clear();
  calculate.updateScreen();
});
