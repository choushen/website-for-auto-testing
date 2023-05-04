let result = 0;
let operator = '';

function addToResult(num) {
  let currentResult = document.getElementById('result').innerHTML;
  if (currentResult === '0' && num !== '.') {
    document.getElementById('result').innerHTML = num;
  } else {
    document.getElementById('result').innerHTML += num;
  }
}

function addOperator(op) {
  result = parseFloat(document.getElementById('result').innerHTML);
  operator = op;
  document.getElementById('result').innerHTML = '0';
}

function calculate() {
  let num = parseFloat(document.getElementById('result').innerHTML);
  switch (operator) {
    case '+':
      result += num;
      break;
    case '-':
      result -= num;
      break;
    case '*':
      result *= num;
      break;
    case '/':
      result /= num;
      break;
  }
  document.getElementById('result').innerHTML = result;
  operator = '';
}

function clearResult() {
  result = 0;
  operator = '';
  document.getElementById('result').innerHTML = '0';
}