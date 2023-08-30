//DOM selectors

const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const deleteBtn = document.querySelector('[data-delete]')
const clearBtn = document.querySelector('[data-all-clear]')
const equalsBtn = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const display = document.getElementsByClassName('current-operand')
const keys = document.querySelector('.keys')
const key = e.target;
const action = key.dataset.action
// classes and constructors to be used to store data

// event listeners 

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        if(!action){
            console.log('numberKey')
        }

    }
})

