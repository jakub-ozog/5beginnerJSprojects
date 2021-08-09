
function getInputValue() {            //Input field value checking
    
    let inputValue = document.querySelector('input');
    console.log(inputValue);
}


function getSubmit(event) {                       //Submitting value from inputfield to the console log
    /* let submitButton = document.querySelector("submit-new-item");
    submitButton.addEventListener("click", load);
    console.log("parara"); */
    console.log('buton clicked');
}

const submitNewItem = document.querySelector('.submit-new-item');
submitNewItem.addEventListener('click', getSubmit);

// submit-new-item.AddEeventListener("click", CheckInputField );