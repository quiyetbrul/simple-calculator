let value1 = '';
let value2 = '';
let operator = '';
let result = '';

let firstNumber = document.querySelector('#first-number');
let secondNumber = document.querySelector('#second-number');
let operatorField = document.querySelector('#operator');
let resultField = document.querySelector('#result');

// Number function handles assigning numeric values to variables value1 & value2
handleNumber = event => {
  if (operator == '') {
    value1 += event.target.textContent;
    firstNumber.innerHTML = value1;
  }
  else {
    value2 += event.target.textContent;
    secondNumber.innerHTML = value2;
  }
}

let numberKeys = document.getElementsByClassName('number');
for (let key of numberKeys) {
  key.addEventListener('click', handleNumber);
}

// Operator function handles assigning operators and some edge case handling
handleOperator = event => {

  operator = event.target.textContent;
  operatorField.innerHTML = operator;

  // This allows a user to get a result and continue with additional
  // operations

  if (result != '' || result === 0) {
    value1 = +result;
    firstNumber.innerHTML = value1;

    value2 = '';
    secondNumber.innerHTML = value2;

    result = '';
    resultField.innerHTML = result;
  }
}

let opKeys = document.getElementsByClassName('operator');
for (let key of opKeys) {
  key.addEventListener('click', handleOperator);
}

// Equals function handles the math logic
document.querySelector('.equal').addEventListener('click', function () {

  switch (operator) {
    case '+':
      result = parseInt(value1) + parseInt(value2);
      resultField.innerHTML = result;
      break;

    case '-':
      result = value1 - value2;
      resultField.innerHTML = result;
      break;

    case 'x':
      result = value1 * value2;
      resultField.innerHTML = result;
      break;

    case '/':
      result = value1 / value2;
      resultField.innerHTML = result;
      break;

    case '%':
      result = value1 % value2;
      resultField.innerHTML = result;
      break;
  }
});

// Clear function handles clearing the memory
document.querySelector('.clear').addEventListener('click', function () {

  value1 = '';
  value2 = '';
  operator = '';
  result = '';
  firstNumber.innerHTML = value1;
  secondNumber.innerHTML = value2;
  operatorField.innerHTML = operator;
  resultField.innerHTML = result;

});
