
function getInputValue() {            //Input field value checking
    
    let inputValue = document.querySelector('input');
    console.log(inputValue);
}


function getSubmit(event) {                       //Submitting value from inputfield to the console log
    const newItemField = document.querySelector('.item-field').value;
    getSubmit(value);
    console.log(getSubmit);
}

const submitNewItem = document.querySelector('.submit-new-item');
submitNewItem.addEventListener('click', getSubmit);

// submit-new-item.AddEeventListener("click", CheckInputField );