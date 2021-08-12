// Creating variables (input, submit button)

let InputField = document.querySelector(".item-field");
let SubmitButton = document.querySelector(".submit-new-item");
let NewListItem = document.querySelector(".new-list-item");
let ListOfItems = document.querySelector(".items-list");

// Function which corresponds to the adding element on the button click

SubmitButton.addEventListener('click', () => {
    let InputValue = InputField.value;
    if(InputValue === ""){
        alert('napisz coś');
    } else {
        let li = document.createElement('li');
        ListOfItems.innerHTML = InputValue;
        ListOfItems.insertBefore(li, ListOfItems.childNodes[0]);
        InputField.value = '';
    }
})













/* let newItemField = document.querySelector(".item-field");


function getInputValue(event) {            //Input field value checking
    event.preventDefault();

    let NewUserItem = Number(newItemField.value);
    
}


let submitNewItem = document.querySelector('.submit-new-item');
submitNewItem.addEventListener('click', getInputValue);

// submit-new-item.AddEeventListener("click", CheckInputField ); */