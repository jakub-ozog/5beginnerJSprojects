
// Selectors

let todoInput = document.querySelector(".item-field");
let todoButton = document.querySelector(".submit-new-item");
let todoList = document.querySelector(".items-list");

let clearlistButton = document.querySelector(".clear-list");


//Event Listeners

todoButton.addEventListener('click', addTodo)
clearlistButton.addEventListener('click', clearTodoList);

//Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Create Todo DIV 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete';
    completeButton.classList.add("coplete-btn");
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'Trash';
    trashButton.classList.add("coplete-btn");
    todoDiv.appendChild(trashButton);

    //APPEND to list

    todoList.appendChild(todoDiv);
}


function clearTodoList(event) {

const clearTodo = document.querySelector(".items-list");
const clearTodoNested = document.querySelector(".todo");
const removeItem = clearTodo.removeChild(clearTodoNested);
console.log('Div usunięty');
}

















// Function which corresponds to the adding element on the button click

/* SubmitButton.addEventListener('click', () => {
    let InputValue = InputField.value;
    if(InputValue === ""){
        alert('napisz coś');
    } else {
        let li = document.createElement('li');
        ListOfItems.innerHTML = InputValue;
        ListOfItems.insertBefore(li, ListOfItems.childNodes[0]);
        InputField.value = '';
    }
}) */






