//DOM selectors

const clearBtn = document.querySelector('[data-all-clear]')
const deleteBtn = document.querySelector('[data-delete]')
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const prevOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')




// event listeners for buttons - to know each is assigned properly

clearBtn.addEventListener('click', e => {
    if(e.target.matches('button')){
        console.log('clearBtn')
        
    }
})

deleteBtn.addEventListener('click', e => {
    if(e.target.matches('button')){
        console.log('deleteBtn')
    }
})

equalsBtn.addEventListener('click', e => {
    if(e.target.matches('button')){
        console.log('equalsBtn')

    }
})

// using a loop to select number and operation buttons as they form an array

for(i = 0; i < numberBtn.length; i++){
    numberBtn[i].addEventListener('click', e => {
        if(e.target.matches('button')){
            console.log('numberBtn')
        }
    })

}

for(i = 0; i < operationBtn.length; i++){
    operationBtn[i].addEventListener('click', e => {
        if(e.target.matches('button')){
            console.log('operationBtn')
        }
    })
}


