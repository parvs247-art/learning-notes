const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

const resultDisplay = document.getElementById('result');

addButton.addEventListener('click', () => {
    const num1= parseFloat(input1.value);
const num2= parseFloat(input2.value);
    const result = num1 + num2;
    resultDisplay.textContent = `Result: ${result}`;
});

subtractButton.addEventListener('click', () => {
    const num1= parseFloat(input1.value);
const num2= parseFloat(input2.value);
    const result = num1 - num2;
    resultDisplay.textContent = `Result: ${result}`;
});

multiplyButton.addEventListener('click', () => {
    const num1= parseFloat(input1.value);
const num2= parseFloat(input2.value);
    const result = num1 * num2;
    resultDisplay.textContent = `Result: ${result}`;
});

divideButton.addEventListener('click', () => {
    const num1= parseFloat(input1.value);
const num2= parseFloat(input2.value);
    const result = num1 / num2;
    if (num2 === 0) {
        resultDisplay.textContent = 'Error: Division by zero';
    } else {
        resultDisplay.textContent = `Result: ${result}`;
    }
});