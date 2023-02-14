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


function operate(){
    // clear inputStr variable to empty string
    inputStr = '';

    // if operator doesn't exist we leave from fucntion
    if(!operator) return;

    // assign displayInput value to second operand variable
    // convert to displayInput to number
    operand2 = +displayInput.value;

    // display error if it's division by 0 and leave the function
    if(operand2 === 0 && operator === '/'){
        displayInput.value = 'ERROR!';
        return
    }

    // assign chosen property to call proper mathematical function
    const calculate = calculation[operator];

    // assign result to displayInput 
    displayInput.value = calculate(operand1, operand2);
    
    // assign variable operator to empty string after calculation
    operator = '';
}

function updateOperator(key){
    // call the function to clear inputStr variable to empty string
    operate()

    // assign displayInput value to operand1 and convert to number
    operand1 = +displayInput.value
    
    // assign mathematical operator to variable 'operator' from clicked operator button
    operator = key;

}

function undoTyping(){
    // we remove last number from display string
    
    // if inputStr is empty we assign 0 
    inputStr = (displayInput.value.slice(0, displayInput.value.length -1)) || '0';
    
    displayInput.value = inputStr;
    
}


// listen events after click on one of the digit buttons
digitButtons.forEach( btn => btn.addEventListener('click', displayInputNumbers));

// listen event after click on one of the operator buttons
operatorButtons.forEach( btn => btn.addEventListener('click', e=> {
    const {key} = e.target.dataset;
    updateOperator(key);
}))

// listen event after click on equation button
equationButton.addEventListener('click', operate);

// listen event after click on backspace button
backspaceButton.addEventListener('click', undoTyping);