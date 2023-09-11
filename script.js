//DOM selectors

const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const display = document.querySelector('[data-current-operand]');
const keys = document.querySelectorAll(".key")




// event listeners for buttons - to know each is assigned properly

for(i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', e => {
        if(e.target.matches("button")){
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;

            

        
            if(!action){
               if(displayedNum === '0'){
                display.textContent = keyContent;
               } else {
                display.textContent = displayedNum + keyContent;
               }




            } if(
                action === "add" || 
                action === "subract" ||
                action === "multiply" ||
                action === "divide"
            ){
                console.log("operator-key")
                key.dataset.previousKeyType = "operator";




            } if(action === "clear"){
                console.log("clear-key")
                display.textContent = "0"


            } if(action === "decimal"){
                console.log("decimal-key")
                display.textContent = display.textContent + ".";


            } if(action === "calculate"){
                console.log("calculate-key")


            } if(action === "delete"){
                console.log("delete-key")
                display.textContent = display.textContent.slice(0, -1);
                
            }

                
        }
    })
}







// calculator functions 

function calculate(){


}


