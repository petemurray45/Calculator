//class used to house functions for calculator and to recieve info from event listeners

class Calculator {
    constructor(previousNumberTextElement, currentNumberTextELement){
        this.previousNumberTextElement = previousNumberTextElement
        this.currentNumberTextELement = currentNumberTextELement
        this.clear()

    }

    clear() {
        this.currentNumber = ""
        this.previousNumber = ""
        this.operation = undefined;

    }

    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0, -1) //removes last digit

    }

    appendNumber(number){
        if(number === "." && this.currentNumber.includes(".")) return; // prevents from typing more than one "."
        this.currentNumber = this.currentNumber.toString() + number.toString() // converts numbers to strings


    }

    chooseOperation(operation){
        if(this.currentNumber === "") return; // prevents from executing function if operator pressed multiple times
        if(this.previousNumber !== ""){
            this.compute()
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = ""

    }

    compute(){
        let computation;
        let current = parseFloat(this.currentNumber); //converts strings to numbers
        let previous = parseFloat(this.previousNumber);
        if(isNaN(current) || isNaN(previous)) return; // if button is not a number (i.e an operation button) function wont execute
        switch(this.operation){
            case "+":
                computation = previous + current;
                break;
            case "-":
                computation = previous - current;
                break;
            case "x":
                computation = previous * current;
                break;
            case "÷":
                computation = previous / current;
                break;
            default:
                return;

        }
        this.currentNumber = computation;
        this.operation = undefined;
        this.previousNumber = "";


    }

    updateDisplay(){
        this.currentNumberTextELement.innerText = this.currentNumber; 
        this.previousNumberTextElement.innerText = this.previousNumber;
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




//Event listeners for each of the buttons

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearBtn.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})