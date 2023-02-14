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