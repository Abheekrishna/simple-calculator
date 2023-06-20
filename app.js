const numberBtn = document.querySelectorAll('[data-numbers]');
const operationBtn = document.querySelectorAll('[data-operations]');
const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-allClear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousNumberTextDiv = document.querySelector('[data-previousNumberText]');
const currentNumberTextDiv = document.querySelector('[data-currentNumberText]');

let previousNumber = '';
let currentNumber = '';
let lastOperation = '';
let result = null;
let haveDot = false;



numberBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if(e.target.innerText === '.' && haveDot) {
            return;
        }
        currentNumber += e.target.innerText;
        currentNumberTextDiv.innerText = currentNumber;
        
    })
})


operationBtn.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!currentNumber) return;
        haveDot = false;
        const operationName = e.target.innerText;

        if(currentNumber && previousNumber && lastOperation) {
            mathOperations();
        } else {
            result = parseFloat(currentNumber);
        }
        clear();
        lastOperation = operationName;
    })
})

const clear = (name = '') => {
    previousNumber = `${currentNumber} ${name} `
    previousNumberTextDiv.innerText = previousNumber;
    currentNumberTextDiv.innerText = '';
    currentNumber = '';
}

const mathOperations = () => {
    if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(currentNumber)
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(currentNumber)
    } else if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(currentNumber)
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(currentNumber)
    }
}