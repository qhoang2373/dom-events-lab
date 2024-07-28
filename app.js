// /*-------------------------------- Constants --------------------------------*/
const calculator = document.getElementById('calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelectorAll('.button');


// /*-------------------------------- Variables --------------------------------*/

let firstOperand = '';
let secondOperand = '';
let operator = '';



// /*------------------------ Cached Element References ------------------------*/


// /*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  });
});

// breakdown
// buttons.forEach(button)... will be taking the buttons array and moving through it
// if (value === 'C')clearDisplay... if the button's text is "C" then the display will clear
// if (value === '=')... if the button's text is '=' then the calculate function will perform
// if (value === '+', '-', '*', and '/'), then intiate the operator

/*-------------------------------- Functions --------------------------------*/

function handleNumber(number) {
  if (!operator) {
    firstOperand += number;
  } else {
    secondOperand += number;
  }
  display.textContent = firstOperand || '' + operator + secondOperand || '';
}

// breakdown 
// !operator is used for if no operator is set, the number is added
// if there is a number set then add it to the second if else statement

function handleOperator(op) {
  operator = op;
  display.textContent = firstOperand + operator;
}


function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }

// breakdown
// case is checks if the first value is '+' if it is then continue down the function
// parseFloat is used to convert the firstOperand and secondOperand variables to numbers 
// break is used to end the function 

  display.textContent = result;
  firstOperand = result;
  secondOperand = '';
  operator = '';
}

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  display.textContent = '';
}

