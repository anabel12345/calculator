let displayValue='';
const buttonList = document.querySelectorAll("button")
let num1=0;
let num2=0;
let operator='';



buttonList.forEach(button=>{
    console.log(button)
    button.addEventListener('click',function(){
        updateDisplay(button.value)
    })
})




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



function updateDisplay(value){
    displayValue+=value;
    let ansDisplay = document.querySelector('.answer-display')
    ansDisplay.textContent =displayValue;

}



const operators = document.querySelectorAll(".operator")
operators.forEach(button=>{
    button.addEventListener('click',function(){
        operator=button.value;
        num2=parseInt(displayValue,10);
        displayValue=''
        updateDisplay(operator)
        displayValue=''
    })
})



const equalSign=document.querySelector('.equals-button')
equalSign.addEventListener('click',function(){
    num1=num2;
    num2=parseInt(displayValue,10);
    displayValue=''
    updateDisplay(operate(num1, num2, operator))
    displayValue=''
    
    
})


const clear=document.querySelector('.clear')
clear.addEventListener('click',function(){
    displayValue=''
    updateDisplay('')
    num1=0
    num2=0
    operator=''
    
    
})
