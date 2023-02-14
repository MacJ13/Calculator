// Dom elements;
const displayInput = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equationButton = document.querySelector('.equation');
const percentageButton = document.querySelector('.percentage');
const plusminusButton = document.querySelector('.plusminus');
const backspaceButton = document.querySelector('.backspace');
const pointButton = document.querySelector('.point');
const clearButton = document.querySelector('.clear');


// global variable:
let operand1 = '';
let operand2 = '';
let operator = '';
let inputStr = displayInput.value // assign initial display elemnent value;

// addition function
function add(a, b){
    return a + b;
}


// substraction function
function substract(a, b){
    return a - b;
}


// multiplication function
function multiply(a, b){
    return a * b;
}

// division function
function divide(a , b){
    return a / b;
}


// create obj operator with mathematical function as values
const calculation = {
    "+": add,
    '-': substract,
    "*": multiply,
    "/": divide,
}

// function which display typing numbers
function displayInputNumbers(e){
    // check if string if number length exceeds max length (9) numeric characters in 'display' element
    if(inputStr.length > displayInput.maxLength) return;
    
    // clear inpuStr variable to prevent displaying 0 before longer number 
    if(inputStr[0] === '0' && inputStr.length === 1) inputStr = '';

    // we add pressed number to string of number
    inputStr += e.target.dataset.key;
    console.log(inputStr);

    //we add string of number to displayInput element;
    displayInput.value = inputStr; 
}

function updateOperator(key){

    // assign displayInput value to operand1 and convert to number
    operand1 = +displayInput.value
    
    // assign mathematical operator to variable 'operator' from clicked operator button
    operator = key;

}


// listen events after click on one of the digit buttons
digitButtons.forEach( btn => btn.addEventListener('click', displayInputNumbers));

// listen event after click on one of the operator buttons
operatorButtons.forEach( btn => btn.addEventListener('click', e=> {
    const {key} = e.target.dataset;
    updateOperator(key);
}))