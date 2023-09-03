let btns = document.querySelectorAll('button')
let output = document.querySelector('.display')
let clearClicked = false;


let operand1 = null;
let operand2 = null;
let operator = null;

btns.forEach(btn => {
    btn.addEventListener('click', function(){
        if (operand1 == null){
            operand1 = Number(btn.value);
            output.innerHTML = operand1;
        } else if (operator == null){
            operator = btn.value;
            output.innerHTML = `${operand1}${operator}`;
        } else if (operand2 == null){
            operand2 = Number(btn.value);
            output.innerHTML = `${operand1}${operator}${operand2}`;
        } else if (btn.value == '='){
            output.innerHTML = operate(operand1, operand2, operator);
            //console.log(operate(operand1, operand2, operator));
        } else if (btn.value == 'clear'){
            if (!clearClicked){
                operand1 = null;
                operand2 = null;
                operator = null;
                output.innerHTML = '0';
                clearClicked = true;

                setTimeout(() => {
                    clearClicked = false;
                }, 500);
            }
        }
    })
})





function operate(num1, num2, operator){
    if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1, num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '/'){
        return divide(num1, num2);
    } else{
        return 'Error';
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

console.log (operate(6,2,'/'));