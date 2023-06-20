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