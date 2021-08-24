// Getting the HTML elements that will be manipulated with JavaScript
const inputField = document.getElementsByClassName("input")[0];
const button = document.getElementsByClassName("draw-btn")[0];
const resultParagraph = document.getElementsByClassName("result")[0];

// Adding a listener that will wait a click on our draw button to run the draw function
button.addEventListener("click", sortNumber);

// Function wich give to user a random number between 1 and the input value
function sortNumber(e) {
    e.preventDefault();
    let number = inputField.value;
    let calc = number - Math.floor(Math.random() * number);
    if (calc == 1){calc += 1}
    else if (calc == number ){calc = number - 1}; 
    
    resultParagraph.innerText = "Result = " + calc;
    
}

