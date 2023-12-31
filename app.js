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

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  addNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  setOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand + this.operation;
    this.currentOperand = '';
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curent = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curent)) return;
    switch (this.operation) {
      case '+':
        result = prev + curent;
        break;
      case '-':
        result = prev - curent;
        break;
      case '/':
        result = prev / curent;
        break;
      case '*':
        result = prev * curent;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = '';
    this.operation = undefined;
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

operatorButtons.forEach((operation) => {
  operation.addEventListener('click', () => {
    calculate.setOperation(operation.innerText);
    calculate.updateScreen();
  });
});

deleteButton.addEventListener('click', () => {
  calculate.delete();
  calculate.updateScreen();
});

equalButton.addEventListener('click', () => {
  calculate.compute();
  calculate.updateScreen();
});
