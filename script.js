class Calculator {
    constructor(previousNumberTextElement, currentNumberTextELement){
        this.previousNumberTextElement = previousNumberTextElement
        this.currentNumberTextELement = currentNumberTextELement

    }

    clear() {
        this.currentNumber = " "
        this.previousNumber = " "
        this.operation = undefined;

    }

    delete(){


    }

    appendNumber(number){
        if(number === ".") return
        this.currentNumber = this.currentNumber.toString() + number.toString()


    }

    chooseOperation(operation){


    }

    compute(){


    }

    updateDisplay(){
        this.currentNumberTextELement.innerText = this.currentNumber; 



    }



}



//DOM selectors
const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousNumberTextElement = document.querySelector('[data-previous-number]')
const currentNumberTextELement = document.querySelector('[data-current-number]')
const calculator = new Calculator(previousNumberTextElement, currentNumberTextELement)





numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})






