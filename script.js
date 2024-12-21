let display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
  display.textContent = '0';
}

// Function to delete the last character
function deleteLast() {
  if (display.textContent.length === 1 || display.textContent === '0') {
    display.textContent = '0';
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

// Function to append numbers
function appendNumber(number) {
  if (display.textContent === '0') {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

// Function to append operators
function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if ('+-*/%'.includes(lastChar)) {
    display.textContent = display.textContent.slice(0, -1) + operator;
  } else {
    display.textContent += operator;
  }
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.textContent.replace('÷', '/').replace('×', '*'));
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}
