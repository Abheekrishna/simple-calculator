const numberBtn = document.querySelectorAll('[data-numbers]');
const operationBtn = document.querySelectorAll('[data-operations]');
const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-allClear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousNumberTextDiv = document.querySelector('[data-previousNumberText]');
const currentNumberTextDiv = document.querySelector('[data-currentNumberText]');
const year = document.getElementById('year');


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
        clear(operationName);
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

equalsBtn.addEventListener('click', () => {
    if(!currentNumber || !previousNumber) return;
    haveDot = false;
    mathOperations();
    clear()
    currentNumberTextDiv.innerText = result;
})


allClearBtn.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    lastOperation = '';
    currentNumberTextDiv.innerText = '';
    previousNumberTextDiv.innerText = '';
})

deleteBtn.addEventListener('click', () => {
    currentNumber = currentNumber.toString().slice(0, -1);
    currentNumberTextDiv.innerText = currentNumber;
})

const newYear = (new Date()).getFullYear();
year.innerText = `${newYear}`;