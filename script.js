let btns = document.querySelectorAll('button')
let output = document.querySelector('.display')
let clearClicked = false;
let operatorClicked = false;
let equalClicked = false;

let test = document.querySelector('.op');
// console.log (test.value[0])

let operand1 = null;
let operand2 = null;
let operator = null;

btns.forEach(btn => {
    btn.addEventListener('click', function(){
        if (btn.value == 'clear'){
            if (!clearClicked){
                operand1 = null;
                operand2 = null;
                operator = null;
                output.innerHTML = '0';
                clearClicked = true;
                operatorClicked = false;
                equalClicked = false;

                setTimeout(() => {
                    clearClicked = false;
                }, 500);
            }
        } else if (btn.value == '='){
            equalClicked = true;
            output.innerHTML = operate(Number(operand1), Number(operand2), operator);
            // console.log(operand1);
            // console.log(operand2);
            // console.log(operator);
            //console.log(operate(operand1, operand2, operator));
        } else if (btn.classList.contains('num')){
              if(!operatorClicked){
                if (operand1 == null) {
                    operand1 = btn.value;
                } else{
                    operand1 += btn.value;
                }
                output.innerHTML = operand1;
                //console.log(operand1);
                } else if (operatorClicked){
                    if(operator){
                        if (operand2 == null){
                            operand2 = btn.value;
                        } else{
                            operand2 += btn.value;
                        }
                        output.innerHTML = `${operand1}${operator}${operand2}`;
                        //console.log(operand1);
                    }
                }
        } else if (btn.classList.contains('operator')){
            operator = btn.value;
            operatorClicked = true;
            output.innerHTML = `${operand1}${operator}`
            //console.log(operatorClicked)
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