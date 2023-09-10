//DOM selectors

const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const prevOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const keys = document.querySelectorAll(".key")




// event listeners for buttons - to know each is assigned properly

for(i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', e => {
        if(e.target.matches("button")){
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display
            if(!action){
                console.log('number-key')
            } if(
                action === "add" || 
                action === "subract" ||
                action === "multiply" ||
                action === "divide"
            ){
                console.log("operator-key")
            } if(action === "clear"){
                console.log("clear-key")
            } if(action === "decimal"){
                console.log("decimal-key")
            } if(action === "calculate"){
                console.log("calculate-key")
            } if(action === "delete"){
                console.log("delete-key")
            }
                
        }
    })
}


// calculator functions 

function divide(prevOperand, currentOperand){

    return prevOperand/currentOperand;
}

function multiply(prevOperand, currentOperand){

    return prevOperand * currentOperand;
}

function add(prevOperand, currentOperand){

    return prevOperand + currentOperand;
}

function subtract(prevOperand, currentOperand){
    
    return prevOperand - currentOperand;
}


