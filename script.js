function add(num1, num2){
    return num1+num2
}
function subtract(num1, num2){
    return num1-num2
}
function multiply(num1, num2){
    return num1*num2
}
function divide(num1, num2){
    return num1/num2
}

let num1, num2, operator;

function operate(num1, num2, operator){
    if(operator=='+'){
        return add(num1, num2)
    }else if(operator=='-'){
        return subtract(num, num2)
    }else if(operator=='*'){
        return multiply(num1, num2)
    }else{
        return divide(num1, num2)
    }
}